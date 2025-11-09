import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-fashion-ai.jpg";

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI-powered fashion fitting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-mesh" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-highlight/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-gradient-glass backdrop-blur-md border border-accent/30 rounded-full text-background/90 text-sm font-medium">
          <Sparkles className="w-4 h-4 text-accent" />
          India's First AI-Powered Fashion Platform
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 text-background leading-tight">
          Where <span className="bg-gradient-accent bg-clip-text text-transparent">Artificial Intelligence</span>
          <br />
          Meets Artisan Precision
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-background/90 font-light">
          Experience the future of fashion with AI-powered tailoring, smart laundry & lifestyle marketplace
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            disabled
            className="text-lg px-10 py-7 rounded-full font-display font-semibold"
          >
            Try Now – Coming Soon
          </Button>
          <Button 
            variant="glass" 
            size="lg"
            onClick={scrollToNextSection}
            className="text-lg px-10 py-7 rounded-full font-display font-semibold border-2"
          >
            Explore More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
          <ChevronDown className="w-4 h-4 text-background animate-pulse" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
