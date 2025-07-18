import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import SkillsCloud from "@/components/SkillsCloud";
import ProcessTimeline from "@/components/ProcessTimeline";
import GitHubActivity from "@/components/GitHubActivity";
import BlogInsights from "@/components/BlogInsights";
import ProgressIndicator from "@/components/ProgressIndicator";
import RAGChat from "@/components/RAGChat";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProgressIndicator />
      <Navigation />
      <main>
        <Hero />
        <About />
        <SkillsCloud />
        <ProcessTimeline />
        <Projects />
        <CaseStudy />
        <GitHubActivity />
        <BlogInsights />
        <RAGChat />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
