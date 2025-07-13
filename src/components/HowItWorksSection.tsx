import { UserCheck, Search, Handshake } from "lucide-react";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";
import StaggeredChildren from "@/components/ui/staggered-children";
import SplitText from "@/components/ui/split-text";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: UserCheck,
      title: "Sign Up & Verify",
      description: "Create your profile and get verified. Builders post jobs for free. Contractors choose local ($150/mo) or premium ($250/mo) for province-wide access.",
      color: "bg-construction-orange"
    },
    {
      number: "02", 
      icon: Search,
      title: "Browse & Quote",
      description: "Contractors see jobs in their city and submit quotes directly. Builders compare quotes and select the best contractor for their project.",
      color: "bg-construction-navy"
    },
    {
      number: "03",
      icon: Handshake,
      title: "Connect & Build",
      description: "Start chatting with your selected contractor or chosen builder. Built-in messaging keeps projects on track from quote to completion.",
      color: "bg-construction-orange"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInOnScroll className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            <SplitText 
              text="How It Works"
              animation="slideUp"
              delay={0.2}
              stagger={0.05}
            />
          </h2>
          <p className="text-lg sm:text-xl text-construction-gray-dark max-w-2xl sm:max-w-3xl mx-auto px-4">
            <SplitText 
              text="Connecting Ontario's construction professionals in three simple steps. Whether you're posting jobs or finding work, Sifter makes it easy."
              animation="fadeIn"
              delay={0.8}
              stagger={0.02}
            />
          </p>
        </FadeInOnScroll>

        {/* Steps */}
        <StaggeredChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.2}>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-construction-orange to-construction-navy transform translate-x-4 z-0"></div>
              )}

              {/* Card */}
              <div className="relative z-10 bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                {/* Step Number */}
                <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8">
                  <div className={`${step.color} text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-base sm:text-lg shadow-lg`}>
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4 sm:mb-6 pt-2 sm:pt-4">
                  <div className={`${step.color} w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-construction-navy mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-construction-gray-dark leading-relaxed text-sm sm:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </StaggeredChildren>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-construction-gray-dark mb-4 sm:mb-6 px-4">
            Ready to get started? Join Ontario's fastest-growing construction network.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <button className="bg-construction-navy text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-construction-charcoal transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">
              I'm a Builder (Free)
            </button>
            <button className="bg-construction-orange text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-construction-orange-light transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">
              I'm a Contractor ($150/mo)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;