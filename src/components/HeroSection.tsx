import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";
import SplitText from "@/components/ui/split-text";
import AuthModal from "@/components/AuthModal";
import { useState } from "react";

const HeroSection = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-20">
      <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl shadow-xl">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern construction site"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-construction-navy/90 to-construction-charcoal/70 rounded-2xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-up">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                <SplitText 
                  text="Sifter" 
                  className="text-construction-orange"
                  animation="scale"
                  delay={0.2}
                  stagger={0.1}
                />
              </h1>
            </div>

            {/* Main Tagline */}
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <SplitText 
                text="Ontario's Premier"
                animation="slideUp"
                delay={0.5}
                stagger={0.05}
              />
              <br />
              <SplitText 
                text="Construction Network"
                className="text-construction-orange"
                animation="slideUp"
                delay={1.2}
                stagger={0.05}
              />
            </h2>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              <SplitText 
                text="Connecting builders in need to contractors who deliver"
                animation="fadeIn"
                delay={1.8}
                stagger={0.03}
              />
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                variant="accent"
                size="xl"
                className="group min-w-[200px]"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Post Job (Builders)
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline-accent"
                size="xl"
                className="min-w-[200px]"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Find Work ($150/mo)
              </Button>
            </div>

            {/* Demo Video Button */}
            <div className="flex items-center justify-center">
              <Button
                variant="ghost"
                className="text-white group"
              >
                <Play className="mr-2 h-5 w-5  transition-transform" />
                See How It Works
              </Button>
            </div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </div>
  );
};

export default HeroSection;