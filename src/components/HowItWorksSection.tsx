import { UserCheck, Search, Handshake } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: UserCheck,
      title: "Sign Up & Verify",
      description: "Create your profile and get verified with our streamlined process. Background checks and insurance verification included.",
      color: "bg-construction-orange"
    },
    {
      number: "02", 
      icon: Search,
      title: "Browse Jobs or Contractors",
      description: "Search for projects that match your skills or find qualified contractors for your next build. Advanced filtering makes it easy.",
      color: "bg-construction-navy"
    },
    {
      number: "03",
      icon: Handshake,
      title: "Connect & Build",
      description: "Direct messaging, project collaboration tools, and secure payment processing. Focus on what you do best.",
      color: "bg-construction-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-construction-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-construction-gray-dark max-w-3xl mx-auto">
            Get connected in three simple steps. Whether you're a contractor looking for work 
            or a builder seeking skilled professionals, we've streamlined the process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-construction-orange to-construction-navy transform translate-x-4 z-0"></div>
              )}

              {/* Card */}
              <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 pt-4">
                  <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-construction-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-construction-gray-dark leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-construction-gray-dark mb-6">
            Ready to get started? It takes less than 5 minutes to set up your profile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-construction-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-construction-charcoal transition-colors duration-200">
              Start as Contractor
            </button>
            <button className="bg-construction-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-construction-orange-light transition-colors duration-200">
              Start as Builder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;