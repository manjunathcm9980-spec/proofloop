import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';
import { getStoredUser, storeUser, DEMO_POSTER, DEMO_BUILDER } from '../services/auth';

interface AuthContextType {
  user: User | null;
  role: UserRole | null;
  login: (email: string, role: UserRole, name?: string) => void;
  logout: () => void;
  switchDemoRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(getStoredUser());

  useEffect(() => {
    storeUser(user);
  }, [user]);

  const login = (email: string, role: UserRole, name?: string) => {
    const newUser: User = {
      id: `usr_${Date.now()}`,
      email,
      name: name || (email.split('@')[0]),
      role,
      createdAt: new Date().toISOString(),
      avatarUrl: role === 'poster' 
        ? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' 
        : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const switchDemoRole = (role: UserRole) => {
    if (role === 'poster') {
      setUser(DEMO_POSTER);
    } else {
      setUser(DEMO_BUILDER);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user ? user.role : null,
        login,
        logout,
        switchDemoRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
