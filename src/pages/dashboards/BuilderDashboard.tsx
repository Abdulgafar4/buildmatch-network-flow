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
  Calendar,
  Search,
  Filter,
  Star,
  Badge,
  Eye,
  Edit,
  Trash2,
  Send
} from "lucide-react";

const BuilderDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const contractors = [
    {
      id: 1,
      name: "Mike Construction Co.",
      specialty: "Kitchen & Bathroom",
      rating: 4.8,
      reviews: 127,
      location: "San Francisco, CA",
      hourlyRate: "$85-120",
      verified: true,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Elite Builders",
      specialty: "General Construction",
      rating: 4.9,
      reviews: 203,
      location: "Oakland, CA",
      hourlyRate: "$95-150",
      verified: true,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Quality Deck Works",
      specialty: "Outdoor Construction",
      rating: 4.7,
      reviews: 89,
      location: "San Jose, CA",
      hourlyRate: "$70-100",
      verified: false,
      avatar: "/placeholder.svg"
    }
  ];

  const messages = [
    {
      id: 1,
      contractor: "Mike Construction Co.",
      project: "Kitchen Renovation",
      lastMessage: "I can start the project next week. Let me know if you'd like to discuss the timeline.",
      timestamp: "2 hours ago",
      unread: true,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      contractor: "Elite Builders",
      project: "Bathroom Remodel",
      lastMessage: "Thanks for choosing us! I've sent over the detailed proposal.",
      timestamp: "1 day ago",
      unread: false,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      contractor: "Quality Deck Works",
      project: "Deck Construction",
      lastMessage: "What type of composite material would you prefer?",
      timestamp: "3 days ago",
      unread: true,
      avatar: "/placeholder.svg"
    }
  ];

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
            {["overview", "projects", "contractors", "messages"].map((tab) => (
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
                {tab === "messages" && (
                  <span className="ml-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {messages.filter(m => m.unread).length}
                  </span>
                )}
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
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4 mr-1" />
                                View Bids
                              </Button>
                              <Button size="sm" className="bg-construction-orange hover:bg-construction-orange/90">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                <Trash2 className="h-4 w-4 mr-1" />
                                Delete
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
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Find Contractors</CardTitle>
                    <CardDescription>Browse and connect with verified contractors</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                    <Button variant="outline" size="sm">
                      <Search className="h-4 w-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {contractors.map((contractor) => (
                    <Card key={contractor.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-gray-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-gray-900">{contractor.name}</h3>
                              {contractor.verified && (
                                <Badge className="bg-green-100 text-green-800 text-xs px-2 py-1">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{contractor.specialty}</p>
                            <div className="flex items-center space-x-1 mb-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm font-medium">{contractor.rating}</span>
                              <span className="text-sm text-gray-500">({contractor.reviews} reviews)</span>
                            </div>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-1" />
                                {contractor.location}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-3 w-3 mr-1" />
                                {contractor.hourlyRate}/hr
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Button className="w-full bg-construction-orange hover:bg-construction-orange/90" size="sm">
                            Contact Contractor
                          </Button>
                          <Button variant="outline" className="w-full" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "messages" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Communicate with contractors about your projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <Card key={message.id} className={`hover:shadow-md transition-shadow duration-200 ${message.unread ? 'border-l-4 border-l-construction-orange' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-gray-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900">{message.contractor}</h3>
                                <p className="text-sm text-gray-600">Re: {message.project}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-gray-500">{message.timestamp}</p>
                                {message.unread && (
                                  <span className="inline-block w-2 h-2 bg-construction-orange rounded-full mt-1"></span>
                                )}
                              </div>
                            </div>
                            <p className="text-gray-700 mb-3">{message.lastMessage}</p>
                            <div className="flex space-x-2">
                              <Button size="sm" className="bg-construction-orange hover:bg-construction-orange/90">
                                <Send className="h-4 w-4 mr-2" />
                                Reply
                              </Button>
                              <Button variant="outline" size="sm">
                                View Conversation
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
      </div>
    </div>
  );
};

export default BuilderDashboard;