import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10 animate-gradient-shift" />
      
      {/* Data streams/Matrix rain effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Data stream elements */}
        <div className="absolute left-10 w-px h-20 bg-primary/20 animate-matrix-rain" style={{ animationDelay: '0s' }} />
        <div className="absolute left-20 w-px h-16 bg-accent/20 animate-matrix-rain" style={{ animationDelay: '3s' }} />
        <div className="absolute left-32 w-px h-24 bg-primary/30 animate-matrix-rain" style={{ animationDelay: '6s' }} />
        <div className="absolute right-20 w-px h-18 bg-accent/25 animate-matrix-rain" style={{ animationDelay: '2s' }} />
        <div className="absolute right-32 w-px h-20 bg-primary/25 animate-matrix-rain" style={{ animationDelay: '8s' }} />
        <div className="absolute right-40 w-px h-22 bg-accent/20 animate-matrix-rain" style={{ animationDelay: '4s' }} />
        
        {/* Binary code streams */}
        <div className="absolute left-1/4 text-xs text-primary/20 animate-matrix-rain font-mono" style={{ animationDelay: '1s' }}>
          01101001<br/>11010101<br/>00101010
        </div>
        <div className="absolute right-1/4 text-xs text-accent/20 animate-matrix-rain font-mono" style={{ animationDelay: '7s' }}>
          10110100<br/>01011010<br/>11001100
        </div>
      </div>
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float animate-pulse-glow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-float animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        {/* Additional particles for more life */}
        <div className="absolute top-1/6 left-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-primary/40 rounded-full animate-float animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-3/4 left-1/6 w-1 h-1 bg-accent/80 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-gradient">AI Engineer</span>
              <br />
              <span className="text-foreground">& Data Scientist</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Architected India's first AI-powered investor matchmaking engine used by 150K+ founders. 
              I work at the intersection of NLP, vector search, and intelligent retrieval systems.
            </p>
            
            <p className="text-lg text-muted-foreground/80 mb-8">
              🇮🇳 India-based • Open to remote/global roles
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-white hover:opacity-90 transition-opacity glow-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/30 hover:bg-primary/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Right side - Profile image with enhanced animations */}
          <div className="flex-1 max-w-md animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110 animate-pulse-glow" />
              <div className="relative glass-card rounded-full p-2 animate-pulse-glow">
                <img 
                  src="/lovable-uploads/8eb92eee-3bbe-4f37-9830-9d10b1e97a50.png" 
                  alt="Jayant Lohia - AI Engineer"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
                />
                {/* Orbiting elements around profile */}
                <div className="absolute -inset-4">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
                  <div className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
                  <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '4s' }} />
                  <div className="absolute left-0 top-1/2 w-1.5 h-1.5 bg-accent/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full glass-card hover:bg-primary/10 transition-colors"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;