import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Database, Cloud, Code, Zap, Users } from "lucide-react";

const SkillsCloud = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      id: "ai-ml",
      name: "🧠 AI/ML",
      icon: <Brain className="h-5 w-5" />,
      color: "primary",
      description: "Machine Learning & AI frameworks",
      skills: [
        { name: "PyTorch", level: 95, experience: "3+ years" },
        { name: "TensorFlow", level: 90, experience: "2+ years" },
        { name: "Scikit-learn", level: 98, experience: "3+ years" },
        { name: "LangChain", level: 95, experience: "2+ years" },
        { name: "Transformers", level: 92, experience: "2+ years" },
        { name: "PEFT", level: 88, experience: "1+ year" },
        { name: "SELF-RAG", level: 85, experience: "1+ year" }
      ]
    },
    {
      id: "data",
      name: "📊 Data Engineering",
      icon: <Database className="h-5 w-5" />,
      color: "accent",
      description: "Data processing & infrastructure",
      skills: [
        { name: "Pandas", level: 98, experience: "3+ years" },
        { name: "PostgreSQL", level: 95, experience: "3+ years" },
        { name: "Pinecone", level: 92, experience: "2+ years" },
        { name: "MongoDB", level: 85, experience: "2+ years" },
        { name: "Apache Spark", level: 80, experience: "1+ year" },
        { name: "Airflow", level: 78, experience: "1+ year" }
      ]
    },
    {
      id: "backend",
      name: "⚡ Backend",
      icon: <Code className="h-5 w-5" />,
      color: "primary",
      description: "API development & architecture",
      skills: [
        { name: "FastAPI", level: 96, experience: "3+ years" },
        { name: "Python", level: 98, experience: "4+ years" },
        { name: "Docker", level: 90, experience: "2+ years" },
        { name: "REST APIs", level: 95, experience: "3+ years" },
        { name: "GraphQL", level: 75, experience: "1+ year" },
        { name: "Redis", level: 82, experience: "2+ years" }
      ]
    },
    {
      id: "cloud",
      name: "☁️ Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      color: "accent",
      description: "Cloud platforms & deployment",
      skills: [
        { name: "AWS", level: 88, experience: "2+ years" },
        { name: "Kubernetes", level: 75, experience: "1+ year" },
        { name: "CI/CD", level: 85, experience: "2+ years" },
        { name: "Terraform", level: 70, experience: "1+ year" },
        { name: "Monitoring", level: 80, experience: "2+ years" }
      ]
    },
    {
      id: "nlp",
      name: "🔤 NLP & Search",
      icon: <Zap className="h-5 w-5" />,
      color: "primary",
      description: "Natural Language Processing",
      skills: [
        { name: "SentenceTransformers", level: 95, experience: "2+ years" },
        { name: "Vector Search", level: 92, experience: "2+ years" },
        { name: "Semantic Search", level: 90, experience: "2+ years" },
        { name: "RAG Systems", level: 95, experience: "2+ years" },
        { name: "Text Classification", level: 98, experience: "3+ years" },
        { name: "Named Entity Recognition", level: 85, experience: "2+ years" }
      ]
    },
    {
      id: "soft",
      name: "🤝 Leadership",
      icon: <Users className="h-5 w-5" />,
      color: "accent",
      description: "Team leadership & collaboration",
      skills: [
        { name: "Technical Leadership", level: 92, experience: "2+ years" },
        { name: "Team Management", level: 88, experience: "2+ years" },
        { name: "Architecture Design", level: 90, experience: "2+ years" },
        { name: "Code Review", level: 95, experience: "3+ years" },
        { name: "Mentoring", level: 85, experience: "2+ years" }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "text-green-500";
    if (level >= 80) return "text-yellow-500";
    if (level >= 70) return "text-orange-500";
    return "text-red-500";
  };

  const getSkillSize = (level: number) => {
    if (level >= 95) return "text-lg";
    if (level >= 90) return "text-base";
    if (level >= 80) return "text-sm";
    return "text-xs";
  };

  return (
    <section id="skills-cloud" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Interactive <span className="text-gradient">Skills Cloud</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my technical expertise across AI, data engineering, and cloud technologies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary/20 text-primary border-primary/30 border'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted/70'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="max-w-6xl mx-auto">
          {activeCategory === null ? (
            // Overview Cloud
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <Card 
                  key={category.id}
                  className={`glass-card border-border/50 hover:border-${category.color}/30 transition-all duration-300 cursor-pointer group`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-${category.color}/10 rounded-lg text-${category.color}`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-gradient transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.slice(0, 5).map((skill) => (
                        <Badge 
                          key={skill.name}
                          variant="outline"
                          className={`border-${category.color}/30 text-xs hover:scale-105 transition-transform ${getSkillColor(skill.level)}`}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                      {category.skills.length > 5 && (
                        <Badge variant="outline" className="border-muted/30 text-xs">
                          +{category.skills.length - 5} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Detailed Category View
            <Card className="glass-card border-border/50 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 bg-${skillCategories.find(c => c.id === activeCategory)?.color}/10 rounded-xl`}>
                    {skillCategories.find(c => c.id === activeCategory)?.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {skillCategories.find(c => c.id === activeCategory)?.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {skillCategories.find(c => c.id === activeCategory)?.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories.find(c => c.id === activeCategory)?.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-all duration-300 cursor-pointer group"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-semibold ${getSkillColor(skill.level)} group-hover:scale-105 transition-transform`}>
                          {skill.name}
                        </h4>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-muted/50 rounded-full h-2 mb-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            skill.level >= 90 ? 'bg-green-500' :
                            skill.level >= 80 ? 'bg-yellow-500' :
                            skill.level >= 70 ? 'bg-orange-500' : 'bg-red-500'
                          }`}
                          style={{ 
                            width: `${hoveredSkill === skill.name ? skill.level : 0}%`,
                            transitionDelay: `${index * 0.1}s`
                          }}
                        />
                      </div>
                      
                      <p className="text-xs text-muted-foreground">{skill.experience}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsCloud;