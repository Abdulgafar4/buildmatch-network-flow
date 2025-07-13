import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'builder' | 'contractor' | 'admin' | null;

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, password: string, role: UserRole) => void;
  logout: () => void;
  switchDashboard: (role: UserRole) => void;
  currentDashboard: UserRole;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentDashboard, setCurrentDashboard] = useState<UserRole>(null);

  const login = (email: string, password: string, role: UserRole) => {
    // Basic mock login - in real app, this would call an API
    const mockUser: User = {
      id: '1',
      name: role === 'admin' ? 'Admin User' : 
            role === 'builder' ? 'John Builder' : 'Mike Contractor',
      email,
      role: role!
    };
    
    setUser(mockUser);
    setCurrentDashboard(role);
  };

  const logout = () => {
    setUser(null);
    setCurrentDashboard(null);
  };

  const switchDashboard = (role: UserRole) => {
    if (user?.role === 'admin') {
      setCurrentDashboard(role);
    }
  };

  const value = {
    user,
    isLoggedIn: !!user,
    login,
    logout,
    switchDashboard,
    currentDashboard
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};