import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, User, Settings, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useLocation } from "react-router-dom";

// Add prop for setActiveTab function
interface DashboardNavProps {
  setActiveTab?: (tab: string) => void;
  activeTab?: string;
}

const DashboardNav = ({ setActiveTab, activeTab }: DashboardNavProps = {}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout, currentDashboard, switchDashboard } = useAuth();
  const location = useLocation();

  const handleNavClick = (tab: string) => {
    if (setActiveTab) {
      setActiveTab(tab);
    }
    setIsMobileMenuOpen(false);
  };

  const getNavItems = () => {
    const dashboard = currentDashboard || user?.role;
    
    switch (dashboard) {
      case 'builder':
        return [
          { name: "Dashboard", tab: "overview" },
          { name: "My Projects", tab: "projects" },
          { name: "Find Contractors", tab: "contractors" },
          { name: "Messages", tab: "messages" },
        ];
      case 'contractor':
        return [
          { name: "Dashboard", tab: "overview" },
          { name: "Browse Jobs", tab: "jobs" },
          { name: "My Bids", tab: "bids" },
          { name: "Messages", tab: "messages" },
        ];
      case 'admin':
        return [
          { name: "Dashboard", tab: "overview" },
          { name: "Users", tab: "users" },
          { name: "Projects", tab: "projects" },
          { name: "Analytics", tab: "analytics" },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  const getDashboardSwitcher = () => {
    if (user?.role !== 'admin') return null;

    return (
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">View as:</span>
        <select
          value={currentDashboard || 'admin'}
          onChange={(e) => switchDashboard(e.target.value as any)}
          className="px-3 py-1 text-sm border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-construction-orange"
        >
          <option value="admin">Admin</option>
          <option value="builder">Builder</option>
          <option value="contractor">Contractor</option>
        </select>
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/"
              className="text-2xl font-bold text-construction-orange hover:text-construction-orange/80 transition-colors duration-200"
            >
              Sifter
            </Link>
            
            {/* Dashboard Switcher */}
            <div className="hidden md:block">
              {getDashboardSwitcher()}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = activeTab === item.tab;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.tab)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 relative group ${
                      isActive 
                        ? "text-construction-orange" 
                        : "text-construction-navy hover:text-construction-orange"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-construction-orange rounded-full"></div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-construction-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-900">{user?.name}</span>
              <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full capitalize">
                {currentDashboard || user?.role}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-construction-orange/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-white/95 backdrop-blur-md rounded-lg mt-3 shadow-lg border border-gray-200/50">
              {/* Dashboard Switcher Mobile */}
              {user?.role === 'admin' && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  {getDashboardSwitcher()}
                </div>
              )}
              
              {navItems.map((item) => {
                const isActive = activeTab === item.tab;
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.tab)}
                    className={`block w-full text-left px-4 py-3 text-base font-medium transition-all duration-200 rounded-md ${
                      isActive 
                        ? "text-construction-orange bg-construction-orange/10" 
                        : "text-construction-navy hover:text-construction-orange hover:bg-gray-100"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 px-4 py-2 bg-gray-50 rounded-lg">
                  <User className="h-4 w-4 text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">{user?.name}</span>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full capitalize">
                    {currentDashboard || user?.role}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={logout}
                  className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 py-3"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;