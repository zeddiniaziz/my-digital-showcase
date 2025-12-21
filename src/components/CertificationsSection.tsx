import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PresentationIcon,
  ExternalLink,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const certifications = [
  {
    id: "c1",
    title: "Frontend Masters JS Certificate",
    issuer: "Frontend Masters",
    date: "Feb 27,2025",
    images: ["/certif/FM.png"],
  },

  {
    id: "c2",
    title: "Redig Internship Certificate",
    issuer: "Redig Agency",
    date: "Oct 22, 2025 ",
    images: ["/certif/redig.jpeg"],
  },
];

const CertificationsSection = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenCertIndex, setFullscreenCertIndex] = useState(0);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!fullscreenImage) return;
      if (e.key === "Escape") setFullscreenImage(null);
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreenImage, fullscreenCertIndex, fullscreenImageIndex]);

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
    certIndex: number,
    imgIndex: number,
    src: string
  ) => {
    setFullscreenCertIndex(certIndex);
    setFullscreenImageIndex(imgIndex);
    setFullscreenImage(src);
  };

  const handlePrevImage = () => {
    const cert = certifications[fullscreenCertIndex];
    const last = cert.images.length - 1;
    const newIndex = fullscreenImageIndex > 0 ? fullscreenImageIndex - 1 : last;
    setFullscreenImageIndex(newIndex);
    setFullscreenImage(cert.images[newIndex]);
  };

  const handleNextImage = () => {
    const cert = certifications[fullscreenCertIndex];
    const last = cert.images.length - 1;
    const newIndex = fullscreenImageIndex < last ? fullscreenImageIndex + 1 : 0;
    setFullscreenImageIndex(newIndex);
    setFullscreenImage(cert.images[newIndex]);
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

  return (
    <section id="certifications" className="w-full py-2 bg-background">
      <div className="md:container lg:container mx-2 pt-5 border-t border-gray-300">
        <div className="md:text-center mb-12">
          <div className="text-center">
            <h2 className="text-sm text-primary uppercase tracking-wider mb-4 inline-flex items-center gap-2">
              <PresentationIcon className="w-5 h-5 text-primary" />
              <span>Professional Credentials</span>
            </h2>
          </div>
          <h3 className="text-m4xl md:text-5xl font-bold mb-6 px-4">
            My Certifications
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4 sm:px-0 leading-relaxedg">
            A curated list of certifications and professional credentials
            demonstrating knowledge and achievements.
          </p>
        </div>

        {/* Single Card with All Certifications */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-md border border-border overflow-hidden shadow-sm">
            {/* Certification Carousel */}
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {certifications.map((cert, certIndex) => (
                  <CarouselItem key={cert.id}>
                    <div>
                      {/* Certification Image */}
                      <div className="relative bg-secondary/30">
                        <div className="absolute top-4 left-4 z-10">
                          <span className="text-4xl font-bold text-primary/20">
                            {certIndex + 1}/{certifications.length}
                          </span>
                        </div>
                        <div
                          className="aspect-video sm:aspect-[16/9] bg-muted flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() =>
                            handleImageClick(certIndex, 0, cert.images[0])
                          }
                        >
                          <img
                            src={cert.images[0]}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Certification Description */}
                      <div className="p-6 sm:p-8 lg:p-10">
                        <div className="mb-6">
                          <h4 className="text-2xl sm:text-3xl font-bold mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {cert.issuer} •{" "}
                            <span className="text-primary">{cert.date}</span>
                          </p>
                        </div>

                        <button className="flex gap-4 items-center mb-6">
                          <Badge
                            variant="outline"
                            className="bg-green-600 border-green-600 text-white px-3 py-1"
                          >
                            Verified{" "}
                            <CheckCircle className="w-3 h-3 inline-block ml-1" />
                          </Badge>
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4" />
              <CarouselNext className="right-2 sm:right-4" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Fullscreen Viewer (same behavior as projects) */}
      {fullscreenImage && certifications[fullscreenCertIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            aria-label="Close fullscreen"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center px-4 py-16"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={fullscreenImage}
              alt={`${certifications[fullscreenCertIndex].title} fullscreen ${
                fullscreenImageIndex + 1
              }`}
              className={`max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain transition-opacity duration-150 ${
                isTransitioning ? "opacity-50" : "opacity-100"
              }`}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
