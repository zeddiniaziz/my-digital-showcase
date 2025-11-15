import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto text-center animate-fade-in">
        <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
          Available for new opportunities
        </Badge>

        <p className="text-primary text-lg mb-4">Hello, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-foreground">Your</span>{" "}
          <span className="text-primary">Full Name</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
          Fullstack Web Developer
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
          Full-Stack developer with a growing interest in web development and system design.
          Experienced in building scalable applications and solving complex problems.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            Frontend
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            Backend
          </Badge>
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            Full Stack
          </Badge>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-border hover:bg-secondary"
          >
            Get In Touch
          </Button>
          <Button variant="ghost" className="hover:text-primary">
            Resume
          </Button>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>

        <div className="mt-12">
          <div className="inline-block p-6 rounded-lg bg-card border border-border">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
