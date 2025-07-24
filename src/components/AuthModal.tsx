import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Eye, EyeOff, Mail, Lock, User, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth, UserRole } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-construction.jpg";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = "login" | "signup";
type UserType = "builder" | "contractor" | "admin";

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [authMode, setAuthMode] = useState<AuthMode>("signup");
  const [userType, setUserType] = useState<UserType>("builder");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 min-h-screen animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-4xl h-auto max-h-[95vh] md:max-h-[90vh] overflow-hidden animate-scale-in mx-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
        >
          <X className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
        </button>

        {/* Split Screen Layout */}
        <div className="flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
          {/* Left Side - Form */}
          <div className="flex-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <div className="max-w-md mx-auto w-full">
              {/* Logo/Brand */}
              <div className="mb-6 md:mb-8 text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Sifter</h1>
                <p className="text-gray-600 text-sm">
                  Sign up and get 30 day free trial
                </p>
              </div>

              {/* User Type Selection */}
              {userType !== "admin" && (
                <div className="mb-4 md:mb-6">
                  <div className="relative bg-gray-100 rounded-lg p-1">
                    {/* Animated Background */}
                    <div 
                      className={`absolute top-1 bottom-1 w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-md transition-all duration-300 ease-out transform ${
                        userType === "builder" 
                          ? "left-1 translate-x-0" 
                          : "left-1/2 translate-x-0"
                      }`}
                    />
                    <div className="relative flex">
                      <button
                        onClick={() => setUserType("builder")}
                        className={`flex-1 py-2.5 md:py-3 px-3 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-300 ease-out relative z-10 ${
                          userType === "builder"
                            ? "text-black"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span className="relative z-10">Builder</span>
                      </button>
                      <button
                        onClick={() => setUserType("contractor")}
                        className={`flex-1 py-2.5 md:py-3 px-3 md:px-4 rounded-md text-xs md:text-sm font-semibold transition-all duration-300 ease-out relative z-10 ${
                          userType === "contractor"
                            ? "text-black"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        <span className="relative z-10">Contractor</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Admin Header */}
              {userType === "admin" && (
                <div className="mb-4 md:mb-6 text-center">
                  <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium mb-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    Admin Access
                  </div>
                  <button
                    onClick={() => {
                      setUserType("builder");
                      setAuthMode("signup");
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    ← Back to user selection
                  </button>
                </div>
              )}

              {/* Form */}
              {authMode === "signup" && userType !== "admin" ? (
                <SignupForm userType={userType} onClose={onClose} />
              ) : (
                <LoginForm userType={userType} onClose={onClose} />
              )}

              {/* Social Login */}
              {userType !== "admin" && (
                <div className="mt-4 md:mt-6 space-y-2 md:space-y-3">
                  <button className="w-full flex items-center justify-center px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                    <Apple className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                    Apple
                  </button>
                  <button className="w-full flex items-center justify-center px-3 md:px-4 py-2.5 md:py-3 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all">
                    <svg className="h-4 w-4 md:h-5 md:w-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </button>
                </div>
              )}

              {/* Switch Mode */}
              {userType !== "admin" && (
                <div className="mt-4 md:mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    {authMode === "signup" ? "Have any account?" : "Don't have an account?"}{" "}
                    <button
                      onClick={() => setAuthMode(authMode === "signup" ? "login" : "signup")}
                      className="text-orange-600 hover:text-orange-500 font-medium underline"
                    >
                      {authMode === "signup" ? "Sign in" : "Sign up"}
                    </button>
                  </p>
                </div>
              )}

              {/* Admin Access Button */}
              {userType !== "admin" && (
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setUserType("admin");
                      setAuthMode("login");
                    }}
                    className="w-full text-center text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Admin Access
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 relative overflow-hidden h-32 md:h-auto order-1 md:order-2">
            <img
              src={heroImage}
              alt="Construction team collaboration"
              className="w-full h-full object-cover"
            />
            {/* Overlay elements similar to reference */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
            
            {/* Floating UI elements - hidden on mobile for cleaner look */}
            <div className="hidden md:block absolute top-8 left-8 bg-orange-400 text-black px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                Task Review With Team
              </div>
              <div className="text-xs mt-1 opacity-75">09:30am-10:00am</div>
            </div>

            <div className="hidden md:block absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
              <div className="flex items-center text-sm font-medium text-gray-900 mb-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                Daily Meeting
              </div>
              <div className="text-xs text-gray-600 mb-2">12:00pm-01:00pm</div>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
              </div>
            </div>

            <div className="hidden md:block absolute top-1/2 right-8 transform -translate-y-1/2">
              <div className="flex flex-col -space-y-2">
                <div className="w-12 h-12 bg-white rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-10 h-10 bg-white rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-8 h-8 bg-white rounded-full border-4 border-white shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Signup Form Component
const SignupForm: React.FC<{ userType: UserType; onClose: () => void }> = ({ userType, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!formData.fullName || !formData.email || !formData.password) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }

      // For demo purposes, we'll skip admin signup
      if (userType === "admin") {
        toast({
          title: "Error",
          description: "Admin accounts cannot be created through signup.",
          variant: "destructive"
        });
        return;
      }

      login(formData.email, formData.password, userType as UserRole);
      
      toast({
        title: "Success",
        description: "Account created successfully!"
      });

      const dashboardPath = `/dashboard/${userType}`;
      navigate(dashboardPath);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
        Create {userType} account
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full name
        </label>
        <input
          type="text"
          placeholder="Amélie Laurent"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          className="w-full px-3 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm md:text-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="amélie.laurent7622@gmail.com"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-3 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm md:text-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••••••••••••••••••"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full px-3 py-2 md:py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm md:text-base"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 md:py-2.5 rounded-lg transition-all text-sm md:text-base"
      >
        Submit
      </Button>
    </form>
  );
};

// Login Form Component
const LoginForm: React.FC<{ userType: UserType; onClose: () => void }> = ({ userType, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!formData.email || !formData.password) {
        toast({
          title: "Error",
          description: "Please fill in all required fields.",
          variant: "destructive"
        });
        return;
      }

      login(formData.email, formData.password, userType as UserRole);
      
      toast({
        title: "Success",
        description: "Successfully logged in!"
      });

      const dashboardPath = `/dashboard/${userType}`;
      navigate(dashboardPath);
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
        {userType === "admin" ? "Admin Login" : `Welcome back, ${userType}`}
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-3 py-2 md:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm md:text-base"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full px-3 py-2 md:py-2.5 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm md:text-base"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <button 
          type="button" 
          className="text-sm text-orange-600 hover:text-orange-500"
        >
          Forgot password?
        </button>
      </div>

      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 md:py-2.5 rounded-lg transition-all text-sm md:text-base"
      >
        Sign In
      </Button>
    </form>
  );
};

export default AuthModal;