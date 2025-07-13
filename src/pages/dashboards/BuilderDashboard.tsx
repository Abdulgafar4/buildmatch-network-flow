import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardNav from "@/components/DashboardNav";
import { 
  Plus, 
  Briefcase, 
  Users, 
  MessageCircle, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  DollarSign,
  MapPin,
  Calendar
} from "lucide-react";

const BuilderDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const projects = [
    {
      id: 1,
      title: "Kitchen Renovation",
      location: "San Francisco, CA",
      budget: "$25,000 - $35,000",
      status: "Active",
      bids: 8,
      deadline: "2024-02-15",
      description: "Complete kitchen remodel including cabinets, countertops, and appliances."
    },
    {
      id: 2,
      title: "Bathroom Remodel",
      location: "Oakland, CA",
      budget: "$15,000 - $20,000",
      status: "Reviewing Bids",
      bids: 12,
      deadline: "2024-02-20",
      description: "Master bathroom renovation with modern fixtures and tile work."
    },
    {
      id: 3,
      title: "Deck Construction",
      location: "San Jose, CA",
      budget: "$8,000 - $12,000",
      status: "In Progress",
      bids: 0,
      deadline: "2024-03-01",
      description: "Build new outdoor deck with composite materials."
    }
  ];

  const stats = [
    { label: "Active Projects", value: "3", icon: Briefcase, color: "text-blue-600" },
    { label: "Total Bids", value: "20", icon: Users, color: "text-green-600" },
    { label: "Messages", value: "8", icon: MessageCircle, color: "text-purple-600" },
    { label: "Completed", value: "12", icon: CheckCircle, color: "text-construction-orange" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <Clock className="h-4 w-4 text-blue-600" />;
      case "Reviewing Bids":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case "In Progress":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      default:
        return <CheckCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-blue-100 text-blue-800";
      case "Reviewing Bids":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-green-100 text-green-800";
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
              <h1 className="text-3xl font-bold text-gray-900">Builder Dashboard</h1>
              <p className="mt-2 text-gray-600">Manage your construction projects and connect with contractors</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Button className="bg-construction-orange hover:bg-construction-orange/90">
                <Plus className="h-4 w-4 mr-2" />
                New Project
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
            {["overview", "projects", "contractors"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                  activeTab === tab
                    ? "border-construction-orange text-construction-orange"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Recent Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
                <CardDescription>Your latest construction projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900">{project.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {getStatusIcon(project.status)}
                            <span className="ml-1">{project.status}</span>
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {project.location}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {project.budget}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Due {project.deadline}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{project.bids} bids</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          View Details
                        </Button>
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
                    <Plus className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Post New Project</h3>
                  <p className="text-sm text-gray-600">Create a new construction project and get bids from contractors</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Find Contractors</h3>
                  <p className="text-sm text-gray-600">Browse and connect with verified contractors in your area</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Messages</h3>
                  <p className="text-sm text-gray-600">Communicate with contractors and manage project discussions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>All Projects</CardTitle>
                    <CardDescription>Manage all your construction projects</CardDescription>
                  </div>
                  <Button className="bg-construction-orange hover:bg-construction-orange/90">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <Card key={project.id} className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                {getStatusIcon(project.status)}
                                <span className="ml-1">{project.status}</span>
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{project.description}</p>
                            <div className="flex items-center space-x-6 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {project.location}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />
                                {project.budget}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                Due {project.deadline}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold text-gray-900 mb-2">{project.bids}</p>
                            <p className="text-sm text-gray-600 mb-3">Bids Received</p>
                            <div className="space-x-2">
                              <Button variant="outline" size="sm">View Bids</Button>
                              <Button size="sm" className="bg-construction-orange hover:bg-construction-orange/90">
                                Manage
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

        {activeTab === "contractors" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Find Contractors</CardTitle>
                <CardDescription>Browse and connect with verified contractors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Contractor Directory</h3>
                  <p className="text-gray-600 mb-6">Search and filter contractors by specialty, location, and ratings</p>
                  <Button className="bg-construction-orange hover:bg-construction-orange/90">
                    Browse Contractors
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

export default BuilderDashboard;