import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, SystemRole, CollegeVerificationStatus } from '../types';
import { getStoredUser, storeUser, DEMO_POSTER, DEMO_BUILDER } from '../services/auth';
import { getVerificationByStudentId, subscribeVerificationStore } from '../services/verificationStore';

export const DEMO_ADMIN: User = {
  id: 'usr_admin_master',
  email: 'admin@proofloop.org',
  name: 'Platform Administrator',
  role: 'poster',
  systemRole: 'admin',
  bio: 'ProofLoop System Administrator & Student Verification Manager',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  createdAt: '2026-09-01T00:00:00Z',
};

interface AuthContextType {
  user: User | null;
  role: UserRole | null;
  systemRole: SystemRole;
  verificationStatus: CollegeVerificationStatus | null;
  login: (email: string, role: UserRole, name?: string, systemRole?: SystemRole) => void;
  logout: () => void;
  switchDemoRole: (role: UserRole) => void;
  switchSystemRole: (sysRole: SystemRole) => void;
  updateUserVerification: (status: CollegeVerificationStatus) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const u = getStoredUser();
    if (!u) return DEMO_BUILDER;
    return u;
  });

  // Sync user verification status with verificationStore
  useEffect(() => {
    if (!user) return;

    const syncStatus = () => {
      if (user.systemRole === 'admin') return;
      const v = getVerificationByStudentId(user.id) || getVerificationByStudentId(user.email);
      if (v) {
        if (v.status !== user.verificationStatus) {
          setUser(prev => prev ? {
            ...prev,
            verificationStatus: v.status,
            collegeName: v.collegeName,
            courseBranch: v.courseBranch,
            yearSemester: v.yearSemester,
            verificationRequestId: v.id,
          } : null);
        }
      }
    };

    syncStatus();
    const unsubscribe = subscribeVerificationStore(syncStatus);
    return () => unsubscribe();
  }, [user?.id, user?.email, user?.systemRole]);

  useEffect(() => {
    storeUser(user);
  }, [user]);

  const login = (email: string, role: UserRole, name?: string, systemRole: SystemRole = 'student') => {
    const existingVer = getVerificationByStudentId(email);
    const newUser: User = {
      id: `usr_${Date.now()}`,
      email,
      name: name || (email.split('@')[0]),
      role,
      systemRole,
      createdAt: new Date().toISOString(),
      avatarUrl: systemRole === 'admin'
        ? DEMO_ADMIN.avatarUrl
        : role === 'poster' 
        ? 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80' 
        : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      verificationStatus: existingVer ? existingVer.status : undefined,
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const switchDemoRole = (role: UserRole) => {
    if (role === 'poster') {
      setUser({ ...DEMO_POSTER, systemRole: 'student' });
    } else {
      const v = getVerificationByStudentId(DEMO_BUILDER.id) || getVerificationByStudentId(DEMO_BUILDER.email);
      setUser({ 
        ...DEMO_BUILDER, 
        systemRole: 'student', 
        verificationStatus: v ? v.status : 'approved' 
      });
    }
  };

  const switchSystemRole = (sysRole: SystemRole) => {
    if (sysRole === 'admin') {
      setUser(DEMO_ADMIN);
    } else {
      // Default Student (e.g. Manjunath demo student or Alex)
      const v = getVerificationByStudentId('usr_student_manjunath');
      const studentUser: User = {
        id: 'usr_student_manjunath',
        email: 'manjunath@yenepoya.edu.in',
        name: 'Manjunath',
        role: 'builder',
        systemRole: 'student',
        collegeName: 'Yenepoya University',
        courseBranch: 'B.Tech AI/ML',
        yearSemester: '2nd Year',
        verificationStatus: v ? v.status : 'pending',
        createdAt: new Date().toISOString(),
        avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      };
      setUser(studentUser);
    }
  };

  const updateUserVerification = (status: CollegeVerificationStatus) => {
    setUser(prev => prev ? { ...prev, verificationStatus: status } : null);
  };

  const currentSystemRole: SystemRole = user?.systemRole || 'student';
  const currentVerificationStatus: CollegeVerificationStatus | null = user?.verificationStatus || null;

  return (
    <AuthContext.Provider
      value={{
        user,
        role: user ? user.role : null,
        systemRole: currentSystemRole,
        verificationStatus: currentVerificationStatus,
        login,
        logout,
        switchDemoRole,
        switchSystemRole,
        updateUserVerification,
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

