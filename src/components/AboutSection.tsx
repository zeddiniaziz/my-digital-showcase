import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Database,
  InfoIcon,
  LightbulbIcon,
  Rocket,
  Users,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-24 px-4">
      <div className="md:container lg:container mx-auto border-t border-gray-300 py-4">
        <div className="md:text-center mb-16 ">
          <div className="text-center">
            <h2 className="text-sm text-primary uppercase tracking-wider mb-4 inline-flex items-center gap-2">
            <InfoIcon className="w-5 h-5 text-primary" />
            <span>About Me</span>
          </h2>
          </div>
          <h3 className="text-m4xl md:text-5xl font-bold mb-6">
            Ready to Contribute & Learn
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-mlg md:text-lg">
            Looking for <span className="text-primary font-bold">internships </span>
            to apply development skills and contribute to meaningful projects in
            a collaborative environment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-4">
            <LightbulbIcon className="w-5 h-5 text-yellow-500" />
            <h4 className="text-2xl font-bold ">Professional Summary</h4>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              I am a{" "}
              <span className="text-primary font-bold">
                third-year Computer Science student
              </span>{" "}
              with a strong interest in software development and problem
              solving.
            </p>
            <p>
              My background in{" "}
              <span className="text-primary font-bold">programming </span>
              has taught me how to design{" "}
              <span className="text-primary font-bold">effective solutions</span>, and my
              academic and personal projects have given me the chance to apply
              these skills in real scenarios.
            </p>
            <p>
              I have worked on full-stack applications, with a focus on clean
              code, performance, and user experience. Through these projects, I
              have developed proficiency in modern web technologies and
              frameworks.
            </p>
            <p>
              I am looking forward to an{" "}
              <span className="text-primary font-bold">internship</span> where I can work
              on meaningful projects and continue to grow my technical and
              professional skills.
            </p>

            <div className="w-fit flex gap-2 mt-6 p-4 bg-gradient-to-r from-primary/10 to-emerald-400/10 rounded-lg border border-emerald-500/20">
              <Rocket className="w-6 h-6 md:w-5 md:h-5 text-primary self-start" />

              <span className="text-primary font-medium text-sm">
                Aiming to contribute to innovative projects and grow alongside
                experienced developers.
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 px-4">
          <Card className="bg-aboutcard border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <Code2 className="w-9 h-9 md:w-12 md:h-12 text-primary mb-4" />
              <h4 className="text-mxl md:text-xl font-bold mb-2">Frontend Development</h4>
              <p className="text-muted-foreground">
                Hands-on experience in React, TypeScript, and modern CSS
                frameworks with focus on responsive design
              </p>
            </CardContent>
          </Card>

          <Card className="bg-aboutcard border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <Database className="w-9 h-9 md:w-12 md:h-12 text-primary mb-4" />
              <h4 className="text-mxl md:text-xl font-bold mb-2">Backend Development</h4>
              <p className="text-muted-foreground">
                Experience in Node.js, API design, and database management with
                focus on scalable architecture
              </p>
            </CardContent>
          </Card>

          <Card className="bg-aboutcard border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <Users className="w-9 h-9 md:w-12 md:h-12 text-primary mb-4" />
              <h4 className="text-mxl md:text-xl font-bold mb-2">Team Collaboration</h4>
              <p className="text-muted-foreground">
                Strong communication skills and experience working in team
                environments with version control
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
