import { Linkedin, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    platform: [
      { name: "How It Works", href: "#how-it-works" },
      { name: "Find Contractors", href: "#contractors" },
      { name: "Browse Jobs", href: "#jobs" },
      { name: "Pricing", href: "#pricing" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" },
    ],
    support: [
      { name: "FAQ", href: "#faq" },
      { name: "Help Center", href: "#help" },
      { name: "Safety Guidelines", href: "#safety" },
      { name: "Report Issue", href: "#report" },
    ],
    legal: [
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "#compliance" },
    ],
  };

  const partnerLogos = [
    { name: "Home Depot", logo: "🏠" },
    { name: "Lowes", logo: "🔨" },
    { name: "National Association of Home Builders", logo: "🏗️" },
    { name: "Associated General Contractors", logo: "⚒️" },
  ];

  return (
    <footer className="bg-sifter-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold">
                Sift<span className="text-sifter-silver">er</span>
              </h3>
              <p className="text-gray-300 mt-2">
                Built to Connect Builders & Contractors
              </p>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The modern platform connecting construction professionals. 
              Find trusted contractors, discover quality projects, and grow your business 
              with the industry's most comprehensive network.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-sifter-silver mr-3" />
                <span className="text-gray-300">hello@sifter.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-sifter-silver mr-3" />
                <span className="text-gray-300">1-800-SIFTER-01</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-sifter-silver mr-3" />
                <span className="text-gray-300">Seattle, WA & Austin, TX</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-sifter-charcoal p-3 rounded-lg hover:bg-gradient-metallic hover:text-sifter-navy transition-all duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-sifter-charcoal p-3 rounded-lg hover:bg-gradient-metallic hover:text-sifter-navy transition-all duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-sifter-charcoal p-3 rounded-lg hover:bg-gradient-metallic hover:text-sifter-navy transition-all duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-sifter-silver">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white link-animated transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-sifter-silver">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white link-animated transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-sifter-silver">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white link-animated transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-sifter-silver">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white link-animated transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-t border-sifter-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-sifter-silver mb-4">Trusted By Industry Leaders</h4>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {partnerLogos.map((partner) => (
                <div key={partner.name} className="flex items-center space-x-2 text-gray-300">
                  <span className="text-2xl">{partner.logo}</span>
                  <span className="font-medium">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-sifter-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-sifter-charcoal rounded-xl p-6 text-center">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Get the latest industry insights and platform updates</p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-sifter-navy border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-sifter-silver"
              />
              <button className="bg-gradient-metallic text-sifter-navy px-6 py-2 rounded-lg font-semibold hover:shadow-glow transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sifter-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              © 2024 Sifter. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <span>🔒 SOC 2 Compliant</span>
              <span>🛡️ SSL Secured</span>
              <span>✅ OSHA Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-gradient-metallic text-sifter-navy px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300">
          Get Started Free
        </button>
      </div>
    </footer>
  );
};

export default Footer;