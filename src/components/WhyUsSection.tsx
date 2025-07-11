import { Shield, Clock, DollarSign, Users, CheckCircle, Zap } from "lucide-react";
import toolsImage from "@/assets/tools-construction.jpg";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Verified & Trusted",
      description: "Every contractor undergoes background checks, license verification, and insurance validation",
      stat: "100%",
      statLabel: "Verified Professionals"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Find qualified contractors in hours, not weeks. Our smart matching reduces your search time by 90%",
      stat: "90%",
      statLabel: "Faster Hiring"
    },
    {
      icon: DollarSign,
      title: "Better Pricing",
      description: "Competitive bidding and transparent pricing. Compare quotes and negotiate directly with contractors",
      stat: "25%",
      statLabel: "Average Savings"
    },
    {
      icon: Users,
      title: "Quality Network", 
      description: "Access to the largest network of skilled construction professionals in your area",
      stat: "15K+",
      statLabel: "Active Contractors"
    },
    {
      icon: CheckCircle,
      title: "Project Success",
      description: "Higher project completion rates with built-in project management and communication tools",
      stat: "98%",
      statLabel: "Success Rate"
    },
    {
      icon: Zap,
      title: "Instant Connect",
      description: "Real-time messaging, instant notifications, and 24/7 platform availability",
      stat: "24/7",
      statLabel: "Platform Uptime"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-sifter-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sifter-navy mb-4">
            Why Choose Sifter?
          </h2>
          <p className="text-xl text-sifter-gray-dark max-w-3xl mx-auto">
            We're not just another platform. We're built specifically for the construction industry, 
            with features and safeguards that matter to professionals like you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Image */}
          <div className="relative">
            <img
              src={toolsImage}
              alt="Professional construction tools"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-construction-navy/20 to-transparent rounded-2xl"></div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-orange mb-1">4.9★</div>
                <div className="text-sm text-construction-gray-dark">Platform Rating</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-construction-orange rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">$240M+</div>
                <div className="text-xs text-white/90">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-construction-orange w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-construction-navy mb-2">Industry-First Verification</h3>
                  <p className="text-construction-gray-dark mb-3">
                    Our 3-tier verification process includes license validation, insurance checks, 
                    and background screening - going beyond what generic platforms offer.
                  </p>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-construction-navy">100% Verified Network</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-construction-navy w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-construction-navy mb-2">Smart Matching Technology</h3>
                  <p className="text-construction-gray-dark mb-3">
                    AI-powered matching considers project specifics, contractor expertise, 
                    location, and availability for perfect project-contractor alignment.
                  </p>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-construction-navy">90% Faster Hiring Process</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start space-x-4">
                <div className="bg-construction-orange w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-construction-navy mb-2">Built for Construction</h3>
                  <p className="text-construction-gray-dark mb-3">
                    Project timelines, trade-specific requirements, safety certifications, 
                    and industry jargon - we speak construction.
                  </p>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-construction-navy">Industry-Specific Features</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="bg-construction-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-construction-navy mb-3">{reason.title}</h3>
              <p className="text-construction-gray-dark mb-4 leading-relaxed">{reason.description}</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="text-2xl font-bold text-construction-orange mb-1">{reason.stat}</div>
                <div className="text-sm text-construction-gray-dark">{reason.statLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-sifter-navy mb-8 text-center">
            Sifter vs. Traditional Methods
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-construction-navy">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-construction-orange">BuildMatch</th>
                  <th className="text-center py-4 px-4 font-semibold text-construction-gray-dark">Traditional Methods</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 px-4 font-medium">Time to Find Contractor</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Hours</td>
                  <td className="py-4 px-4 text-center text-red-600">Weeks</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Verification Process</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">3-Tier Verification</td>
                  <td className="py-4 px-4 text-center text-red-600">Manual/None</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Project Management</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Built-in Tools</td>
                  <td className="py-4 px-4 text-center text-red-600">Separate Systems</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium">Payment Protection</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Escrow & Insurance</td>
                  <td className="py-4 px-4 text-center text-red-600">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;