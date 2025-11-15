import { Badge } from "@/components/ui/badge";

const skills = {
  Frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "Next.js",
  ],
  Backend: [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "GraphQL",
    "Authentication",
    "Supabase",
  ],
  Tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "Vercel", "AWS"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary uppercase tracking-wider mb-4">Skills</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xl font-bold mb-4 text-primary">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <Badge
                    key={index}
                    className="px-4 py-2 text-sm bg-card hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
