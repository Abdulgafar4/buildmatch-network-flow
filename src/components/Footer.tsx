import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin, ArrowRight, Shield, Star, Users } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Search & Filter", href: "#search-filter" },
      { name: "Project Board", href: "#project-board" },
      { name: "Why Us", href: "#why-us" },
    ],
    company: [
      { name: "About Sifter", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Safety Guidelines", href: "#safety" },
      { name: "Report Issue", href: "#report" },
      { name: "FAQ", href: "#faq" },
    ],
    legal: [
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" },
    ],
  };

  const stats = [
    { icon: Users, value: "125+", label: "Active Contractors" },
    { icon: Star, value: "4.9★", label: "Platform Rating" },
    { icon: Shield, value: "25+", label: "Ontario Cities" },
  ];

  return (
    <footer className="bg-gradient-to-br from-construction-navy via-construction-charcoal to-construction-navy text-white w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-2xl">
      <div>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold mb-3">
                <span className="text-construction-orange">Sifter</span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Ontario's Premier Construction Network
              </p>
            </div>
            
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              Connecting builders in need to contractors who deliver. 
              Built specifically for Ontario's construction industry with local focus, 
              quality control, and features that matter to construction professionals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-construction-orange mr-2" />
                    <span className="text-xl sm:text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-construction-orange mr-3" />
                <span className="text-gray-300 text-sm sm:text-base">hello@sifter.ca</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-construction-orange mr-3" />
                <span className="text-gray-300 text-sm sm:text-base">1-800-SIFTER-CA</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-construction-orange mr-3" />
                <span className="text-gray-300 text-sm sm:text-base">Ontario, Canada</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="bg-white/10 p-2 sm:p-3 rounded-xl hover:bg-construction-orange hover:scale-110 transition-all duration-200">
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 sm:p-3 rounded-xl hover:bg-construction-orange hover:scale-110 transition-all duration-200">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 sm:p-3 rounded-xl hover:bg-construction-orange hover:scale-110 transition-all duration-200">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-construction-orange">Platform</h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-construction-orange">Company</h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-construction-orange">Support</h4>
            <ul className="space-y-3 sm:space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center group text-sm sm:text-base"
                  >
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 border border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl sm:text-2xl font-bold mb-3">Stay Updated with Sifter</h4>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg px-4">Get the latest industry insights, platform updates, and Ontario construction news</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-4 px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-construction-orange focus:bg-white/20 transition-all duration-200 text-sm sm:text-base"
              />
              <button className="bg-construction-orange text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-construction-orange-light hover:scale-105 transition-all duration-200 flex items-center justify-center text-sm sm:text-base">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0 text-sm sm:text-base">
              © 2024 Sifter. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-gray-300">
              <span className="flex items-center">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-construction-orange" />
                SOC 2 Compliant
              </span>
              <span className="flex items-center">
                <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-construction-orange" />
                SSL Secured
              </span>
              <span className="flex items-center">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-construction-orange" />
                Ontario Certified
              </span>

            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <button className="bg-construction-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 flex items-center text-sm sm:text-base">
          Get Started
          <ArrowRight className="h-4 w-4 ml-2" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;