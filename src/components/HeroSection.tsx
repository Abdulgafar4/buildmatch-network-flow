import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-navy/90 to-construction-charcoal/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-up">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="text-construction-orange">Sifter</span>
            </h1>
          </div>

          {/* Main Tagline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Built to Connect
            <br />
            <span className="text-construction-orange">Builders & Contractors</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find trusted pros. Join projects. Grow your network.
            <br />
            The modern platform connecting construction professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="accent"
              size="xl"
              className="group min-w-[200px]"
            >
              Find Contractors
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline-accent"
              size="xl"
              className="min-w-[200px]"
            >
              Join the Network
            </Button>
          </div>

          {/* Demo Video Button */}
          <div className="flex items-center justify-center">
            <Button
              variant="ghost"
              className="text-white hover:text-construction-orange group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch 2-min Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;