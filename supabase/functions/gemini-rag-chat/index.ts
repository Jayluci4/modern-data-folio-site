import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Simple text splitter for chunking documents
function splitText(text: string, chunkSize: number = 1000, overlap: number = 200): string[] {
  const chunks: string[] = [];
  let start = 0;
  
  while (start < text.length) {
    let end = start + chunkSize;
    
    // Try to break at sentence boundaries
    if (end < text.length) {
      const lastSentence = text.lastIndexOf('.', end);
      const lastNewline = text.lastIndexOf('\n', end);
      const breakPoint = Math.max(lastSentence, lastNewline);
      
      if (breakPoint > start + chunkSize / 2) {
        end = breakPoint + 1;
      }
    }
    
    chunks.push(text.slice(start, end));
    start = end - overlap;
  }
  
  return chunks;
}

// Simple semantic search using keyword matching and context
function retrieveRelevantChunks(query: string, documents: any[], topK: number = 3): string[] {
  const queryWords = query.toLowerCase().split(/\s+/);
  const allChunks: { chunk: string; score: number; docName: string }[] = [];
  
  // Process each document
  documents.forEach((doc) => {
    const chunks = splitText(doc.content);
    
    chunks.forEach((chunk) => {
      const chunkLower = chunk.toLowerCase();
      let score = 0;
      
      // Calculate relevance score based on keyword matches
      queryWords.forEach((word) => {
        const matches = (chunkLower.match(new RegExp(word, 'g')) || []).length;
        score += matches;
        
        // Bonus for exact phrase matches
        if (chunkLower.includes(query.toLowerCase())) {
          score += 5;
        }
      });
      
      // Bonus for chunks with higher keyword density
      if (score > 0) {
        score = score / chunk.length * 1000; // Normalize by length
      }
      
      allChunks.push({
        chunk,
        score,
        docName: doc.name
      });
    });
  });
  
  // Sort by relevance and return top chunks
  return allChunks
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(item => `[From: ${item.docName}]\n${item.chunk}`)
    .filter(chunk => chunk.trim().length > 50); // Filter out very short chunks
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, documents, apiKey } = await req.json();

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'API key is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Processing RAG request:', { message, documentsCount: documents?.length || 0 });

    let context = "";
    let systemPrompt = `You are an AI assistant that helps answer questions based on provided documents. You should be helpful, accurate, and cite information from the documents when relevant.

Instructions:
- Answer questions based on the provided context from documents
- If the context doesn't contain relevant information, say so clearly
- Be concise but thorough in your responses
- When referencing information, mention which document it came from when possible
- If no documents are provided, you can still provide general helpful responses`;

    // If documents are provided, retrieve relevant context
    if (documents && documents.length > 0) {
      const relevantChunks = retrieveRelevantChunks(message, documents, 3);
      
      if (relevantChunks.length > 0) {
        context = `\nRelevant context from documents:\n\n${relevantChunks.join('\n\n---\n\n')}`;
        systemPrompt += `\n\nUse the following context from the uploaded documents to answer the user's question:${context}`;
      } else {
        systemPrompt += `\n\nNote: No highly relevant content was found in the uploaded documents for this query.`;
      }
    }

    // Call Google Gemini API
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}\n\nUser question: ${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      }
    );

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.text();
      console.error('Gemini API error:', errorData);
      throw new Error(`Gemini API error: ${geminiResponse.status} - ${errorData}`);
    }

    const geminiData = await geminiResponse.json();
    console.log('Gemini response received:', { hasContent: !!geminiData.candidates?.[0]?.content });

    const response = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || 
                    "I apologize, but I couldn't generate a response at this time.";

    return new Response(
      JSON.stringify({ 
        response,
        context: context.length > 0 ? "Used document context" : "No document context used",
        documentsUsed: documents?.length || 0
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in gemini-rag-chat function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        details: 'Failed to process RAG request'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});