import { Star, Quote } from "lucide-react";
import handshakeImage from "@/assets/handshake-construction.jpg";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";
import StaggeredChildren from "@/components/ui/staggered-children";
import SplitText from "@/components/ui/split-text";

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: "builder",
      name: "Sarah Chen",
      title: "Project Manager",
      company: "Metro Construction Co.",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "Sifter transformed how we find contractors in Ontario. The local focus means we get contractors who understand our regional requirements and building codes. The quality control with only 5 contractors per city ensures we're working with the best.",
      project: "Mississauga Commercial Complex - $1.8M project",
      results: "Found local electrical contractor in same day, project completed on schedule with Ontario code compliance"
    },
    {
      type: "contractor", 
      name: "Mike Rodriguez",
      title: "Master Electrician & Owner",
      company: "Rodriguez Electrical Services",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "As a Toronto-based plumber, Sifter's local focus was exactly what I needed. The $150/month local subscription pays for itself with just one job. Being one of only 5 contractors in my city means less competition and better quality projects.",
      project: "80+ local projects completed through platform",
      results: "Steady local work, 90% project completion rate, expanded from solo to 4-person team"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInOnScroll className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            <SplitText 
              text="Success Stories"
              animation="slideUp"
              delay={0.2}
              stagger={0.05}
            />
          </h2>
          <p className="text-lg sm:text-xl text-construction-gray-dark max-w-2xl sm:max-w-3xl mx-auto px-4">
            <SplitText 
              text="See how Ontario builders and contractors are growing their businesses with Sifter"
              animation="fadeIn"
              delay={0.8}
              stagger={0.02}
            />
          </p>
        </FadeInOnScroll>

        {/* Testimonials */}
        <StaggeredChildren className="space-y-12 sm:space-y-16" staggerDelay={0.3}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Image Side */}
              <div className="lg:w-1/2 w-full">
                <div className="relative">
                  <img
                    src={index === 0 ? handshakeImage : handshakeImage}
                    alt="Construction professional"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-construction-navy/30 to-transparent rounded-2xl"></div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute top-4 sm:top-6 ${index % 2 === 0 ? 'right-4 sm:right-6' : 'left-4 sm:left-6'}`}>
                    <div className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-white font-semibold text-xs sm:text-sm ${
                      testimonial.type === 'builder' ? 'bg-construction-navy' : 'bg-construction-orange'
                    }`}>
                      {testimonial.type === 'builder' ? '🏗️ Builder' : '🔧 Contractor'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2 w-full">
                <div className="bg-construction-gray rounded-2xl p-6 sm:p-8 relative">
                  {/* Quote Icon */}
                  <Quote className={`h-8 w-8 sm:h-12 sm:w-12 mb-4 sm:mb-6 ${
                    testimonial.type === 'builder' ? 'text-construction-navy' : 'text-construction-orange'
                  }`} />

                  {/* Rating */}
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg text-construction-navy mb-4 sm:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-construction-gray-dark rounded-full flex items-center justify-center mr-3 sm:mr-4">
                      <span className="text-white font-bold text-lg sm:text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-navy text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-construction-gray-dark text-sm">{testimonial.title}</p>
                      <p className="text-construction-gray-dark font-medium text-sm">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`border-l-4 pl-3 sm:pl-4 ${
                    testimonial.type === 'builder' ? 'border-construction-navy' : 'border-construction-orange'
                  }`}>
                    <p className="text-xs sm:text-sm font-semibold text-construction-navy mb-1">Project:</p>
                    <p className="text-xs sm:text-sm text-construction-gray-dark mb-2">{testimonial.project}</p>
                    <p className="text-xs sm:text-sm font-semibold text-construction-navy mb-1">Results:</p>
                    <p className="text-xs sm:text-sm text-construction-gray-dark">{testimonial.results}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggeredChildren>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-construction-navy to-construction-charcoal rounded-2xl p-6 sm:p-8 md:p-12 text-white">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join Ontario's Construction Network</h3>
            <p className="text-lg sm:text-xl opacity-90 px-4">Sifter connects builders and contractors across Ontario, one project at a time</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-construction-orange mb-1 sm:mb-2">25+</div>
              <div className="text-sm sm:text-lg opacity-90">Ontario Cities</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-construction-orange mb-1 sm:mb-2">125</div>
              <div className="text-sm sm:text-lg opacity-90">Active Contractors</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-construction-orange mb-1 sm:mb-2">4.8★</div>
              <div className="text-sm sm:text-lg opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-construction-orange mb-1 sm:mb-2">$45M+</div>
              <div className="text-sm sm:text-lg opacity-90">Project Value</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-construction-navy mb-3 sm:mb-4">
            Ready to Share Your Success Story?
          </h3>
          <p className="text-construction-gray-dark mb-4 sm:mb-6 px-4">
            Join the hundreds of Ontario professionals already growing their business with Sifter
          </p>
          <button className="bg-construction-orange text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-construction-orange-light transition-colors duration-200 text-sm sm:text-base">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;