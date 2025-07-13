import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BuilderDashboard from "./pages/dashboards/BuilderDashboard";
import ContractorDashboard from "./pages/dashboards/ContractorDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole?: string }) => {
  const { isLoggedIn, user, currentDashboard } = useAuth();
  
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // For admin viewing other dashboards, allow access
  if (user?.role === 'admin') {
    return <>{children}</>;
  }

  // For regular users, check if they have the required role
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to={`/dashboard/${user?.role}`} replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route 
        path="/dashboard/builder" 
        element={
          <ProtectedRoute requiredRole="builder">
            <BuilderDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/dashboard/contractor" 
        element={
          <ProtectedRoute requiredRole="contractor">
            <ContractorDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/dashboard/admin" 
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      {/* Redirect /dashboard to appropriate user dashboard */}
      <Route path="/dashboard" element={<DashboardRedirect />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const DashboardRedirect = () => {
  const { user, currentDashboard } = useAuth();
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  const dashboardRole = currentDashboard || user.role;
  return <Navigate to={`/dashboard/${dashboardRole}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
