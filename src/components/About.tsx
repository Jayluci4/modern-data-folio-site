import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, TrendingUp, Briefcase, Building, UserCheck, GraduationCap } from "lucide-react";

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
        "Engineered a complete NLP pipeline to classify 200K+ Indian startups into a structured taxonomy of 1,000+ sector-subsector nodes; achieved 99.99% precision"
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

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8" />
              Professional Experience
            </h3>
            <p className="text-muted-foreground">Journey through impactful roles</p>
          </div>
          
          {/* Experience Cards Stack */}
          <div className="relative max-w-4xl mx-auto h-[600px] mb-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`absolute inset-0 glass-card border-border/50 transition-all duration-500 cursor-pointer ${
                  index === currentExperience 
                    ? 'z-30 scale-100 opacity-100 shadow-2xl border-primary/30 glow-primary' 
                    : index === currentExperience - 1 || (currentExperience === 0 && index === experiences.length - 1)
                    ? 'z-20 scale-95 opacity-40 -translate-y-4 shadow-lg'
                    : 'z-10 scale-90 opacity-20 -translate-y-8 shadow-md'
                }`}
                onClick={() => setCurrentExperience(index)}
                style={{
                  transform: index === currentExperience 
                    ? 'translateY(0) scale(1)' 
                    : index < currentExperience 
                    ? `translateY(-${(currentExperience - index) * 8}px) scale(${1 - (currentExperience - index) * 0.05})`
                    : `translateY(-${(index - currentExperience) * 8}px) scale(${1 - (index - currentExperience) * 0.05})`
                }}
              >
                <CardContent className="p-8 h-full overflow-y-auto">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/20 rounded-xl text-primary flex-shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h4>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                      <p className="text-accent font-medium mt-1">{exp.period}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Code className="h-4 w-4 text-primary" />
                      Technologies
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-105"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-3 text-muted-foreground">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-primary mt-1 text-sm font-bold">•</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentExperience(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentExperience 
                    ? 'bg-primary shadow-lg shadow-primary/50 animate-pulse-glow' 
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
                aria-label={`View experience ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8" />
              Education & Certifications
            </h3>
            <p className="text-muted-foreground">Academic foundation and continuous learning</p>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-card border-border/50 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-xl text-accent flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Diploma, AI in Healthcare</h4>
                    <p className="text-lg text-primary font-semibold">Stanford CME</p>
                    <p className="text-muted-foreground">Class of 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-border/50 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/20 rounded-xl text-accent flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2">B.Tech – Electrical and Electronics Engineering</h4>
                    <p className="text-lg text-primary font-semibold">Indian Institute of Technology, Guwahati</p>
                    <p className="text-muted-foreground mb-4">Class of 2023</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">Machine Learning</Badge>
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">Deep Learning</Badge>
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">Statistical Analysis</Badge>
                      <Badge variant="secondary" className="hover:scale-105 transition-transform">Data Visualization</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Cloud */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary">Technical Skills</h3>
            <p className="text-muted-foreground">Technologies and tools I work with</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card 
                key={skillGroup.category} 
                className="glass-card border-border/50 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3 text-gradient text-lg">{skillGroup.category}</h4>
                  {skillGroup.description && (
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{skillGroup.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="outline" 
                        className="border-primary/30 text-xs hover:border-primary/70 hover:bg-primary/15 transition-all duration-200 hover:scale-110 cursor-default"
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary">Key Achievements</h3>
            <p className="text-muted-foreground">Notable accomplishments and impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="glass-card border-border/50 text-center hover:border-accent/30 hover:scale-[1.05] hover:-translate-y-1 transition-all duration-300 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="font-bold mb-3 text-gradient text-lg">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
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