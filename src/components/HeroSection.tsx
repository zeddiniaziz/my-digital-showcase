import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedBackground from "@/components/AnimatedBackground";
import {
  Github,
  Linkedin,
  Mail,
  Bot,
  ChevronDown,
  Database,
  Code2,
  Globe,
  Eye,
  Download,
} from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-0 pt-20"
    >
      <AnimatedBackground />
      <div className="container mx-auto text-center animate-fade-in relative z-10">
        <Badge className="animate-bounce mb-3 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
          Available for new opportunities
        </Badge>

        <p className="text-primary text-lg mb-1">Hello, I'm</p>

        <h1 className="text-mt1 md:text-7xl font-bold mb-4">
          <span className="text-foreground">Mohamed Aziz</span>{" "}
          <span className="text-primary">Zeddini</span>
        </h1>

        <h2 className="text-center text-mst1 md:text-3xl text-muted-foreground mb-6">
          Fullstack Web Developer
        </h2>

        <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-mlg md:text-lg">
          Full-Stack developer with a growing interest in{" "}
          <span className="text-primary font-bold">web development</span> and{" "}
          <span className="text-primary font-bold">system design.</span>{" "}
          Experienced in building scalable applications and{" "}
          <span className="text-primary font-bold">
            solving complex problems.
          </span>{" "}
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8">
          <button>
            <Badge
              variant="secondary"
              className="group px-4 py-2 text-msm md:text-sm hover:border-primary transition-transform duration-500"
            >
              <Code2 className="mr-1 group-hover:rotate-12 transition-transform duration-500" />
              Frontend
            </Badge>
          </button>
          <button>
            <Badge
              variant="secondary"
              className="group px-4 py-2 text-msm md:text-sm hover:border-primary transition-transform duration-500"
            >
              <Database className="mr-1 group-hover:rotate-12 transition-transform duration-500" />
              Backend
            </Badge>
          </button>
          <button>
            <Badge
              variant="secondary"
              className="group px-4 py-2 text-msm md:text-sm hover:border-primary transition-transform duration-500"
            >
              <Globe className="mr-1 group-hover:rotate-12 transition-transform duration-500" />
              Full Stack
            </Badge>
          </button>
          <button>
            <Badge
              variant="secondary"
              className="group px-4 py-2 text-msm md:text-sm hover:border-primary transition-transform duration-500"
            >
              <Bot className="mr-1 group-hover:rotate-12 transition-transform duration-500" />
              AI & ML
            </Badge>
          </button>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Eye />
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            className="border-border hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </Button>
          <Button
            variant="outline"
            className="border-border hover:bg-primary/90 transition-colors"
            asChild
          >
            <a href="/resume/MohamedAzizZeddiniResume.pdf" download>
              <Download />
              Resume
            </a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center mb-3">
          <a
            href="https://github.com/zeddiniaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Github className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/zeddini-mohamed-aziz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-500 transition-colors group"
          >
            <Linkedin className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
          </a>
          <a
            href="mailto:zeddini.medaziz3024@istic.ucar.tn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <button
            className="hover:text-primary transition-colors"
            onClick={() => scrollToSection("about")}
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="w-5 h-5 animate-bounce mx-6" />
          </button>
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="p-2 rounded-lg bg-aboutcard border border-border">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
