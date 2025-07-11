import { Star, Quote } from "lucide-react";
import handshakeImage from "@/assets/handshake-construction.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      type: "builder",
      name: "Sarah Chen",
      title: "Project Manager",
      company: "Metro Construction Co.",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "BuildMatch transformed how we find contractors. We used to spend weeks vetting electricians for our commercial projects. Now we can find verified, top-rated pros in hours. The quality of contractors on the platform is exceptional, and the background verification gives us complete confidence.",
      project: "Downtown Office Complex - $2.3M project",
      results: "Found qualified electrical contractor in 2 days, project completed 1 week ahead of schedule"
    },
    {
      type: "contractor", 
      name: "Mike Rodriguez",
      title: "Master Electrician & Owner",
      company: "Rodriguez Electrical Services",
      image: "/api/placeholder/80/80",
      rating: 5,
      quote: "As a small electrical contractor, finding consistent, quality work was always a challenge. BuildMatch connected me with builders who actually value skilled craftwork. I've grown my team from 3 to 12 people in just 18 months, and I'm booked solid for the next 6 months.",
      project: "150+ projects completed through platform",
      results: "Revenue increased 340%, expanded team from 3 to 12 employees"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-construction-gray-dark max-w-3xl mx-auto">
            See how builders and contractors are growing their businesses with BuildMatch
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Image Side */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={index === 0 ? handshakeImage : handshakeImage}
                    alt="Construction professional"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-construction-navy/30 to-transparent rounded-2xl"></div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute top-6 ${index % 2 === 0 ? 'right-6' : 'left-6'}`}>
                    <div className={`px-4 py-2 rounded-full text-white font-semibold text-sm ${
                      testimonial.type === 'builder' ? 'bg-construction-navy' : 'bg-construction-orange'
                    }`}>
                      {testimonial.type === 'builder' ? '🏗️ Builder' : '🔧 Contractor'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-1/2">
                <div className="bg-construction-gray rounded-2xl p-8 relative">
                  {/* Quote Icon */}
                  <Quote className={`h-12 w-12 mb-6 ${
                    testimonial.type === 'builder' ? 'text-construction-navy' : 'text-construction-orange'
                  }`} />

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg text-construction-navy mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-construction-gray-dark rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-construction-navy">{testimonial.name}</h4>
                      <p className="text-construction-gray-dark">{testimonial.title}</p>
                      <p className="text-construction-gray-dark font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`border-l-4 pl-4 ${
                    testimonial.type === 'builder' ? 'border-construction-navy' : 'border-construction-orange'
                  }`}>
                    <p className="text-sm font-semibold text-construction-navy mb-1">Project:</p>
                    <p className="text-sm text-construction-gray-dark mb-2">{testimonial.project}</p>
                    <p className="text-sm font-semibold text-construction-navy mb-1">Results:</p>
                    <p className="text-sm text-construction-gray-dark">{testimonial.results}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-construction-navy to-construction-charcoal rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Join Thousands of Satisfied Users</h3>
            <p className="text-xl opacity-90">BuildMatch connects the construction industry, one project at a time</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-construction-orange mb-2">15K+</div>
              <div className="text-lg opacity-90">Active Contractors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-construction-orange mb-2">8K+</div>
              <div className="text-lg opacity-90">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-construction-orange mb-2">4.9★</div>
              <div className="text-lg opacity-90">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-construction-orange mb-2">$240M+</div>
              <div className="text-lg opacity-90">Project Value</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-construction-navy mb-4">
            Ready to Share Your Success Story?
          </h3>
          <p className="text-construction-gray-dark mb-6">
            Join the thousands of professionals already growing their business with BuildMatch
          </p>
          <button className="bg-construction-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-construction-orange-light transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;