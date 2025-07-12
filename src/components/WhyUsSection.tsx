import { Shield, Clock, DollarSign, Users, CheckCircle, Zap } from "lucide-react";
import toolsImage from "@/assets/tools-construction.jpg";

const WhyUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Ontario-Focused",
      description: "Built exclusively for Ontario's construction market. Local regulations, practices, and industry knowledge baked in.",
      stat: "ON Only",
      statLabel: "Regional Focus"
    },
    {
      icon: Clock,
      title: "Quality Control",
      description: "Max 5 contractors per city ensures quality. Others join a waitlist, maintaining high standards and reducing competition.",
      stat: "5 Max",
      statLabel: "Per City Limit"
    },
    {
      icon: DollarSign,
      title: "Fair Pricing Model",
      description: "Builders post for free. Contractors pay $150/month for local access or $250/month for province-wide opportunities.",
      stat: "$150",
      statLabel: "Local Access"
    },
    {
      icon: Users,
      title: "Direct Connection", 
      description: "No middleman fees or complex processes. Quote directly, chat immediately, and start building relationships.",
      stat: "0%",
      statLabel: "Platform Fees"
    },
    {
      icon: CheckCircle,
      title: "Smart Matching",
      description: "Only contractors from the same city see local jobs unless they upgrade to premium for broader access.",
      stat: "City-Based",
      statLabel: "Job Visibility"
    },
    {
      icon: Zap,
      title: "Built-in Messaging",
      description: "Integrated chat system keeps builders and contractors connected throughout the entire project lifecycle.",
      stat: "Real-time",
      statLabel: "Communication"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-construction-gray to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            Why Choose Sifter?
          </h2>
          <p className="text-xl text-construction-gray-dark max-w-3xl mx-auto">
            Built specifically for Ontario contractors and builders. Local focus, 
            quality control, and features that matter to construction professionals.
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
                  <h3 className="text-xl font-semibold text-construction-navy mb-2">Local Expertise</h3>
                  <p className="text-construction-gray-dark mb-3">
                    Ontario-specific regulations, local building codes, and regional contractor networks. 
                    We understand the unique needs of Ontario's construction industry.
                  </p>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-construction-navy">Ontario-Focused Platform</span>
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
                  <h3 className="text-xl font-semibold text-construction-navy mb-2">Quality Control System</h3>
                  <p className="text-construction-gray-dark mb-3">
                    Maximum 5 contractors per city with waitlist management ensures quality over quantity. 
                    Every contractor earns their spot and maintains high standards.
                  </p>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm font-medium text-construction-navy">5 Contractors Max Per City</span>
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
          <h3 className="text-2xl font-bold text-construction-navy mb-8 text-center">
            Sifter vs. Traditional Methods
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-construction-navy">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-construction-orange">Sifter</th>
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