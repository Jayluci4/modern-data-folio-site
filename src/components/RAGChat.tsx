import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare, 
  Send, 
  Upload, 
  FileText, 
  Key, 
  Trash2, 
  Bot,
  User,
  Loader2,
  Settings,
  Sparkles
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface Document {
  id: string;
  name: string;
  content: string;
  uploadedAt: Date;
}

const RAGChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [documents, setDocuments] = useState<Document[]>([]);
  const [apiKey, setApiKey] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load API key from localStorage on mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('gemini_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      setShowApiKeyInput(true);
    }
  }, []);

  const saveApiKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key",
        variant: "destructive"
      });
      return;
    }
    localStorage.setItem('gemini_api_key', apiKey);
    setShowApiKeyInput(false);
    toast({
      title: "API Key Saved",
      description: "Your Gemini API key has been saved locally"
    });
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!file.type.includes('text') && !file.name.endsWith('.md') && !file.name.endsWith('.txt')) {
      toast({
        title: "Invalid File Type",
        description: "Please upload text files, markdown, or PDF files",
        variant: "destructive"
      });
      return;
    }

    try {
      const content = await file.text();
      const newDoc: Document = {
        id: Date.now().toString(),
        name: file.name,
        content,
        uploadedAt: new Date()
      };
      
      setDocuments(prev => [...prev, newDoc]);
      toast({
        title: "Document Uploaded",
        description: `${file.name} has been added to your knowledge base`
      });
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "Failed to process the file",
        variant: "destructive"
      });
    }
  };

  const removeDocument = (docId: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== docId));
    toast({
      title: "Document Removed",
      description: "Document has been removed from your knowledge base"
    });
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isStreaming) return;

    if (!apiKey) {
      setShowApiKeyInput(true);
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key first",
        variant: "destructive"
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsStreaming(true);

    // Create assistant message placeholder
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: "",
      role: 'assistant',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, assistantMessage]);

    try {
      const { data, error } = await supabase.functions.invoke('gemini-rag-chat', {
        body: {
          message: userMessage.content,
          documents: documents,
          apiKey: apiKey
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw new Error(`Failed to get response from AI service: ${error.message || 'Unknown error'}`);
      }

      if (data?.error) {
        console.error('AI service error:', data.error);
        throw new Error(data.error);
      }

      // Simulate streaming response
      const response = data.response || "I apologize, but I couldn't generate a response at this time.";
      
      // Stream the response character by character
      let currentResponse = "";
      for (let i = 0; i < response.length; i++) {
        currentResponse += response[i];
        setMessages(prev => 
          prev.map(msg => 
            msg.id === assistantMessage.id 
              ? { ...msg, content: currentResponse }
              : msg
          )
        );
        
        // Add delay for streaming effect
        await new Promise(resolve => setTimeout(resolve, 20));
      }

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred. Please check your API key and try again.';
      
      setMessages(prev => 
        prev.map(msg => 
          msg.id === assistantMessage.id 
            ? { ...msg, content: `Error: ${errorMessage}` }
            : msg
        )
      );
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    toast({
      title: "Chat Cleared",
      description: "All messages have been cleared"
    });
  };

  return (
    <section id="rag-chat" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">AI RAG Chat</span> System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive Retrieval-Augmented Generation chat powered by Google Gemini. 
            Upload your documents and chat with them using advanced AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Documents Panel */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-border/50 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Knowledge Base
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/30 hover:bg-primary/10"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".txt,.md,.text/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                <div className="space-y-2">
                  {documents.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No documents uploaded yet
                    </p>
                  ) : (
                    documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-2 bg-background/50 rounded border border-border/30">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {doc.uploadedAt.toLocaleDateString()}
                          </p>
                        </div>
                        <Button
                          onClick={() => removeDocument(doc.id)}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))
                  )}
                </div>

                <Separator />

                {/* API Key Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">API Key</label>
                    <Button
                      onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {showApiKeyInput ? (
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="Enter Gemini API Key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="text-xs"
                      />
                      <Button
                        onClick={saveApiKey}
                        size="sm"
                        className="w-full gradient-primary text-white"
                      >
                        <Key className="h-4 w-4 mr-2" />
                        Save Key
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Badge variant={apiKey ? "default" : "destructive"}>
                        {apiKey ? "API Key Set" : "No API Key"}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Panel */}
          <div className="lg:col-span-3">
            <Card className="glass-card border-border/50 h-[600px] flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    RAG Chat
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="border-primary/30">
                      {documents.length} Documents
                    </Badge>
                    <Button
                      onClick={clearChat}
                      variant="ghost"
                      size="sm"
                      disabled={messages.length === 0}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center py-12">
                      <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Welcome to RAG Chat</h3>
                      <p className="text-muted-foreground">
                        Upload documents and start chatting with your knowledge base
                      </p>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            message.role === 'user' 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-accent text-accent-foreground'
                          }`}>
                            {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </div>
                          
                          <div className={`rounded-lg p-3 ${
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-background border border-border/50'
                          }`}>
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            <p className={`text-xs mt-1 opacity-60`}>
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                  
                  {isStreaming && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">AI is thinking...</span>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t border-border/50 p-6">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Ask a question about your documents..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          sendMessage();
                        }
                      }}
                      className="resize-none min-h-[60px]"
                      disabled={isStreaming}
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!inputMessage.trim() || isStreaming || !apiKey}
                      className="gradient-primary text-white h-[60px] px-4"
                    >
                      {isStreaming ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RAGChat;