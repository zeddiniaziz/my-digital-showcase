import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management system with real-time updates, team collaboration, and project tracking.",
    tags: ["React", "TypeScript", "Firebase", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics with data visualization and automated reporting.",
    tags: ["Next.js", "PostgreSQL", "Chart.js", "API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "Real-time weather application with geolocation, 7-day forecasts, and interactive maps.",
    tags: ["React", "API", "Maps", "PWA"],
    github: "#",
    demo: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Full-featured blogging platform with markdown support, comments, and user profiles.",
    tags: ["React", "Express", "MySQL", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Builder",
    description:
      "Tool for creating and customizing portfolio websites with templates and drag-and-drop interface.",
    tags: ["React", "TypeScript", "CSS", "Vercel"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary uppercase tracking-wider mb-4">My Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A collection of projects showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-border hover:bg-secondary"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
