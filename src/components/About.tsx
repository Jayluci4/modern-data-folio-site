import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, TrendingUp } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Programming", items: ["Python", "R", "SQL", "JavaScript", "Java"] },
    { category: "ML/AI", items: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost"] },
    { category: "Data Tools", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "Docker"] },
    { category: "Visualization", items: ["Tableau", "Power BI", "D3.js", "Grafana"] }
  ];

  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Improved model accuracy by 15% through advanced feature engineering"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Pipeline",
      description: "Built automated ETL pipelines processing 1M+ records daily"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "ML Models",
      description: "Deployed 10+ machine learning models in production"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Code Quality",
      description: "Maintained 95%+ code coverage with comprehensive testing"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate data scientist with 2+ years of experience transforming raw data into 
            strategic business insights. Currently working at Startt, I specialize in machine 
            learning, predictive analytics, and building scalable data solutions.
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
                    <h4 className="text-xl font-semibold text-foreground">Data Scientist</h4>
                    <p className="text-primary mb-2">Startt • 2022 - Present</p>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Developed ML models for predictive analytics and customer segmentation</li>
                      <li>• Built automated data pipelines reducing processing time by 40%</li>
                      <li>• Collaborated with cross-functional teams to deliver data-driven solutions</li>
                      <li>• Mentored junior analysts and established best practices for data science workflows</li>
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
                    <h4 className="text-lg font-semibold">Data Science Specialist</h4>
                    <p className="text-muted-foreground">Continuous learning through online platforms and industry certifications</p>
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
            {skills.map((skillGroup, index) => (
              <Card key={skillGroup.category} className="glass-card border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 text-accent">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-primary/30">
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
              <Card key={achievement.title} className="glass-card border-border/50 text-center hover:glow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 text-primary">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{achievement.title}</h4>
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