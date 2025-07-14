import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus, Upload } from "lucide-react";
const Projects = () => {
  const [projects] = useState([{
    id: 1,
    title: "AI-Powered Investor Matchmaking Engine",
    description: "Architected production-ready RAG system serving 150K+ users with semantic search and vector databases for intelligent investor-founder matching.",
    technologies: ["Python", "FastAPI", "Pinecone", "LangChain", "PostgreSQL", "Docker"],
    image: "/api/placeholder/400/250",
    githubUrl: "https://github.com/Jayluci4",
    liveUrl: "#",
    category: "AI/RAG Systems",
    featured: true
  }, {
    id: 2,
    title: "Unified Startup Taxonomy Classifier",
    description: "Built NLP pipeline classifying 2L+ startups across 1K+ taxonomies with 99.99% accuracy using advanced feature engineering and ensemble methods.",
    technologies: ["Python", "SentenceTransformers", "Scikit-learn", "TensorFlow", "Pandas"],
    image: "/api/placeholder/400/250",
    githubUrl: "https://github.com/Jayluci4",
    liveUrl: "#",
    category: "NLP/Classification",
    featured: true
  }, {
    id: 3,
    title: "SELF-RAG Agent Infrastructure",
    description: "Developed production infrastructure for self-reflective RAG agents with advanced retrieval strategies and performance optimization.",
    technologies: ["Python", "SELF-RAG", "Vector Search", "FastAPI", "PEFT", "Ollama"],
    image: "/api/placeholder/400/250",
    githubUrl: "https://github.com/Jayluci4",
    liveUrl: "#",
    category: "AI Infrastructure",
    featured: true
  }]);
  return <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Production-ready AI systems, NLP pipelines, and intelligent retrieval engines 
            that power real-world applications at scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map(project => <Card key={project.id} className="glass-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-4xl text-primary/30">📊</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {project.category}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl mb-3 group-hover:text-gradient transition-colors">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>)}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" className="gradient-primary text-white hover:opacity-90 w-full" onClick={() => window.open(project.liveUrl, '_blank')}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>)}
          
          {/* Add New Project Card */}
          <Card className="glass-card border-dashed border-border/50 hover:border-primary/30 transition-all duration-300 group cursor-pointer">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Plus className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Add New Project</h3>
              <p className="text-muted-foreground mb-4">Upload your latest projects via GitHub integration</p>
              <Button variant="outline" size="sm" className="border-primary/30">
                <Upload className="h-4 w-4 mr-2" />
                Connect GitHub
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* GitHub Integration Info */}
        <div className="text-center">
          <Card className="glass-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Github className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">GitHub Integration</h3>
              </div>
              <p className="text-muted-foreground mb-4">Click the button below to explore more about my contributions on github</p>
              <Button className="gradient-primary text-white" onClick={() => window.open('https://github.com/Jayluci4', '_blank')}>
                <Github className="h-4 w-4 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Projects;