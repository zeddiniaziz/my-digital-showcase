import { Heart } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const ThankYouSection = () => {
  return (
    <section className="pt-20 px-0 bg-gradient-to-b from-background to-primary/10 relative overflow-hidden">
      <AnimatedBackground />
      <div className="md:container lg:container mx-auto max-w-6xl text-center relative z-10">
        <div className="pb-20 space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 px-2 py-2 rounded-full border-2 border-primary/30 bg-primary/5">
            <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            <span className="text-mlg md:text-[20px] font-medium text-primary">
              Thank you for your time!
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-mt1 md:text-6xl font-bold mb-6 leading-tight">
            Let's Build Something Amazing{" "}
            <span className="text-primary">Together</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg px-6 md:px-0 leading-relaxedg">
            I'm excited about the opportunity to contribute to your team, learn
            from experienced developers, and help create impactful solutions.
            Ready to start this journey!
          </p>
        </div>

        <footer className="pt-28 mb-3">
          <div className="text-center">
            <p className="text-muted-foreground px-4 text-msm md:text-mlg leading-relaxedg">
              © {new Date().getFullYear()} Mohamed Aziz Zeddini. Computer
              Science Student & Full-Stack Developer.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ThankYouSection;
