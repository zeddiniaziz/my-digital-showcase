import { Heart } from "lucide-react";

const ThankYouSection = () => {
  return (
    <section className="py-20 px-0 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-1 px-2 py-2 rounded-full border-2 border-primary/30 bg-primary/5">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium text-primary">Thank you for your time!</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Let's Build Something Amazing{" "}
            <span className="text-primary">Together</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I'm excited about the opportunity to contribute to your team, learn from
            experienced developers, and help create impactful solutions. Ready to start this
            journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
