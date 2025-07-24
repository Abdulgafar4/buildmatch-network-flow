import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";
import StaggeredChildren from "@/components/ui/staggered-children";
import SplitText from "@/components/ui/split-text";

const SearchFilterSection = () => {
  const [selectedTrade, setSelectedTrade] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const trades = ["All", "Electrical", "Plumbing", "Framing", "Roofing", "HVAC", "Concrete", "Painting"];
  const locations = ["All", "Toronto, ON", "Ottawa, ON", "Hamilton, ON", "London, ON", "Windsor, ON"];

  const mockResults = [
    {
      name: "Elite Electrical Co.",
      trade: "Electrical",
      location: "Toronto, ON",
      rating: 4.9,
      projects: 156,
      verified: true,
      badges: ["Licensed", "Insured", "Top Rated"],
      availability: "Available Now"
    },
    {
      name: "Master Plumbing Services",
      trade: "Plumbing", 
      location: "Ottawa, ON",
      rating: 4.8,
      projects: 98,
      verified: true,
      badges: ["Licensed", "Insured", "Fast Response"],
      availability: "Available Next Week"
    },
    {
      name: "Precision Framing LLC",
      trade: "Framing",
      location: "Hamilton, ON", 
      rating: 4.9,
      projects: 203,
      verified: true,
      badges: ["Licensed", "Insured", "Top Rated", "Veteran Owned"],
      availability: "Available Now"
    }
  ];

  return (
    <section id="search-filter" className="py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInOnScroll className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            <SplitText 
              text="Find the Perfect Match"
              animation="slideUp"
              delay={0.2}
              stagger={0.05}
            />
          </h2>
          <p className="text-lg sm:text-xl text-construction-gray-dark max-w-2xl sm:max-w-3xl mx-auto px-4">
            <SplitText 
              text="Our advanced search and filtering system helps you find exactly what you need. Filter by trade, location, availability, certifications, and more."
              animation="fadeIn"
              delay={0.8}
              stagger={0.02}
            />
          </p>
        </FadeInOnScroll>

        {/* Search Interface */}
        <FadeInOnScroll delay={0.3} className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="relative mb-4 sm:mb-6">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-construction-gray-dark" />
            <input
              type="text"
              placeholder="Search contractors, companies, or skills..."
              className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl text-base sm:text-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
            />
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {/* Trade Filter */}
            <div>
              <label className="block text-sm font-medium text-construction-navy mb-2">Trade</label>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {trades.map((trade) => (
                  <button
                    key={trade}
                    onClick={() => setSelectedTrade(trade)}
                    className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                      selectedTrade === trade
                        ? "bg-construction-orange text-white"
                        : "bg-gray-100 text-construction-gray-dark hover:bg-gray-200"
                    }`}
                  >
                    {trade}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-construction-navy mb-2">Location</label>
              <select 
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent text-sm sm:text-base"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Additional Filters */}
            <div>
              <label className="block text-sm font-medium text-construction-navy mb-2">Filters</label>
              <div className="space-y-1 sm:space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-construction-orange focus:ring-construction-orange" />
                  <span className="text-xs sm:text-sm">Available Now</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-construction-orange focus:ring-construction-orange" />
                  <span className="text-xs sm:text-sm">Verified Only</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-construction-orange focus:ring-construction-orange" />
                  <span className="text-xs sm:text-sm">Top Rated (4.5+)</span>
                </label>
              </div>
            </div>
          </div>

          <Button variant="accent" size="lg" className="w-full lg:w-auto text-sm sm:text-base">
            <Filter className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Search Contractors
          </Button>
        </FadeInOnScroll>

        {/* Sample Results */}
        <FadeInOnScroll delay={0.5}>
          <h3 className="text-xl sm:text-2xl font-bold text-construction-navy mb-4 sm:mb-6">
            Search Results ({mockResults.length})
          </h3>
          
          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" staggerDelay={0.1}>
            {mockResults.map((contractor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-200">
                {/* Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base sm:text-lg font-semibold text-construction-navy mb-1 flex items-center">
                      <span className="truncate">{contractor.name}</span>
                      {contractor.verified && (
                        <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 ml-2 flex-shrink-0" />
                      )}
                    </h4>
                    <p className="text-construction-gray-dark text-sm truncate">{contractor.trade}</p>
                  </div>
                  <div className="text-right ml-3">
                    <div className="flex items-center mb-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 mr-1" />
                      <span className="text-xs sm:text-sm font-medium">{contractor.rating}</span>
                    </div>
                    <p className="text-xs text-construction-gray-dark">{contractor.projects} projects</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                  <div className="flex items-center text-xs sm:text-sm text-construction-gray-dark">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{contractor.location}</span>
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-construction-gray-dark">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">{contractor.availability}</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {contractor.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm">
                    View Profile
                  </Button>
                  <Button variant="accent" size="sm" className="flex-1 text-xs sm:text-sm">
                    Contact
                  </Button>
                </div>
              </div>
            ))}
          </StaggeredChildren>
        </FadeInOnScroll>

        {/* Feature Highlights */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="bg-construction-orange w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Search className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-construction-navy mb-2">Smart Search</h4>
            <p className="text-construction-gray-dark text-sm sm:text-base">AI-powered matching based on project requirements and contractor expertise.</p>
          </div>
          <div className="text-center">
            <div className="bg-construction-navy w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-construction-navy mb-2">Verified Profiles</h4>
            <p className="text-construction-gray-dark text-sm sm:text-base">Background checks, license verification, and insurance validation for peace of mind.</p>
          </div>
          <div className="text-center">
            <div className="bg-construction-orange w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-construction-navy mb-2">Rated & Reviewed</h4>
            <p className="text-construction-gray-dark text-sm sm:text-base">Real reviews from verified projects help you make informed decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilterSection;