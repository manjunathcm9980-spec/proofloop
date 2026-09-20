import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, SystemRole, CollegeVerificationStatus } from '../types';
import { getStoredUser, storeUser, DEMO_POSTER, DEMO_BUILDER } from '../services/auth';
import { getVerificationByStudentId, subscribeVerificationStore } from '../services/verificationStore';

export const DEMO_ADMIN: User = {
  id: 'usr_admin_master',
  email: 'admin@proofloop.org',
  name: 'Platform Administrator',
  role: 'builder', // Admin has builder capabilities (Claim Problem)
  systemRole: 'admin',
  bio: 'ProofLoop System Administrator & Student Verification Manager',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  createdAt: '2026-09-01T00:00:00Z',
};

export const DEFAULT_STUDENT_USER: User = {
  id: 'usr_student_manjunath',
  email: 'manjunath@yenepoya.edu.in',
  name: 'Manjunath',
  role: 'poster', // Student has poster capabilities (Post Problem)
  systemRole: 'student',
  collegeName: 'Yenepoya University',
  courseBranch: 'B.Tech AI/ML',
  yearSemester: '2nd Year',
  verificationStatus: 'approved',
  createdAt: new Date().toISOString(),
  avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
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
    if (!u) return DEFAULT_STUDENT_USER;
    if (u.systemRole === 'admin') return DEMO_ADMIN;
    return { ...DEFAULT_STUDENT_USER, ...u, role: 'poster', systemRole: 'student' };
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
      role: systemRole === 'student' ? 'poster' : 'builder',
      systemRole,
      createdAt: new Date().toISOString(),
      avatarUrl: systemRole === 'admin'
        ? DEMO_ADMIN.avatarUrl
        : 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      verificationStatus: existingVer ? existingVer.status : 'approved',
    };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  const switchDemoRole = (role: UserRole) => {
    if (role === 'poster') {
      setUser({ ...DEFAULT_STUDENT_USER, role: 'poster', systemRole: 'student' });
    } else {
      setUser({ ...DEMO_ADMIN, role: 'builder', systemRole: 'admin' });
    }
  };

  const switchSystemRole = (sysRole: SystemRole) => {
    if (sysRole === 'admin') {
      setUser(DEMO_ADMIN);
    } else {
      const v = getVerificationByStudentId(DEFAULT_STUDENT_USER.id);
      setUser({
        ...DEFAULT_STUDENT_USER,
        verificationStatus: v ? v.status : 'approved',
      });
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
        role: user ? user.role : (currentSystemRole === 'student' ? 'poster' : 'builder'),
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
