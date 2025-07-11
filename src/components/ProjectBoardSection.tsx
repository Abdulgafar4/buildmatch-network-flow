import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign, Clock, CheckCircle } from "lucide-react";

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
    <section id="project-board" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-construction-gray-dark max-w-3xl mx-auto">
            Browse active projects and top contractors. This is what our platform looks like in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Active Projects */}
          <div>
            <h3 className="text-2xl font-bold text-construction-navy mb-6 flex items-center">
              <DollarSign className="mr-3 h-6 w-6 text-construction-orange" />
              Active Projects
            </h3>
            
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-construction-navy mb-2">
                        {project.title}
                      </h4>
                      <div className="flex items-center text-construction-gray-dark mb-2">
                        {project.verified && (
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        )}
                        <span className="font-medium">{project.company}</span>
                      </div>
                    </div>
                    <Badge 
                      variant={project.urgency === "High" ? "destructive" : "secondary"}
                      className="ml-4"
                    >
                      {project.urgency}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm text-construction-gray-dark">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {project.budget}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {project.timeline}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Posted {project.posted}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.trades.map((trade) => (
                      <Badge key={trade} variant="outline" className="text-construction-orange border-construction-orange">
                        {trade}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-construction-gray-dark">
                      {project.applicants} contractors applied
                    </span>
                    <button className="bg-construction-orange text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-construction-orange-light transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Contractors */}
          <div>
            <h3 className="text-2xl font-bold text-construction-navy mb-6 flex items-center">
              <CheckCircle className="mr-3 h-6 w-6 text-construction-orange" />
              Top Contractors
            </h3>
            
            <div className="space-y-6">
              {contractors.map((contractor) => (
                <div key={contractor.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-construction-navy mb-1 flex items-center">
                        {contractor.name}
                        {contractor.verified && (
                          <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                        )}
                      </h4>
                      <div className="flex items-center text-construction-gray-dark text-sm">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium mr-2">
                          ⭐ {contractor.rating}
                        </span>
                        <span>{contractor.experience}</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      contractor.available 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {contractor.available ? "Available" : "Busy"}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 mb-4 text-sm text-construction-gray-dark">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {contractor.location}
                    </div>
                    <div>
                      <strong>Specialty:</strong> {contractor.specialty}
                    </div>
                    <div>
                      <strong>Recent Projects:</strong> {contractor.recentProjects}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {contractor.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <button className="w-full bg-construction-navy text-white py-2 rounded-lg text-sm font-medium hover:bg-construction-charcoal transition-colors">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-construction-gray rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-construction-navy mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-construction-gray-dark mb-6">
            Join thousands of contractors and builders already using BuildMatch
          </p>
          <button className="bg-construction-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-construction-orange-light transition-colors duration-200">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectBoardSection;