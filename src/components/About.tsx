import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Code, Database, Brain, TrendingUp, ChevronLeft, ChevronRight, Briefcase, Building, UserCheck } from "lucide-react";

const About = () => {
  const [currentExperience, setCurrentExperience] = useState(0);

  const experiences = [
    {
      title: "Head of AI & Analytics",
      company: "Startt",
      description: "AI-powered investor-founder matchmaking app",
      period: "Jan 2025 – Present",
      technologies: ["SentenceTransformers", "Pinecone", "PEFT", "FastAPI", "SQLite", "Docker", "LangChain", "RAG"],
      icon: <Brain className="h-6 w-6" />,
      highlights: [
        "Led full-stack architecture of a large-scale LLM-based matchmaking engine, matching 150K+ founders to 20K+ investors with >90% NDCG@5 and <400ms retrieval latency",
        "Built a production-grade SELF+DoTA RAG framework using namespace-isolated Pinecone vectors for context-specific retrieval across startup, investor, grant, and news domains",
        "Designed hybrid ranking engine using dense + sparse fusion, cross-encoder reranking, and exponential boosting; improved recommendation accuracy and reduced churn by 40%",
        "Engineered a complete NLP pipeline to classify 200K+ Indian startups into a structured taxonomy of 1,000+ sector-subsector nodes; achieved 99.99% precision",
        "Developed a custom embedding framework combining PCA-based crystallized vectors, harmonic signal enhancement, and adversarial boosting",
        "Integrated ecosystem intelligence signals including stealth raises, founder transitions, and investor behavior using internal watchlists"
      ]
    },
    {
      title: "Founder & Proprietor",
      company: "Zenith Infratech",
      description: "Govt. infra ops under Jal Jeevan Mission",
      period: "Nov 2023 – Jan 2025",
      technologies: ["Excel", "Vendor Management", "Manual Process Optimization"],
      icon: <Building className="h-6 w-6" />,
      highlights: [
        "Founded and operated a B2B/B2G infra business supplying water tanks and manufacturing stagings for government use",
        "Achieved ₹97 lakh in revenue at 21% profit margin in Q1; peaked at ₹70 lakh in a single month with lean, tech-free operations",
        "Closed 2 government contracts with Assam PHE Dept; handled sourcing, compliance, and on-ground operations independently",
        "Successfully exited post-completion of government scheme lifecycle"
      ]
    },
    {
      title: "Manager, Business Analyst",
      company: "Shadowfax",
      description: "Logistics & Supply Chain",
      period: "Jun 2023 – Nov 2023",
      technologies: ["MS Excel", "SQL", "Process Optimization", "QR Systems"],
      icon: <UserCheck className="h-6 w-6" />,
      highlights: [
        "Led packaging cost control initiative achieving a 30% cost cut, surpassing target by 55%",
        "Reduced package label and seal sizes by 85% and 67% respectively, switching to QR-based identification; overall cost down by 45%",
        "Conducted bottom-up user research and implemented a training program to onboard delivery staff to new labeling system",
        "Scaled pilot packaging project to nationwide rollout through simulation-based testing"
      ]
    }
  ];

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

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 animate-gradient-shift gradient-primary opacity-5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
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
          {/* Experience Stack */}
          <div className="animate-fade-in relative">
            <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Professional Experience
            </h3>
            
            {/* Experience Stack Container */}
            <div className="relative h-80 perspective-1000">
              {experiences.map((exp, index) => {
                const isActive = index === currentExperience;
                const offset = index - currentExperience;
                const zIndex = experiences.length - Math.abs(offset);
                const translateY = offset * 20;
                const scale = 1 - Math.abs(offset) * 0.1;
                const opacity = isActive ? 1 : 0.4 - Math.abs(offset) * 0.2;
                
                return (
                  <Card 
                    key={index} 
                    className={`glass-card border-border/50 absolute inset-0 transition-all duration-500 ease-out hover:glow-primary ${isActive ? 'animate-pulse-glow' : ''}`}
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      zIndex,
                      opacity: Math.max(opacity, 0.1)
                    }}
                  >
                    <CardContent className="p-6 h-full overflow-y-auto">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                          {exp.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.description}</p>
                          <p className="text-sm text-accent font-medium">{exp.period}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-foreground mb-2">Key Technologies:</h5>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs border-primary/30 hover:border-primary/50 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">Key Highlights:</h5>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1 text-xs">▸</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Experience Slider */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setCurrentExperience(Math.max(0, currentExperience - 1))}
                  disabled={currentExperience === 0}
                  className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                
                <div className="flex-1 mx-4">
                  <Slider
                    value={[currentExperience]}
                    onValueChange={(value) => setCurrentExperience(value[0])}
                    max={experiences.length - 1}
                    step={1}
                    className="w-full"
                  />
                </div>
                
                <button 
                  onClick={() => setCurrentExperience(Math.min(experiences.length - 1, currentExperience + 1))}
                  disabled={currentExperience === experiences.length - 1}
                  className="p-2 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  {currentExperience + 1} of {experiences.length}
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-primary">Education & Certifications</h3>
            <div className="space-y-4">
              <Card className="glass-card border-border/50 hover:glow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">Diploma, AI in Healthcare</h4>
                      <p className="text-primary font-medium">Stanford CME - Class of 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card border-border/50 hover:glow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">B.Tech – Electrical and Electronics Engineering</h4>
                      <p className="text-primary font-medium">Indian Institute of Technology, Guwahati - Class of 2023</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="animate-pulse-glow">Machine Learning</Badge>
                      <Badge variant="secondary" className="animate-pulse-glow">Deep Learning</Badge>
                      <Badge variant="secondary" className="animate-pulse-glow">Statistical Analysis</Badge>
                      <Badge variant="secondary" className="animate-pulse-glow">Data Visualization</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card 
                key={skillGroup.category} 
                className="glass-card border-border/50 hover:border-primary/30 hover:glow-primary transition-all duration-300 hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-gradient">{skillGroup.category}</h4>
                  {skillGroup.description && (
                    <p className="text-sm text-muted-foreground mb-4 italic">{skillGroup.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="border-primary/30 text-xs hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                        style={{animationDelay: `${(index * skillGroup.items.length + skillIndex) * 0.05}s`}}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-primary">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="glass-card border-border/50 text-center hover:glow-accent transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 text-primary animate-float">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-gradient">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;