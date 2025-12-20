import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // close mobile menu when navigating
  const handleScrollToSection = (id: string) => {
    setMobileOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")}>
            <h2 className="text-xl font-bold">
              <span className="text-foreground">Mohamed Aziz</span>{" "}
              <span className="text-primary">Zeddini</span>
            </h2>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <ThemeToggle />
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleScrollToSection("home")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleScrollToSection("about")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleScrollToSection("skills")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => handleScrollToSection("projects")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <div className="flex items-center gap-4 pt-2">
                <ThemeToggle />
                <Button
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => handleScrollToSection("contact")}
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
