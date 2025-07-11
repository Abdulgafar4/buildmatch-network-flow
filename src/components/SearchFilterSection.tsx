import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SearchFilterSection = () => {
  const [selectedTrade, setSelectedTrade] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const trades = ["All", "Electrical", "Plumbing", "Framing", "Roofing", "HVAC", "Concrete", "Painting"];
  const locations = ["All", "Seattle, WA", "Portland, OR", "Austin, TX", "Denver, CO", "Phoenix, AZ"];

  const mockResults = [
    {
      name: "Elite Electrical Co.",
      trade: "Electrical",
      location: "Seattle, WA",
      rating: 4.9,
      projects: 156,
      verified: true,
      badges: ["Licensed", "Insured", "Top Rated"],
      availability: "Available Now"
    },
    {
      name: "Master Plumbing Services",
      trade: "Plumbing", 
      location: "Portland, OR",
      rating: 4.8,
      projects: 98,
      verified: true,
      badges: ["Licensed", "Insured", "Fast Response"],
      availability: "Available Next Week"
    },
    {
      name: "Precision Framing LLC",
      trade: "Framing",
      location: "Austin, TX", 
      rating: 4.9,
      projects: 203,
      verified: true,
      badges: ["Licensed", "Insured", "Top Rated", "Veteran Owned"],
      availability: "Available Now"
    }
  ];

  return (
    <section id="search-filter" className="py-20 bg-gradient-to-b from-white to-construction-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-navy mb-4">
            Find the Perfect Match
          </h2>
          <p className="text-xl text-construction-gray-dark max-w-3xl mx-auto">
            Our advanced search and filtering system helps you find exactly what you need. 
            Filter by trade, location, availability, certifications, and more.
          </p>
        </div>

        {/* Search Interface */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-construction-gray-dark" />
            <input
              type="text"
              placeholder="Search contractors, companies, or skills..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
            />
          </div>

          {/* Filter Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Trade Filter */}
            <div>
              <label className="block text-sm font-medium text-construction-navy mb-2">Trade</label>
              <div className="flex flex-wrap gap-2">
                {trades.map((trade) => (
                  <button
                    key={trade}
                    onClick={() => setSelectedTrade(trade)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-construction-orange focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Additional Filters */}
            <div>
              <label className="block text-sm font-medium text-construction-navy mb-2">Filters</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-construction-orange focus:ring-construction-orange" />
                  <span className="text-sm">Available Now</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-construction-orange focus:ring-construction-orange" />
                  <span className="text-sm">Verified Only</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-construction-orange focus:ring-construction-orange" />
                  <span className="text-sm">Top Rated (4.5+)</span>
                </label>
              </div>
            </div>
          </div>

          <Button variant="accent" size="lg" className="w-full md:w-auto">
            <Filter className="mr-2 h-5 w-5" />
            Search Contractors
          </Button>
        </div>

        {/* Sample Results */}
        <div>
          <h3 className="text-2xl font-bold text-construction-navy mb-6">
            Search Results ({mockResults.length})
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResults.map((contractor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-construction-navy mb-1 flex items-center">
                      {contractor.name}
                      {contractor.verified && (
                        <Shield className="h-5 w-5 text-green-500 ml-2" />
                      )}
                    </h4>
                    <p className="text-construction-gray-dark text-sm">{contractor.trade}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{contractor.rating}</span>
                    </div>
                    <p className="text-xs text-construction-gray-dark">{contractor.projects} projects</p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-construction-gray-dark">
                    <MapPin className="h-4 w-4 mr-2" />
                    {contractor.location}
                  </div>
                  <div className="flex items-center text-sm text-construction-gray-dark">
                    <Calendar className="h-4 w-4 mr-2" />
                    {contractor.availability}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {contractor.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="accent" size="sm" className="flex-1">
                    Contact
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-construction-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-construction-navy mb-2">Smart Search</h4>
            <p className="text-construction-gray-dark">AI-powered matching based on project requirements and contractor expertise.</p>
          </div>
          <div className="text-center">
            <div className="bg-construction-navy w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-construction-navy mb-2">Verified Profiles</h4>
            <p className="text-construction-gray-dark">Background checks, license verification, and insurance validation for peace of mind.</p>
          </div>
          <div className="text-center">
            <div className="bg-construction-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-construction-navy mb-2">Rated & Reviewed</h4>
            <p className="text-construction-gray-dark">Real reviews from verified projects help you make informed decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilterSection;