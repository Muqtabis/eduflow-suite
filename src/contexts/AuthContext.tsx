import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'teacher' | 'student' | null;

interface AuthContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  logout: () => void;
  userName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>(null);

  const logout = () => setRole(null);

  const userName = role === 'admin' ? 'John Admin' : 
                   role === 'teacher' ? 'Dr. Sarah Mitchell' : 
                   role === 'student' ? 'Emma Thompson' : '';

  return (
    <AuthContext.Provider value={{ role, setRole, logout, userName }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
