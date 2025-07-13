import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import AuthModal from "@/components/AuthModal";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80; // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Project Board", href: "#project-board" },
    { name: "Search & Filter", href: "#search-filter" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50" 
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('#hero')}
                className="text-xl sm:text-2xl font-bold text-construction-orange hover:text-construction-orange transition-colors duration-200"
              >
                Sifter
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-8 lg:ml-12 flex items-baseline space-x-6 lg:space-x-10">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 lg:px-4 py-2 text-sm font-medium transition-all duration-200 relative group ${
                      isActive 
                        ? "text-construction-orange" 
                        : "text-construction-navy hover:text-construction-orange"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-construction-orange rounded-full"></div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-construction-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-construction-navy hover:text-construction-orange hover:bg-construction-orange/10 px-3 lg:px-4 text-sm"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Login
            </Button>
            <Button 
              variant="accent" 
              size="sm"
              className="hover:scale-105 transition-transform duration-200 px-4 lg:px-6 text-sm"
              onClick={() => setIsAuthModalOpen(true)}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-construction-orange/10 h-10 w-10"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/50">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-md ${
                      isActive 
                        ? "text-construction-orange bg-construction-orange/10" 
                        : "text-construction-navy hover:text-construction-orange hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-construction-navy hover:text-construction-orange hover:bg-construction-orange/10 py-3 text-base"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Login
                </Button>
                <Button 
                  variant="accent" 
                  size="sm" 
                  className="w-full hover:scale-105 transition-transform duration-200 py-3 text-base"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navigation;