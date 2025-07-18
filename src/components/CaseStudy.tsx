import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, ExternalLink, Target, CheckCircle, TrendingUp } from "lucide-react";

const CaseStudy = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Investor Matchmaking Engine",
      category: "Production RAG System",
      problemStatement: "Investors and founders struggled to find relevant matches in a fragmented ecosystem of 150K+ founders and 20K+ investors, leading to inefficient capital allocation and missed opportunities.",
      solution: "Architected a production-grade RAG system with semantic search, vector databases, and intelligent matching algorithms.",
      results: [
        "Serving 150K+ users with >90% NDCG@5 accuracy",
        "<400ms retrieval latency at scale",
        "40% reduction in churn rate",
        "99.99% uptime in production"
      ],
      technologies: ["Python", "FastAPI", "Pinecone", "LangChain", "PostgreSQL", "Docker", "SELF-RAG"],
      metrics: {
        users: "150K+",
        accuracy: "90%",
        latency: "<400ms",
        churn: "-40%"
      },
      challenges: [
        "Handling multi-domain context isolation",
        "Optimizing vector search performance",
        "Implementing real-time ranking updates",
        "Scaling to production workloads"
      ],
      impact: "Revolutionized how investors discover startups in India, processing millions of queries daily with industry-leading accuracy."
    },
    {
      id: 2,
      title: "Unified Startup Taxonomy Classifier",
      category: "NLP Classification System",
      problemStatement: "200K+ Indian startups lacked proper categorization, making it impossible to analyze trends, allocate resources, or provide targeted services across the ecosystem.",
      solution: "Built an end-to-end NLP pipeline with advanced feature engineering, ensemble methods, and hierarchical classification across 1,000+ sector-subsector nodes.",
      results: [
        "99.99% classification accuracy",
        "Processed 200K+ startup profiles",
        "1,000+ taxonomic categories",
        "Reduced manual labeling by 95%"
      ],
      technologies: ["Python", "SentenceTransformers", "Scikit-learn", "TensorFlow", "Pandas", "MLflow"],
      metrics: {
        accuracy: "99.99%",
        startups: "200K+",
        categories: "1,000+",
        automation: "95%"
      },
      challenges: [
        "Handling noisy startup descriptions",
        "Building hierarchical classification",
        "Managing class imbalance",
        "Ensuring scalable inference"
      ],
      impact: "Enabled comprehensive ecosystem analysis and targeted services for the entire Indian startup landscape."
    }
  ];

  const toggleExpansion = (id: number) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Detailed <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dive into real-world AI solutions that created measurable impact
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {caseStudies.map((study) => (
            <Card 
              key={study.id}
              className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleExpansion(study.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        {study.category}
                      </Badge>
                      <div className="flex gap-4 text-sm">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3 text-accent" />
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="font-semibold text-accent">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2 hover:text-gradient transition-colors">
                      {study.title}
                    </CardTitle>
                  </div>
                  <Button variant="ghost" size="sm">
                    {expandedCase === study.id ? 
                      <ChevronUp className="h-4 w-4" /> : 
                      <ChevronDown className="h-4 w-4" />
                    }
                  </Button>
                </div>
              </CardHeader>

              {expandedCase === study.id && (
                <CardContent className="animate-fade-in">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Problem & Solution */}
                    <div className="space-y-6">
                      <div className="p-6 bg-destructive/5 rounded-lg border border-destructive/20">
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-destructive">
                          <Target className="h-5 w-5" />
                          Problem Statement
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.problemStatement}
                        </p>
                      </div>

                      <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-primary">
                          <CheckCircle className="h-5 w-5" />
                          Solution Approach
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div className="p-6 bg-accent/5 rounded-lg border border-accent/20">
                        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-accent">
                          <TrendingUp className="h-5 w-5" />
                          Impact
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.impact}
                        </p>
                      </div>
                    </div>

                    {/* Results & Details */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Key Results</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {study.results.map((result, index) => (
                            <div 
                              key={index}
                              className="p-3 bg-muted/50 rounded-lg text-sm hover:bg-muted/70 transition-colors"
                            >
                              <div className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{result}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Technical Challenges</h4>
                        <div className="space-y-2">
                          {study.challenges.map((challenge, index) => (
                            <div key={index} className="flex items-start gap-2 text-sm">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-muted-foreground">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="secondary"
                              className="hover:scale-105 transition-transform"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button className="gradient-primary text-white hover:opacity-90 w-full">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Technical Deep Dive
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;