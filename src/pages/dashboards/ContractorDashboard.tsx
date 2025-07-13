import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardNav from "@/components/DashboardNav";
import { 
  Search, 
  Briefcase, 
  DollarSign, 
  MessageCircle, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  MapPin,
  Calendar,
  Star,
  Filter,
  Eye
} from "lucide-react";

const ContractorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const jobs = [
    {
      id: 1,
      title: "Kitchen Renovation",
      client: "John Smith",
      location: "San Francisco, CA",
      budget: "$25,000 - $35,000",
      posted: "2 days ago",
      deadline: "2024-02-15",
      category: "Kitchen Remodeling",
      description: "Complete kitchen remodel including cabinets, countertops, and appliances. Looking for experienced contractor with modern design experience.",
      requirements: ["Licensed", "Insured", "5+ years experience"],
      status: "new"
    },
    {
      id: 2,
      title: "Bathroom Remodel",
      client: "Sarah Johnson",
      location: "Oakland, CA",
      budget: "$15,000 - $20,000",
      posted: "1 day ago",
      deadline: "2024-02-20",
      category: "Bathroom Remodeling",
      description: "Master bathroom renovation with modern fixtures and tile work. Premium materials preferred.",
      requirements: ["Licensed", "Insured", "Portfolio required"],
      status: "applied"
    },
    {
      id: 3,
      title: "Commercial Office Build-out",
      client: "TechCorp Inc.",
      location: "San Jose, CA",
      budget: "$50,000 - $75,000",
      posted: "3 days ago",
      deadline: "2024-03-01",
      category: "Commercial",
      description: "Complete office build-out for tech company. Modern design with open concept and conference rooms.",
      requirements: ["Commercial license", "Bonded", "References"],
      status: "shortlisted"
    }
  ];

  const myBids = [
    {
      id: 1,
      project: "Kitchen Renovation",
      bidAmount: "$28,500",
      status: "Pending",
      submittedDate: "2024-01-10",
      client: "John Smith"
    },
    {
      id: 2,
      project: "Deck Construction",
      bidAmount: "$9,800",
      status: "Accepted",
      submittedDate: "2024-01-08",
      client: "Mike Wilson"
    },
    {
      id: 3,
      project: "Bathroom Remodel",
      bidAmount: "$17,200",
      status: "Under Review",
      submittedDate: "2024-01-12",
      client: "Sarah Johnson"
    }
  ];

  const stats = [
    { label: "Available Jobs", value: "24", icon: Briefcase, color: "text-blue-600" },
    { label: "Active Bids", value: "8", icon: TrendingUp, color: "text-green-600" },
    { label: "Messages", value: "5", icon: MessageCircle, color: "text-purple-600" },
    { label: "This Month", value: "$45K", icon: DollarSign, color: "text-construction-orange" },
  ];

  const getJobStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "applied":
        return "bg-yellow-100 text-yellow-800";
      case "shortlisted":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getBidStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Accepted":
        return "bg-green-100 text-green-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Contractor Dashboard</h1>
              <p className="mt-2 text-gray-600">Find projects and manage your construction business</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter Jobs
              </Button>
              <Button className="bg-construction-orange hover:bg-construction-orange/90">
                <Search className="h-4 w-4 mr-2" />
                Browse Jobs
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {["overview", "jobs", "bids", "profile"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                  activeTab === tab
                    ? "border-construction-orange text-construction-orange"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab === "bids" ? "My Bids" : tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Featured Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Jobs</CardTitle>
                <CardDescription>High-priority projects matching your skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobs.slice(0, 2).map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getJobStatusColor(job.status)}`}>
                            {job.status === "new" && "New"}
                            {job.status === "applied" && "Applied"}
                            {job.status === "shortlisted" && "Shortlisted"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.budget}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Due {job.deadline}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{job.description.substring(0, 100)}...</p>
                      </div>
                      <div className="text-right ml-6">
                        <p className="text-sm text-gray-500 mb-2">Posted {job.posted}</p>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" className="bg-construction-orange hover:bg-construction-orange/90">
                            Bid Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Bids */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bids</CardTitle>
                <CardDescription>Your latest bid submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myBids.slice(0, 3).map((bid) => (
                    <div key={bid.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{bid.project}</h3>
                        <p className="text-sm text-gray-600">Client: {bid.client}</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{bid.bidAmount}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getBidStatusColor(bid.status)}`}>
                          {bid.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Browse Jobs</h3>
                  <p className="text-sm text-gray-600">Find new construction projects that match your expertise</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Manage Bids</h3>
                  <p className="text-sm text-gray-600">Track your bid submissions and project proposals</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Update Profile</h3>
                  <p className="text-sm text-gray-600">Enhance your profile to attract more clients</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "jobs" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Available Jobs</CardTitle>
                    <CardDescription>Browse construction projects in your area</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                    <Button className="bg-construction-orange hover:bg-construction-orange/90">
                      <Search className="h-4 w-4 mr-2" />
                      Advanced Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {jobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getJobStatusColor(job.status)}`}>
                                {job.status === "new" && "New Opportunity"}
                                {job.status === "applied" && "Application Sent"}
                                {job.status === "shortlisted" && "Shortlisted"}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{job.description}</p>
                            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-3">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />
                                {job.budget}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Due {job.deadline}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              {job.requirements.map((req, idx) => (
                                <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                  {req}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right ml-6">
                            <p className="text-sm text-gray-500 mb-2">Posted {job.posted}</p>
                            <p className="text-sm font-medium text-gray-900 mb-3">by {job.client}</p>
                            <div className="space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View Details
                              </Button>
                              <Button 
                                size="sm" 
                                className="bg-construction-orange hover:bg-construction-orange/90"
                                disabled={job.status === "applied"}
                              >
                                {job.status === "applied" ? "Applied" : "Submit Bid"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "bids" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Bids</CardTitle>
                <CardDescription>Track all your bid submissions and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myBids.map((bid) => (
                    <Card key={bid.id} className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{bid.project}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>Client: {bid.client}</span>
                              <span>Submitted: {bid.submittedDate}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900 mb-2">{bid.bidAmount}</p>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBidStatusColor(bid.status)}`}>
                              {bid.status}
                            </span>
                            <div className="mt-3">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contractor Profile</CardTitle>
                <CardDescription>Manage your professional profile and credentials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Star className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Management</h3>
                  <p className="text-gray-600 mb-6">Update your skills, portfolio, and credentials to attract more clients</p>
                  <Button className="bg-construction-orange hover:bg-construction-orange/90">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractorDashboard;