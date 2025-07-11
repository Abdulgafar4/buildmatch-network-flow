import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProjectBoardSection from "@/components/ProjectBoardSection";
import SearchFilterSection from "@/components/SearchFilterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <ProjectBoardSection />
      <SearchFilterSection />
      <TestimonialsSection />
      <WhyUsSection />
      <Footer />
    </div>
  );
};

export default Index;
