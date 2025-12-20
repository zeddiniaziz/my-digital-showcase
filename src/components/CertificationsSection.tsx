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
    images: ["/certif/redig.jpeg", "/certif/RL.jpeg"],
  },
];

const CertificationsSection = () => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenCertIndex, setFullscreenCertIndex] = useState(0);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState(0);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
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

  const handlePrevCert = () => {
    const newIndex =
      currentCertIndex > 0 ? currentCertIndex - 1 : certifications.length - 1;
    setCurrentCertIndex(newIndex);
  };

  const handleNextCert = () => {
    const newIndex =
      currentCertIndex < certifications.length - 1 ? currentCertIndex + 1 : 0;
    setCurrentCertIndex(newIndex);
  };

  const currentCert = certifications[currentCertIndex];

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
            {/* Certification Images Carousel */}
            <div className="relative bg-secondary/30">
              <div className="absolute top-4 left-4 z-10">
                <span className="text-4xl font-bold text-primary/20">
                  {currentCertIndex + 1}/{certifications.length}
                </span>
              </div>

              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {currentCert.images.map((img, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div
                        className="aspect-video sm:aspect-[16/9] bg-muted flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() =>
                          handleImageClick(currentCertIndex, imgIndex, img)
                        }
                      >
                        <img
                          src={img}
                          alt={`${currentCert.title} ${imgIndex + 1}`}
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

            {/* Certification Description */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-6">
                <h4 className="text-2xl sm:text-3xl font-bold mb-2">
                  {currentCert.title}
                </h4>
                <p className="text-muted-foreground">
                  {currentCert.issuer} •{" "}
                  <span className="text-primary">{currentCert.date}</span>
                </p>
              </div>

              <button className="flex gap-4 items-center mb-6">
                <Badge
                  variant="outline"
                  className="bg-green-600 border-green-600 text-white px-3 py-1"
                >
                  Verified <CheckCircle className="w-3 h-3 inline-block ml-1" />
                </Badge>
              </button>

              {/* Certification Navigation Dots */}
              <div className="flex gap-2 items-center justify-center pt-4 border-t border-border">
                <button
                  onClick={handlePrevCert}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Previous certification"
                >
                  <ChevronLeft className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </button>

                <div className="flex gap-2">
                  {certifications.map((cert, idx) => (
                    <button
                      key={cert.id}
                      onClick={() => setCurrentCertIndex(idx)}
                      className={`h-3 rounded-full transition-all ${
                        idx === currentCertIndex
                          ? "w-8 bg-primary"
                          : "w-3 bg-muted-foreground/50 hover:bg-muted-foreground"
                      }`}
                      aria-label={`Go to ${cert.title}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextCert}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Next certification"
                >
                  <ChevronRight className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Viewer (same behavior as projects) */}
      {fullscreenImage && currentCert && (
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
              alt={`${currentCert.title} fullscreen ${
                fullscreenImageIndex + 1
              }`}
              className={`max-w-[95vw] max-h-[90vh] w-auto h-auto object-contain transition-opacity duration-150 ${
                isTransitioning ? "opacity-50" : "opacity-100"
              }`}
            />

            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevImageWithTransition}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNextImageWithTransition}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-lg text-white text-sm">
            {fullscreenImageIndex + 1} / {currentCert.images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
