import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, TrendingUp } from "lucide-react";
const About = () => {
  const skills = [{
    category: "🧠 NLP & AI Stack",
    items: ["FastAPI + Docker for production NLP models", "LangChain", "SentenceTransformers", "Ollama", "PEFT", "SELF-RAG"],
    description: "Production-ready AI systems and retrieval pipelines"
  }, {
    category: "📊 Data Engineering",
    items: ["Pandas + PostgreSQL for 1M+ records/day", "Vector databases", "Pinecone", "ETL pipelines"],
    description: "Built ETL pipelines with Pandas + PostgreSQL processing 1M+ records daily"
  }, {
    category: "⚡ Core Technologies",
    items: ["Python", "SQL", "JavaScript", "TensorFlow", "PyTorch", "Scikit-learn"],
    description: "Foundation technologies for AI development"
  }, {
    category: "☁️ Infrastructure",
    items: ["AWS", "Docker", "PostgreSQL", "MongoDB", "FastAPI"],
    description: "Scalable deployment and data management"
  }];
  const achievements = [{
    icon: <Brain className="h-6 w-6" />,
    title: "AI-Powered Matching",
    description: "Built investor-founder matchmaking engine serving 150K+ users"
  }, {
    icon: <Database className="h-6 w-6" />,
    title: "NLP Classification",
    description: "99.99% accuracy across 1K+ startup taxonomies with 2L+ records"
  }, {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Vector Search Systems",
    description: "Production RAG systems with semantic retrieval and vector databases"
  }, {
    icon: <Code className="h-6 w-6" />,
    title: "Infrastructure Leadership",
    description: "Led AI infrastructure development and team mentorship"
  }];
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Head of AI at Startt with 2+ years of experience building production-ready AI systems. 
            Specialized in NLP, vector search, and intelligent retrieval systems that power real-world applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">Professional Experience</h3>
            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Head of AI</h4>
                    <p className="text-primary mb-2">Startt • 2022 - 2024</p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Built NLP pipelines classifying 2L+ startups across 1K+ taxonomies with 99.99% accuracy</li>
                      <li>• Architected AI-powered investor matchmaking engine serving 150K+ active users</li>
                      <li>• Deployed production-ready RAG systems using vector search and semantic retrieval</li>
                      <li>• Led AI infrastructure development and mentored engineering teams</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-primary">Education & Certifications</h3>
            <Card className="glass-card border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold">Diploma - AI in Healthcare, Stanford CME - Class of 2024</h4>
                    <p className="text-muted-foreground font-medium text-base">B.Tech – Electrical and Electronics Engineering Indian Institute of Technology, Guwahati - Class of 2023 </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">Deep Learning</Badge>
                    <Badge variant="secondary">Statistical Analysis</Badge>
                    <Badge variant="secondary">Data Visualization</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => <Card key={skillGroup.category} className="glass-card border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-accent">{skillGroup.category}</h4>
                  {skillGroup.description && <p className="text-sm text-muted-foreground mb-4 italic">{skillGroup.description}</p>}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(skill => <Badge key={skill} variant="outline" className="border-primary/30 text-xs">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => <Card key={achievement.title} className="glass-card border-border/50 text-center hover:glow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 text-primary">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;