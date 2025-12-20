import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Heart,
  Phone,
  Download,
  ExternalLink,
  Calendar,
  Briefcase,
  Globe,
  Check,
  Star,
  Send,
} from "lucide-react";
const ContactSection = () => {
  return (
    <section id="contact" className="w-full pt-24 bg-background px-4">
      <div className="md:container lg:container mx-auto border-t border-gray-300 py-4 border-b border-gray-300 py-3">
        <div className="md:text-center mb-16">
          <div className="text-center">
            <h2 className="text-sm text-primary uppercase tracking-wider mb-4 inline-flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <span>Let's Connect</span>
          </h2>
          </div>
          <h3 className="text-m4xl md:text-6xl font-bold mb-6">
            Ready to Start My{" "}
            <span className="text-primary"> Internship Journey?</span>{" "}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg sm:px-0 leading-relaxedg">
            I'm actively seeking{" "}
            <span className="text-primary font-bold">internship</span>{" "}
            opportunities where I can contribute my technical skills, learn from
            experienced developers, and help build amazing products.
            Let's discuss how I can add value to your team!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Left - Get In Touch */}
          <div>
            <h4 className="text-sm text-primary uppercase tracking-wider mb-4 inline-flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full">
                <Mail className="w-4 h-4 text-primary" />
              </span>
              Get In Touch
            </h4>

            <div className="space-y-4">
              <Card className="bg-card border-border hover:border-gray-500 transition-colors group cursor-pointer">
                <a
                  href="mailto:zeddini.medaziz3024@istic.ucar.tn"
                  className="block"
                >
                  <CardContent className="pt-6 flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-foreground mt-1 transition-transform duration-500 group-hover:rotate-12" />
                      <div>
                        <h4 className="font-bold mb-1">
                          Email{" "}
                          <span className="text-xs ml-2 text-gray-500">
                            Primary
                          </span>
                        </h4>
                        <span className="text-muted-foreground group-hover:text-blue-500 transition-colors break-all">
                          zeddini.medaziz3024@istic.ucar.tn
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </CardContent>
                </a>
              </Card>

              <Card className="bg-card border-border hover:border-blue-500 transition-colors group cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/zeddini-mohamed-aziz/"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <CardContent className="pt-6 flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Linkedin className="w-6 h-6 text-blue-500 mt-1 transition-transform duration-500 group-hover:rotate-12" />
                      <div>
                        <h4 className="font-bold mb-1">
                          LinkedIn{" "}
                          <span className="text-xs ml-2 text-gray-500">
                            Professional
                          </span>
                        </h4>
                        <span className="text-muted-foreground group-hover:text-blue-500 transition-colors">
                          /in/zeddini-mohamed-aziz
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </CardContent>
                </a>
              </Card>

              <Card className="bg-card border-border hover:border-gray-500 transition-colors group cursor-pointer">
                <a
                  href="https://github.com/zeddiniaziz"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <CardContent className="pt-6 flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Github className="w-6 h-6 text-foreground mt-1 transition-transform duration-500 group-hover:rotate-12" />
                      <div>
                        <h4 className="font-bold mb-1">
                          GitHub{" "}
                          <span className="text-xs ml-2 text-gray-500">
                            Technical
                          </span>
                        </h4>
                        <span className="text-muted-foreground group-hover:text-blue-500 transition-colors">
                          /zeddiniaziz
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </CardContent>
                </a>
              </Card>

              <Card className="bg-card border-border hover:border-green-500 transition-colors group cursor-pointer">
                <a
                  href="https://wa.me/21699662660"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <CardContent className="pt-6 flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-green-500 mt-1 transition-transform duration-500 group-hover:rotate-12" />
                      <div>
                        <h4 className="font-bold mb-1">
                          WhatsApp{" "}
                          <span className="text-xs ml-2 text-gray-500">
                            Urgent
                          </span>
                        </h4>
                        <span className="text-muted-foreground group-hover:text-green-500 transition-colors">
                          +216 99 662 660
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </CardContent>
                </a>
              </Card>

              <Card className="mt-6 bg-gradient-to-r from-primary/10 to-teal-600/5 border-border">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">
                    Ready for a Quick Chat?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    I'm excited to discuss internship opportunities, share my
                    portfolio, or answer any questions about my technical
                    background and experience.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a href="mailto:zeddini.medaziz3024@istic.ucar.tn">
                        <Send />
                        Send Email
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-border hover:bg-primary/90 max-w-full"
                      asChild
                    >
                      <a href="/resume/MohamedAzizZeddiniResume.pdf" download>
                        <Download className="mr-2" /> Download CV
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right - Quick Facts */}
          <div>
            <h4 className="text-sm text-primary uppercase tracking-wider mb-4 inline-flex items-center gap-2 justify-start md:justify-end">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full">
                <Star className="w-4 h-4 text-primary" />
              </span>
              Quick Facts
            </h4>

            <div className="space-y-4">
              <Card className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Location</h4>
                      <p className="text-muted-foreground">Tunis, Tunisia</p>
                      <p className="text-xs text-muted-foreground">
                        Available to relocate
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Availability</h4>
                      <p className="text-muted-foreground">Feb-March 2026</p>
                      <p className="text-xs text-muted-foreground">
                        Ready for internship opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Briefcase className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Work Style</h4>
                      <p className="text-muted-foreground">Full-Stack Focus</p>
                      <p className="text-xs text-muted-foreground">
                        Backend expertise with frontend skills
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Languages</h4>
                      <p className="text-muted-foreground">
                        English, French, German-A2, Arabic
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Multilingual communication
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <h4 className="font-bold mb-3">What I'm Looking For</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1" /> Backend
                      development & API design
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1" /> Database
                      optimization & architecture
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1" /> Full-stack
                      web applications
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1" />{" "}
                      Performance monitoring & improvements
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1" /> Team
                      collaboration & code reviews
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-1" /> Learning
                      new technologies & frameworks
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
