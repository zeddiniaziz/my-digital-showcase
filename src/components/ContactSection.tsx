import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm text-primary uppercase tracking-wider mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a
                    href="mailto:your@email.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    your@email.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-muted-foreground">Your City, Country</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="flex gap-6 justify-center mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="mailto:your@email.com">Send Me a Message</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
