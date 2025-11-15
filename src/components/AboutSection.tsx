import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary uppercase tracking-wider mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Contribute & Learn
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Looking for opportunities to apply development skills and contribute to meaningful
            projects in a collaborative environment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h4 className="text-2xl font-bold mb-4">Professional Summary</h4>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I am a passionate developer with a strong interest in software development and
              problem solving. My background in programming has taught me how to design effective
              solutions, and my projects have given me the chance to apply these skills in real
              scenarios.
            </p>
            <p>
              I have worked on full-stack applications, with a focus on clean code, performance,
              and user experience. Through these projects, I have developed proficiency in modern
              web technologies and frameworks.
            </p>
            <p>
              I am looking forward to opportunities where I can work on meaningful projects and
              continue to grow my technical and professional skills.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Frontend Development</h4>
              <p className="text-muted-foreground">
                Hands-on experience in React, TypeScript, and modern CSS frameworks with focus on
                responsive design
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <Database className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Backend Development</h4>
              <p className="text-muted-foreground">
                Experience in Node.js, API design, and database management with focus on scalable
                architecture
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h4 className="text-xl font-bold mb-2">Team Collaboration</h4>
              <p className="text-muted-foreground">
                Strong communication skills and experience working in team environments with
                version control
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
