import { Badge } from "@/components/ui/badge";
import { ZapIcon } from "lucide-react";

const skills = {
  Frontend: [
    "React",
    "Vite",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Angular",
    "Next.js",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Java Spring Boot",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "REST APIs",
    "Authentication",
    "Authorization",
    "Role based access control",
    "JWT",
    "Session management",
    "Baas-Supabase",
  ],
  "AI & Machine Learning": [
    "Machine Learning",
    "Natural Language Processing (NLP)",
    "Semantic Search",
    "Sentence Transformers",
    "Embeddings",
    "Isolation Forest",
    "Anomaly Detection",
    "OpenAI LLM Integration",
    "NLTK",
    "scikit-learn",
    "Python",
  ],
  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Postman",
    "Docker",
    "Vercel",
    "Netlify Hosting",
  ],
  Concepts: [
    "MVC Architecture",
    "Database Modeling & Management",
    "System design-UML",
    "API Development",
    "Object-Relational Mapping (ORM)",
    "Object oriented programming (OOP)",
    "Asynchronous programming",
    "Testing",
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 w-full px-4">
      <div className="md:container lg:container mx-auto border-t border-gray-300 py-4">
        <div className="md:text-center mb-6">
          <div className="text-center">
            <h2 className="text-sm text-primary uppercase tracking-wider mb-4 inline-flex items-center gap-2">
              <ZapIcon className="w-5 h-5 text-primary" />
              <span>Skills</span>
            </h2>
          </div>
          <h3 className="text-m4xl md:text-5xl font-bold mb-6">
            Technical Expertise
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-mlg md:text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-mxl md:text-xl font-bold mb-4 text-primary">
                {category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, index) => (
                  <Badge
                    key={index}
                    className="border-boreder text-card-foreground px-4 py-2 text-skills md:text-sm bg-card hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
