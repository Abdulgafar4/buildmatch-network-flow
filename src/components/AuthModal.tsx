import React, { useState } from "react";
import { X, Eye, EyeOff, ArrowRight, ArrowLeft, Building2, Wrench, Mail, Lock, User, Phone, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthMode = "login" | "signup" | "forgot-password";
type UserType = "builder" | "contractor" | "admin";

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [authMode, setAuthMode] = useState<AuthMode>("login");
  const [userType, setUserType] = useState<UserType>("builder");
  const [showPassword, setShowPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleModeSwitch = (newMode: AuthMode) => {
    if (newMode === authMode) return;
    setIsAnimating(true);
    setTimeout(() => {
      setAuthMode(newMode);
      // Reset to builder if switching to signup and was admin
      if (newMode === "signup" && userType === "admin") {
        setUserType("builder");
      }
      setIsAnimating(false);
    }, 300);
  };

  const handleUserTypeSwitch = (newType: UserType) => {
    if (newType === userType) return;
    setIsAnimating(true);
    setTimeout(() => {
      setUserType(newType);
      setIsAnimating(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 min-h-screen animate-fade-in">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in transform transition-all duration-300 hover:shadow-3xl">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-construction-navy via-construction-charcoal to-slate-800 p-8 text-white overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-construction-orange/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 animate-pulse delay-1000"></div>
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 hover:bg-white/20 rounded-xl transition-all duration-300 hover:rotate-90 hover:scale-110 group"
          >
            <X className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
          </button>
          
          <div className="text-center relative z-10">
            <h2 className="text-2xl font-bold mb-2">
              <SplitText 
                text={
                  authMode === "login" ? "Welcome Back" : 
                  authMode === "signup" ? "Join Sifter" : 
                  "Reset Password"
                }
                animation="slideUp"
                delay={0.1}
                stagger={0.05}
              />
            </h2>
            <p className="text-gray-300">
              <SplitText 
                text={
                  authMode === "login" ? `Sign in to your account as a ${userType}` :
                  authMode === "signup" ? `Create your account as a ${userType}` :
                  "Enter your email to receive reset instructions"
                }
                animation="fadeIn"
                delay={0.5}
                stagger={0.02}
              />
            </p>
          </div>
        </div>

        {/* User Type Selector - Only show for login and signup */}
        {authMode !== "forgot-password" && (
          <div className="p-6 border-b border-gray-100/50">
            <div className={`flex bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-1.5 shadow-inner ${authMode === "signup" ? "grid-cols-2" : "grid-cols-3"}`}>
              <button
                onClick={() => handleUserTypeSwitch("builder")}
                className={`flex-1 flex items-center justify-center py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  userType === "builder"
                    ? "bg-white text-construction-navy shadow-lg shadow-construction-navy/10 transform scale-105"
                    : "text-gray-600 hover:text-construction-navy hover:bg-white/50"
                }`}
              >
                <Building2 className="h-4 w-4 mr-2" />
                Builder
              </button>
              <button
                onClick={() => handleUserTypeSwitch("contractor")}
                className={`flex-1 flex items-center justify-center py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  userType === "contractor"
                    ? "bg-white text-construction-navy shadow-lg shadow-construction-navy/10 transform scale-105"
                    : "text-gray-600 hover:text-construction-navy hover:bg-white/50"
                }`}
              >
                <Wrench className="h-4 w-4 mr-2" />
                Contractor
              </button>
              {/* Admin option only for login */}
              {authMode === "login" && (
                <button
                  onClick={() => handleUserTypeSwitch("admin")}
                  className={`flex-1 flex items-center justify-center py-3.5 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                    userType === "admin"
                      ? "bg-white text-red-600 shadow-lg shadow-red-500/10 transform scale-105"
                      : "text-gray-600 hover:text-red-600 hover:bg-white/50"
                  }`}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Admin
                </button>
              )}
            </div>
          </div>
        )}

        {/* Auth Mode Tabs - Only show for login and signup */}
        {authMode !== "forgot-password" && (
          <div className="px-6 pt-4">
            <div className="flex bg-gray-50 rounded-xl p-1.5 shadow-inner">
              <button
                onClick={() => handleModeSwitch("login")}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  authMode === "login"
                    ? "bg-white text-construction-navy shadow-md transform scale-105"
                    : "text-gray-600 hover:text-construction-navy hover:bg-white/50"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => handleModeSwitch("signup")}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  authMode === "signup"
                    ? "bg-white text-construction-navy shadow-md transform scale-105"
                    : "text-gray-600 hover:text-construction-navy hover:bg-white/50"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        {/* Form Content */}
        <div className={`p-6 transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95 blur-sm' : 'opacity-100 transform scale-100 blur-0'}`}>
          {authMode === "login" ? (
            <LoginForm userType={userType} onForgotPassword={() => handleModeSwitch("forgot-password")} onClose={onClose} />
          ) : authMode === "signup" ? (
            <SignupForm userType={userType} onClose={onClose} />
          ) : (
            <ForgotPasswordForm onBackToLogin={() => handleModeSwitch("login")} />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div className="text-center text-sm text-gray-600">
            {authMode === "login" ? (
              <p>
                Don't have an account?{" "}
                <button
                  onClick={() => handleModeSwitch("signup")}
                  className="text-construction-orange hover:underline font-medium"
                >
                  Sign up here
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <button
                  onClick={() => handleModeSwitch("login")}
                  className="text-construction-orange hover:underline font-medium"
                >
                  Sign in here
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Login Form Component
const LoginForm: React.FC<{ userType: UserType; onForgotPassword: () => void; onClose: () => void }> = ({ userType, onForgotPassword, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-3 focus:ring-construction-orange/30 focus:border-construction-orange focus:scale-105 transition-all duration-300 hover:border-gray-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full pl-10 pr-12 py-3.5 border border-gray-200 rounded-xl focus:ring-3 focus:ring-construction-orange/30 focus:border-construction-orange focus:scale-105 transition-all duration-300 hover:border-gray-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center">
          <input type="checkbox" className="rounded border-gray-300 text-construction-orange focus:ring-construction-orange" />
          <span className="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <button 
          type="button" 
          className="text-sm text-construction-orange hover:underline"
          onClick={onForgotPassword}
        >
          Forgot password?
        </button>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-gradient-to-r from-construction-orange to-orange-500 hover:from-construction-orange-light hover:to-orange-400 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-construction-orange/30"
      >
        Sign In as {userType === "builder" ? "Builder" : userType === "contractor" ? "Contractor" : "Admin"}
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </form>
  );
};

// Signup Form Component
const SignupForm: React.FC<{ userType: UserType; onClose: () => void }> = ({ userType, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="First name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Last name"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {userType === "contractor" ? "Business Name" : "Company Name"}
        </label>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder={userType === "contractor" ? "Your business name" : "Your company name"}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
          />
        </div>
      </div>

      {userType === "contractor" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="City, Ontario"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div className="flex items-start">
        <input 
          type="checkbox" 
          className="mt-1 rounded border-gray-300 text-construction-orange focus:ring-construction-orange" 
        />
        <label className="ml-2 text-sm text-gray-600">
          I agree to the{" "}
          <a href="#" className="text-construction-orange hover:underline">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="text-construction-orange hover:underline">Privacy Policy</a>
        </label>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-construction-orange hover:bg-construction-orange-light py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
      >
        Create Account as {userType === "builder" ? "Builder" : userType === "contractor" ? "Contractor" : "Admin"}
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </form>
  );
};

// Forgot Password Form Component
const ForgotPasswordForm: React.FC<{ onBackToLogin: () => void }> = ({ onBackToLogin }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the reset email
    setTimeout(() => {
      setIsSubmitted(false);
      onBackToLogin();
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {!isSubmitted ? (
        <>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-construction-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-construction-orange" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Forgot your password?</h3>
            <p className="text-gray-600">
              No worries! Enter your email address and we'll send you a link to reset your password.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-construction-orange focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-construction-orange hover:bg-construction-orange-light py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
          >
            Send Reset Link
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={onBackToLogin}
              className="text-sm text-gray-600 hover:text-construction-orange transition-colors"
            >
              <ArrowLeft className="h-4 w-4 inline mr-1" />
              Back to login
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Check your email!</h3>
          <p className="text-gray-600 mb-4">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
          <p className="text-sm text-gray-500">
            Didn't receive the email? Check your spam folder or try again.
          </p>
        </div>
      )}
    </form>
  );
};

export default AuthModal; 