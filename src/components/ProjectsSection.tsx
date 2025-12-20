import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code2,
  ExternalLink,
  PresentationIcon,
  Zap,
  X,
  ChevronLeft,
  ChevronRight,
  Github,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Add your projects here - copy the template above for each project
const projects = [
  {
    number: "01",
    title: "WARCHA SaaS",
    subtitle: "Smart Repair Shop Platform",
    categoryTags: ["SaaS", "Automation", "Fullstack"],
    description:
      "Revolutionary SaaS platform for repair shops featuring drag-and-drop workflow editor, QR tracking system, automated invoicing, and backend process automation with Supabase integration.",
    statusBadges: [
      "Built During Internship",
      "Built End-to-End Full SaaS",
      "Production Ready",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Supabase",
      "Express.js",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Drag-and-drop workflow builder",
      "QR code tracking for repair items",
      "Admin dashboard with analytics",
      "Automated invoice generation",
    ],
    images: [
      "/warcha/1.png",
      "/warcha/2.png",
      "/warcha/3.png",
      "/warcha/4.png",
      "/warcha/5.png",
      "/warcha/6.png",
      "/warcha/7.png",
      "/warcha/8.png",
      "/warcha/9.png",
      "/warcha/10.png",
      "/warcha/11.png",
      "/warcha/12.png",
      "/warcha/13.png",
      "/warcha/14.png",
      "/warcha/15.png",
      "/warcha/16.png",
      "/warcha/17.png",
      "/warcha/18.png",
      "/warcha/19.png",
      "/warcha/20.png",
      "/warcha/21.png",
      "/warcha/22.png",
      "/warcha/23.png",
      "/warcha/24.png",
      "/warcha/25.png",
      "/warcha/26.png",
    ],
    liveUrl: "https://warcha.redig.io/login",
  },
  {
    number: "02",
    title: "VetCare Management System",
    subtitle: "Full Veterinary Clinic Management Platform",
    categoryTags: ["Java Spring Boot 3", "React", "Fullstack"],
    description:
      "A complete veterinary clinic management system featuring animal records, owner management, appointment scheduling, advanced search endpoints, and a fully typed frontend built with React + TypeScript, integrated with a Spring Boot REST API.",
    statusBadges: [
      "Full-Stack Project",
      "Spring Boot Backend",
      "React + TypeScript Frontend",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn-ui",
    ],
    keyFeatures: [
      "Owner & Animal management",
      "Appointment scheduling with status tracking",
      "Query-based search for animals and appointments",
      "Full data mapping between backend and frontend",
      "Modern UI components using shadcn-ui",
      "Reusable TypeScript API layer with strong typing",
    ],
    images: [
      "/vetCare/1.png",
      "/vetCare/2.png",
      "/vetCare/3.png",
      "/vetCare/4.png",
      "/vetCare/5.png",
      "/vetCare/6.png",
      "/vetCare/7.png",
      "/vetCare/8.png",
      "/vetCare/9.png",
      "/vetCare/10.png",
      "/vetCare/11.png",
      "/vetCare/12.png",
      "/vetCare/13.png",
      "/vetCare/14.png",
    ],
    liveUrl: "https://github.com/zeddiniaziz/vetcare", // if you want another URL, tell me
  },
  {
    number: "03",
    title: "Intelligent Chatbot System with Hybrid AI Architecture",
    subtitle: "FAQ Retrieval + Smart LLM Routing",
    categoryTags: [
      "Machine Learning",
      "NLP",
      "RAG",
      "Semantic Search",
      "Python",
    ],
    description:
      "Cars sales chatbot trained on an automotive FAQ knowledge base. Uses embeddings + vector search for fast in-domain answers, and routes numeric/specific or out-of-domain queries to an LLM for high-quality responses.",
    statusBadges: [
      "RAG Pipeline",
      "Top-K Retrieval",
      "Re-ranking Retrieval",
      "Isolation Forest (In/Out Domain)",
    ],
    techStack: [
      "Python",
      "Sentence-Transformers",
      "FAISS",
      "scikit-learn",
      "pandas",
      "numpy",
      "FastAPI",
      "Uvicorn",
      "OpenAI API",
      "NLTK",
      "React",
      "Tailwind CSS",
      "Vite",
      "Shadcn",
    ],
    keyFeatures: [
      "FAQ knowledge base (Question → Answer) with semantic search",
      "Vector indexing with FAISS for fast Top-K retrieval",
      "Cross-encoder re-ranking for higher precision answer selection",
      "Isolation Forest anomaly detection for out-of-domain queries",
      "Numeric/specific query detection (prices, models, specs) with LLM fallback",
      "Configurable thresholds (Top-K, similarity, rerank score, contamination)",
    ],
    images: [
      "/chatbot/1.png",
      "/chatbot/2.png",
      "/chatbot/3.png",
      "/chatbot/4.png",
      "/chatbot/5.png",
      "/chatbot/6.png",
    ],
    liveUrl: "https://github.com/zeddiniaziz/intelligent-chatbot",
  },
  {
    number: "04",
    title: "Full-Stack Todo App",
    subtitle: "JWT Authentication & Containerized Deployment",
    categoryTags: ["Backend", "Authentication", "Docker"],
    description:
      "Production-ready full-stack todo application demonstrating core backend architecture patterns and security best practices. Features a complete user authentication system with JWT tokens, containerized deployment using Docker, and PostgreSQL database with Prisma ORM integration.",
    statusBadges: [
      "JWT Authentication",
      "Docker Containerized",
      "Production Ready",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "JWT",
      "bcryptjs",
    ],
    keyFeatures: [
      "Secure JWT-based authentication with bcryptjs password hashing",
      "RESTful API with protected routes and authorization middleware",
      "PostgreSQL database with one-to-many user-todo relationships",
      "Docker Compose orchestration for multi-service deployment",
      "User data isolation ensuring users only access their own todos",
    ],
    images: [
      "/todo/1.png",
      "/todo/2.png",
      "/todo/3.png",
      "/todo/4.png",
      "/todo/5.png",
      "/todo/6.png",
      "/todo/7.png",
      "/todo/8.png",
      "/todo/9.png",
    ],
    liveUrl: "https://github.com/zeddiniaziz/fullstack-todo-app",
  },
];

const ProjectsSection = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenProjectIndex, setFullscreenProjectIndex] = useState(0);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle keyboard navigation and swipe
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!fullscreenImage) return;
      if (e.key === "Escape") setFullscreenImage(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [fullscreenImage, fullscreenProjectIndex, fullscreenImageIndex]);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe(e);
  };

  const handleSwipe = (e: React.TouchEvent) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNextImageWithTransition();
    } else if (isRightSwipe) {
      handlePrevImageWithTransition();
    }
  };

  const handleImageClick = (
    projectIndex: number,
    imageIndex: number,
    imageSrc: string
  ) => {
    setFullscreenProjectIndex(projectIndex);
    setFullscreenImageIndex(imageIndex);
    setFullscreenImage(imageSrc);
  };

  const handlePrevImage = () => {
    const project = projects[fullscreenProjectIndex];
    // Circular navigation: go to previous image, wrap to last if at first
    const lastIndex = project.images.length - 1;
    const newIndex =
      fullscreenImageIndex > 0 ? fullscreenImageIndex - 1 : lastIndex;
    setFullscreenImageIndex(newIndex);
    setFullscreenImage(project.images[newIndex]);
  };

  const handleNextImage = () => {
    const project = projects[fullscreenProjectIndex];
    // Circular navigation: go to next image, wrap to first if at last
    const lastIndex = project.images.length - 1;
    const newIndex =
      fullscreenImageIndex < lastIndex ? fullscreenImageIndex + 1 : 0;
    setFullscreenImageIndex(newIndex);
    setFullscreenImage(project.images[newIndex]);
  };

  const handlePrevImageWithTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      handlePrevImage();
      setIsTransitioning(false);
    }, 150);
  };

  const handleNextImageWithTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      handleNextImage();
      setIsTransitioning(false);
    }, 150);
  };

  const currentProject = projects[fullscreenProjectIndex];
  return (
    <section id="projects" className="w-full py-24 bg-background">
      <div className="md:container lg:container mx-2 border-t border-gray-300 py-4">
        <div className="md:text-center mb-16">
          <div className="text-center">
            <h2 className="text-sm text-primary uppercase tracking-wider mb-4 inline-flex items-center gap-2">
              <PresentationIcon className="w-5 h-5 text-primary" />
              <span>My work</span>
            </h2>{" "}
          </div>
          <h3 className="text-m4xl md:text-5xl font-bold mb-6 px-4">
            Featured Projects
          </h3>
          <p className="text-muted-foreground max-w-5xl mx-auto text-base sm:text-lg px-4 sm:px-0 leading-relaxed">
            A collection of projects showcasing my
            <span className="text-primary font-bold">
              {" "}
              full-stack development
            </span>{" "}
            skills. From{" "}
            <span className="text-primary font-bold">
              {" "}
              enterprise platforms
            </span>{" "}
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg px-4 sm:px-0 leading-relaxed">
            to
            <span className="text-primary font-bold"> SaaS solutions</span>,
            each project reflects my commitment to
            <span className="text-primary font-bold"> performance</span>,
            <span className="text-primary font-bold"> scalability</span>, and
            exceptional{" "}
            <span className="text-primary font-bold">user experience</span>.
          </p>
        </div>

        <div className="space-y-14 sm:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-sm border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Project Number & Images Carousel */}
              <div className="relative bg-secondary/30">
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {project.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div
                          className="aspect-video sm:aspect-[16/9] bg-muted flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() =>
                            handleImageClick(index, imgIndex, image)
                          }
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 sm:left-4" />
                  <CarouselNext className="right-2 sm:right-4" />
                </Carousel>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 lg:p-10">
                {/* Title & Category Tags */}
                <div className="mb-6">
                  <h4 className="text-2xl sm:text-3xl font-bold mb-2">
                    <span className="text-primary">{project.number}</span>{" "}
                    {project.title}
                  </h4>
                  <p className="text-lg text-muted-foreground mb-4">
                    {project.subtitle}
                  </p>
                  <button className="flex flex-wrap gap-2">
                    {project.categoryTags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 text-xs sm:text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </button>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Status Badges */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 pb-6 border-b border-border">
                  {project.statusBadges.map((badge, badgeIndex) => (
                    <button
                      key={badgeIndex}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary rounded-full transition-colors text-xs sm:text-sm font-medium hover:bg-primary hover:text-white"
                    >
                      {badge}
                    </button>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-4 h-4 text-primary" />
                    <h5 className="font-semibold text-sm sm:text-base">
                      Tech Stack
                    </h5>
                  </div>
                  <button className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs sm:text-sm hover:bg-primary hover:text-white"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </button>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-primary" />
                    <h5 className="font-semibold text-sm sm:text-base">
                      Key Features
                    </h5>
                  </div>

                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-muted-foreground text-sm sm:text-base"
                      >
                        <span className="text-primary mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Live Button */}
                <Button
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.number !== "01" ? (
                      <>
                        <Github className="w-4 h-4 mr-2" />
                        View Source
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </>
                    )}
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      {fullscreenImage && currentProject && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Close fullscreen"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Image Container with Navigation Arrows */}
          <div
            className="relative w-full h-full flex items-center justify-center px-4 py-16"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={fullscreenImage}
              alt={`${currentProject.title} fullscreen ${
                fullscreenImageIndex + 1
              }`}
              className={`max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain transition-opacity duration-150 ${
                isTransitioning ? "opacity-50" : "opacity-100"
              }`}
            />

            {/* Previous Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevImageWithTransition}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 md:h-8 md:w-8 rounded-full"
            >
              <ChevronLeft className="h-2 w-2 md:h-4 md:w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>

            {/* Next Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextImageWithTransition}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 md:h-8 md:w-8 rounded-full"
            >
              <ChevronRight className="h-2 w-2 md:h-4 md:w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-lg text-white text-sm">
            {fullscreenImageIndex + 1} / {currentProject.images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
