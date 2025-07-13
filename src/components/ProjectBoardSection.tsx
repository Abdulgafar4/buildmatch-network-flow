import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, Clock, CheckCircle } from "lucide-react";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";
import StaggeredChildren from "@/components/ui/staggered-children";
import SplitText from "@/components/ui/split-text";

const ProjectBoardSection = () => {
  const projects = [
    {
      id: 1,
      title: "Commercial Office Building - Electrical Work",
      company: "Metro Construction Co.",
      location: "Downtown Portland, OR",
      budget: "$45,000 - $60,000",
      timeline: "6 weeks",
      posted: "2 days ago",
      trades: ["Electrical", "Commercial"],
      urgency: "High",
      verified: true,
      applicants: 12
    },
    {
      id: 2,
      title: "Residential Plumbing - New Construction",
      company: "Sunshine Homes LLC",
      location: "Austin, TX",
      budget: "$25,000 - $35,000", 
      timeline: "4 weeks",
      posted: "5 days ago",
      trades: ["Plumbing", "Residential"],
      urgency: "Medium",
      verified: true,
      applicants: 8
    },
    {
      id: 3,
      title: "Warehouse Framing & Roofing",
      company: "Industrial Build Partners",
      location: "Phoenix, AZ",
      budget: "$120,000 - $150,000",
      timeline: "12 weeks",
      posted: "1 week ago",
      trades: ["Framing", "Roofing", "Commercial"],
      urgency: "Medium",
      verified: true,
      applicants: 15
    }
  ];

  const contractors = [
    {
      id: 1,
      name: "Rodriguez Electrical Services",
      rating: 4.9,
      experience: "15+ years",
      specialty: "Commercial & Industrial",
      location: "Seattle, WA",
      available: true,
      verified: true,
      recentProjects: 47,
      badges: ["Licensed", "Insured", "Top Rated"]
    },
    {
      id: 2,
      name: "Pacific Plumbing Pros",
      rating: 4.8,
      experience: "12+ years", 
      specialty: "Residential & Commercial",
      location: "Portland, OR",
      available: true,
      verified: true,
      recentProjects: 32,
      badges: ["Licensed", "Insured", "Fast Response"]
    },
    {
      id: 3,
      name: "Elite Framing Solutions",
      rating: 4.9,
      experience: "20+ years",
      specialty: "Commercial Framing",
      location: "Denver, CO",
      available: false,
      verified: true,
      recentProjects: 89,
      badges: ["Licensed", "Insured", "Top Rated", "Veteran Owned"]
    }
  ];

  return (
    <section id="project-board" className="py-16 sm:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInOnScroll className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            <SplitText 
              text="See It In Action"
              animation="slideUp"
              delay={0.2}
              stagger={0.05}
            />
          </h2>
          <p className="text-lg sm:text-xl text-construction-gray-dark max-w-2xl sm:max-w-3xl mx-auto px-4">
            <SplitText 
              text="Browse active projects and top contractors. This is what our platform looks like in real-time."
              animation="fadeIn"
              delay={0.8}
              stagger={0.02}
            />
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Active Projects */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-construction-navy mb-4 sm:mb-6 flex items-center">
              <DollarSign className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-construction-orange" />
              Active Projects
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-construction-navy mb-2 line-clamp-2">
                        {project.title}
                      </h4>
                      <div className="flex items-center text-construction-gray-dark mb-2">
                        {project.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        )}
                        <span className="font-medium text-sm sm:text-base truncate">{project.company}</span>
                      </div>
                    </div>
                    <Badge 
                      variant={project.urgency === "High" ? "destructive" : "secondary"}
                      className="ml-3 flex-shrink-0"
                    >
                      {project.urgency}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 text-xs sm:text-sm text-construction-gray-dark">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{project.budget}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{project.timeline}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">Posted {project.posted}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.trades.map((trade) => (
                      <Badge key={trade} variant="outline" className="text-construction-orange border-construction-orange text-xs">
                        {trade}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-construction-gray-dark">
                      {project.applicants} contractors applied
                    </span>
                    <button className="bg-construction-orange text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-construction-orange-light transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Contractors */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-construction-navy mb-4 sm:mb-6 flex items-center">
              <CheckCircle className="mr-3 h-5 w-5 sm:h-6 sm:w-6 text-construction-orange" />
              Top Contractors
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {contractors.map((contractor) => (
                <div key={contractor.id} className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-construction-navy mb-1 flex items-center">
                        <span className="truncate">{contractor.name}</span>
                        {contractor.verified && (
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 ml-2 flex-shrink-0" />
                        )}
                      </h4>
                      <div className="flex items-center text-construction-gray-dark text-xs sm:text-sm">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                          ⭐ {contractor.rating}
                        </span>
                        <span className="truncate">{contractor.experience}</span>
                      </div>
                    </div>
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ml-3 flex-shrink-0 ${
                      contractor.available 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {contractor.available ? "Available" : "Busy"}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 mb-3 sm:mb-4 text-xs sm:text-sm text-construction-gray-dark">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{contractor.location}</span>
                    </div>
                    <div>
                      <strong>Specialty:</strong> <span className="truncate">{contractor.specialty}</span>
                    </div>
                    <div>
                      <strong>Recent Projects:</strong> {contractor.recentProjects}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {contractor.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <button className="w-full bg-construction-navy text-white py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-construction-charcoal transition-colors">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 bg-construction-gray rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-construction-navy mb-3 sm:mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-construction-gray-dark mb-6 max-w-2xl mx-auto px-4">
            Join thousands of builders and contractors who are already using Sifter to connect and grow their businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="bg-construction-orange text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-construction-orange-light transition-colors w-full sm:w-auto">
              Post Your First Project
            </button>
            <button className="border border-construction-navy text-construction-navy px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-construction-navy hover:text-white transition-colors w-full sm:w-auto">
              Browse Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBoardSection;