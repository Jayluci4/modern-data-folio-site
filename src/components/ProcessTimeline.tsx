import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Database, 
  Brain, 
  Code, 
  TestTube, 
  Rocket, 
  Monitor,
  ChevronRight,
  Clock,
  CheckCircle
} from "lucide-react";

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 0,
      title: "Problem Discovery",
      icon: <Search className="h-6 w-6" />,
      duration: "1-2 weeks",
      description: "Deep dive into business requirements and technical constraints",
      activities: [
        "Stakeholder interviews and requirement gathering",
        "Technical feasibility analysis",
        "Data availability assessment",
        "Success metrics definition"
      ],
      deliverables: ["Problem statement", "Technical requirements", "Success KPIs"],
      tools: ["Notion", "Figma", "Miro"],
      color: "primary"
    },
    {
      id: 1,
      title: "Data Strategy",
      icon: <Database className="h-6 w-6" />,
      duration: "2-3 weeks",
      description: "Design data architecture and collection strategies",
      activities: [
        "Data source identification and evaluation",
        "Data pipeline architecture design",
        "Data quality framework setup",
        "Privacy and compliance review"
      ],
      deliverables: ["Data architecture", "ETL pipelines", "Quality metrics"],
      tools: ["PostgreSQL", "Pandas", "Airflow", "Docker"],
      color: "accent"
    },
    {
      id: 2,
      title: "Model Development",
      icon: <Brain className="h-6 w-6" />,
      duration: "3-4 weeks",
      description: "Build and train ML models with iterative refinement",
      activities: [
        "Exploratory data analysis and feature engineering",
        "Model architecture selection and prototyping",
        "Training pipeline development",
        "Hyperparameter optimization"
      ],
      deliverables: ["Trained models", "Feature pipeline", "Evaluation metrics"],
      tools: ["PyTorch", "TensorFlow", "Scikit-learn", "MLflow"],
      color: "primary"
    },
    {
      id: 3,
      title: "System Integration",
      icon: <Code className="h-6 w-6" />,
      duration: "2-3 weeks",
      description: "Build production-ready APIs and integrate with existing systems",
      activities: [
        "API development and documentation",
        "Database integration and optimization",
        "Authentication and security implementation",
        "Performance optimization"
      ],
      deliverables: ["Production API", "Integration docs", "Security audit"],
      tools: ["FastAPI", "Docker", "PostgreSQL", "Redis"],
      color: "accent"
    },
    {
      id: 4,
      title: "Testing & Validation",
      icon: <TestTube className="h-6 w-6" />,
      duration: "1-2 weeks",
      description: "Comprehensive testing and validation across all system components",
      activities: [
        "Unit and integration testing",
        "Performance benchmarking",
        "A/B testing framework setup",
        "User acceptance testing"
      ],
      deliverables: ["Test suite", "Performance reports", "Validation results"],
      tools: ["pytest", "Locust", "Grafana", "Prometheus"],
      color: "primary"
    },
    {
      id: 5,
      title: "Deployment",
      icon: <Rocket className="h-6 w-6" />,
      duration: "1 week",
      description: "Production deployment with monitoring and scaling",
      activities: [
        "Production environment setup",
        "CI/CD pipeline implementation",
        "Monitoring and alerting setup",
        "Rollback strategy preparation"
      ],
      deliverables: ["Production system", "Monitoring dashboard", "Deployment docs"],
      tools: ["AWS", "Kubernetes", "Terraform", "GitLab CI"],
      color: "accent"
    },
    {
      id: 6,
      title: "Monitor & Optimize",
      icon: <Monitor className="h-6 w-6" />,
      duration: "Ongoing",
      description: "Continuous monitoring, optimization, and improvement",
      activities: [
        "Performance monitoring and optimization",
        "Model drift detection and retraining",
        "User feedback integration",
        "Feature enhancement planning"
      ],
      deliverables: ["Monitoring reports", "Optimization recommendations", "Roadmap updates"],
      tools: ["Grafana", "Prometheus", "MLflow", "Jupyter"],
      color: "primary"
    }
  ];

  const totalDuration = "10-16 weeks";
  const completedProjects = 12;

  return (
    <section id="process-timeline" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">ML Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Systematic approach to building production-ready AI systems
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span><strong>Duration:</strong> {totalDuration}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span><strong>Completed:</strong> {completedProjects} projects</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {processSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeStep === index
                    ? `bg-${step.color}/20 text-${step.color} border-${step.color}/30 border`
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted/70'
                }`}
              >
                {step.icon}
                <span className="font-medium hidden sm:inline">{step.title}</span>
                <span className="text-xs opacity-75">{index + 1}</span>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <Card className="glass-card border-border/50 animate-fade-in">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Overview */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 bg-${processSteps[activeStep].color}/10 rounded-xl text-${processSteps[activeStep].color}`}>
                      {processSteps[activeStep].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{processSteps[activeStep].title}</h3>
                      <p className="text-muted-foreground">{processSteps[activeStep].description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-accent">{processSteps[activeStep].duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Activities</h4>
                      <div className="space-y-2">
                        {processSteps[activeStep].activities.map((activity, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {processSteps[activeStep].tools.map((tool) => (
                          <Badge 
                            key={tool}
                            variant="outline"
                            className={`border-${processSteps[activeStep].color}/30 hover:scale-105 transition-transform`}
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Deliverables */}
                <div>
                  <h4 className="font-semibold mb-4 text-foreground">Deliverables</h4>
                  <div className="space-y-3 mb-8">
                    {processSteps[activeStep].deliverables.map((deliverable, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="font-medium">{deliverable}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Progress Visualization */}
                  <div className="bg-muted/10 rounded-lg p-6">
                    <h4 className="font-semibold mb-4 text-foreground">Project Progress</h4>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Step {activeStep + 1} of {processSteps.length}</span>
                        <span className="text-sm font-medium text-accent">
                          {Math.round(((activeStep + 1) / processSteps.length) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-${processSteps[activeStep].color} transition-all duration-1000`}
                          style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-border/50">
                <Button
                  variant="outline"
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                >
                  Previous Step
                </Button>
                <div className="flex gap-2">
                  {processSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeStep ? 'bg-primary' : 
                        index < activeStep ? 'bg-green-500' : 'bg-muted/50'
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                  disabled={activeStep === processSteps.length - 1}
                >
                  Next Step
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;