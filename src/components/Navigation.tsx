import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };
  const navItems = [{
    label: "About",
    id: "about"
  }, {
    label: "Projects",
    id: "projects"
  }, {
    label: "RAG Chat",
    id: "rag-chat"
  }, {
    label: "Contact",
    id: "contact"
  }];
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-card border-b border-border/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="text-2xl font-bold transition-all duration-300 hover:scale-110 group"
          >
            <span className="text-muted-foreground group-hover:text-gradient transition-all duration-300">
              JL
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => scrollToSection(item.id)} 
                className={`transition-all duration-300 hover:scale-105 ${
                  item.id === 'rag-chat' || item.id === 'contact'
                    ? 'px-4 py-2 border border-primary/30 rounded-full text-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden absolute top-full left-0 w-full glass-card border-b border-border/20">
            <div className="px-6 py-4 space-y-4">
              {navItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)} 
                  className={`block w-full text-left transition-all duration-300 ${
                    item.id === 'rag-chat' || item.id === 'contact'
                      ? 'px-4 py-2 border border-primary/30 rounded-full text-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/10'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;