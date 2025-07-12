import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Jayant Lohia</h3>
            <p className="text-muted-foreground mb-4">
              Data Scientist & ML Engineer passionate about transforming data into actionable insights.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                onClick={() => window.location.href = 'mailto:jayantlohia16@gmail.com'}
              >
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                onClick={() => window.open('#', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
                onClick={() => window.open('#', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Ready to collaborate?</p>
              <a
                href="mailto:jayantlohia16@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                jayantlohia16@gmail.com
              </a>
            </div>
            
            <Button
              className="mt-4 gradient-primary text-white hover:opacity-90"
              onClick={() => window.location.href = 'mailto:jayantlohia16@gmail.com'}
            >
              <Mail className="h-4 w-4 mr-2" />
              Hire Me
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/20">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Jayant Lohia. All rights reserved.
          </p>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary/30 hover:bg-primary/10"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;