import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardNav from "@/components/DashboardNav";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Users, 
  Briefcase, 
  DollarSign, 
  TrendingUp,
  BarChart3,
  Settings,
  Shield,
  AlertTriangle,
  Eye,
  UserCheck,
  UserX,
  Building,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { switchDashboard, currentDashboard } = useAuth();

  const stats = [
    { label: "Total Users", value: "1,247", icon: Users, color: "text-blue-600", change: "+12%" },
    { label: "Active Projects", value: "89", icon: Briefcase, color: "text-green-600", change: "+8%" },
    { label: "Revenue", value: "$125K", icon: DollarSign, color: "text-construction-orange", change: "+15%" },
    { label: "Platform Growth", value: "23%", icon: TrendingUp, color: "text-purple-600", change: "+5%" },
  ];

  const recentUsers = [
    { id: 1, name: "John Smith", role: "Builder", status: "Active", joinDate: "2024-01-15", projects: 3 },
    { id: 2, name: "Mike Johnson", role: "Contractor", status: "Pending", joinDate: "2024-01-14", projects: 0 },
    { id: 3, name: "Sarah Wilson", role: "Builder", status: "Active", joinDate: "2024-01-13", projects: 1 },
    { id: 4, name: "David Brown", role: "Contractor", status: "Active", joinDate: "2024-01-12", projects: 5 },
    { id: 5, name: "Lisa Davis", role: "Builder", status: "Suspended", joinDate: "2024-01-10", projects: 2 },
  ];

  const recentProjects = [
    { id: 1, title: "Kitchen Renovation", client: "John Smith", contractor: "Mike Johnson", status: "Active", value: "$25,000" },
    { id: 2, title: "Bathroom Remodel", client: "Sarah Wilson", contractor: "David Brown", status: "Completed", value: "$15,000" },
    { id: 3, title: "Office Build-out", client: "TechCorp", contractor: "Pending", status: "Bidding", value: "$50,000" },
    { id: 4, title: "Deck Construction", client: "Robert Taylor", contractor: "Mike Johnson", status: "In Progress", value: "$8,000" },
  ];

  const getUserStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case "Suspended":
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Users className="h-4 w-4 text-gray-600" />;
    }
  };

  const getUserStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProjectStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-blue-100 text-blue-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Bidding":
        return "bg-yellow-100 text-yellow-800";
      case "In Progress":
        return "bg-purple-100 text-purple-800";
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
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="mt-2 text-gray-600">Platform overview and management tools</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <Button 
                variant="outline"
                onClick={() => switchDashboard('builder')}
              >
                <Eye className="h-4 w-4 mr-2" />
                View as Builder
              </Button>
              <Button 
                variant="outline"
                onClick={() => switchDashboard('contractor')}
              >
                <Eye className="h-4 w-4 mr-2" />
                View as Contractor
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
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
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
            {["overview", "users", "projects", "analytics", "settings"].map((tab) => (
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
            {/* Dashboard Switcher Info */}
            {currentDashboard !== 'admin' && (
              <Card className="border-construction-orange/20 bg-construction-orange/5">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-construction-orange" />
                    <div>
                      <p className="font-medium text-construction-orange">Admin View Mode</p>
                      <p className="text-sm text-gray-600">
                        You're currently viewing the {currentDashboard} dashboard. 
                        <button 
                          onClick={() => switchDashboard('admin')}
                          className="ml-1 text-construction-orange hover:underline font-medium"
                        >
                          Return to admin view
                        </button>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Users */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Users</CardTitle>
                  <CardDescription>Latest user registrations and activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-construction-orange/10 rounded-full flex items-center justify-center">
                            <Users className="h-4 w-4 text-construction-orange" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-600">{user.role} • {user.projects} projects</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUserStatusColor(user.status)}`}>
                            {getUserStatusIcon(user.status)}
                            <span className="ml-1">{user.status}</span>
                          </span>
                          <p className="text-xs text-gray-500 mt-1">{user.joinDate}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Projects */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Latest project activity on the platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentProjects.map((project) => (
                      <div key={project.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Briefcase className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{project.title}</p>
                            <p className="text-sm text-gray-600">
                              {project.client} → {project.contractor === "Pending" ? "Open for bids" : project.contractor}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">{project.value}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getProjectStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Manage Users</h3>
                  <p className="text-sm text-gray-600">Review and manage user accounts</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Project Overview</h3>
                  <p className="text-sm text-gray-600">Monitor all platform projects</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                  <p className="text-sm text-gray-600">View platform performance metrics</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">System Settings</h3>
                  <p className="text-sm text-gray-600">Configure platform settings</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Manage all platform users and their permissions</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <UserCheck className="h-4 w-4 mr-2" />
                      Approve Pending
                    </Button>
                    <Button className="bg-construction-orange hover:bg-construction-orange/90">
                      <Users className="h-4 w-4 mr-2" />
                      Add User
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <Card key={user.id} className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-construction-orange/10 rounded-full flex items-center justify-center">
                              <Users className="h-6 w-6 text-construction-orange" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{user.name}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span className="capitalize">{user.role}</span>
                                <span>Joined {user.joinDate}</span>
                                <span>{user.projects} projects</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUserStatusColor(user.status)}`}>
                              {getUserStatusIcon(user.status)}
                              <span className="ml-1">{user.status}</span>
                            </span>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              {user.status === "Active" ? (
                                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                  <UserX className="h-4 w-4" />
                                </Button>
                              ) : (
                                <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                                  <UserCheck className="h-4 w-4" />
                                </Button>
                              )}
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

        {activeTab === "projects" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Management</CardTitle>
                <CardDescription>Monitor and manage all projects on the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProjects.map((project) => (
                    <Card key={project.id} className="hover:shadow-md transition-shadow duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <Briefcase className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-gray-900">{project.title}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>Client: {project.client}</span>
                                <span>Contractor: {project.contractor}</span>
                                <span>Value: {project.value}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProjectStatusColor(project.status)}`}>
                              {project.status}
                            </span>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
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

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>Detailed insights into platform performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600 mb-6">Comprehensive analytics and reporting tools</p>
                  <Button className="bg-construction-orange hover:bg-construction-orange/90">
                    View Full Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure platform settings and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Settings className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Platform Configuration</h3>
                  <p className="text-gray-600 mb-6">Manage system settings, integrations, and platform configuration</p>
                  <Button className="bg-construction-orange hover:bg-construction-orange/90">
                    Access Settings
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

export default AdminDashboard;