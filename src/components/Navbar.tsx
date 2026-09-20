import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { NotificationBell } from './NotificationBell';
import { 
  PlusCircle, 
  LayoutDashboard, 
  Sparkles, 
  LogOut, 
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
  GraduationCap,
  FolderGit2
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, role, systemRole, verificationStatus, logout, switchSystemRole } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0B0E14]/85 backdrop-blur-xl border-b border-[#242834]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-amber p-0.5 shadow-md shadow-[#FFB020]/20 group-hover:shadow-[#FFB020]/40 transition-all">
            <div className="w-full h-full bg-[#0B0E14] rounded-[10px] flex items-center justify-center">
              <Workflow className="w-5 h-5 text-[#FFB020] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-display font-black text-xl tracking-tight text-[#F2F0EB]">
            Proof<span className="text-gradient-amber">Loop</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/problems"
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
              isActive('/problems')
                ? 'bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]'
                : 'text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60'
            }`}
          >
            Browse Problems
          </Link>
          <Link
            to="/wall"
            className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 ${
              isActive('/wall')
                ? 'bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]'
                : 'text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            Proof Wall
          </Link>

          {systemRole === 'admin' ? (
            <Link
              to="/admin"
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 ${
                isActive('/admin')
                  ? 'bg-[#FF6B4A]/20 text-[#FF6B4A] border border-[#FF6B4A]/40'
                  : 'text-[#FF6B4A] hover:bg-[#FF6B4A]/10'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#FF6B4A]" />
              Admin Verification Portal
            </Link>
          ) : (
            <>
              {user && (
                <>
                  <Link
                    to="/dashboard"
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 ${
                      isActive('/dashboard')
                        ? 'bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]'
                        : 'text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    Dashboard
                  </Link>

                  <Link
                    to="/my-projects"
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 ${
                      isActive('/my-projects')
                        ? 'bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]'
                        : 'text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60'
                    }`}
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-[#FFB020]" />
                    My Projects
                  </Link>
                </>
              )}
              <Link
                to="/verify-student"
                className={`px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  isActive('/verify-student')
                    ? 'bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]'
                    : 'text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#FFB020]" />
                Student Verification
              </Link>
            </>
          )}
        </nav>

        {/* Right CTA Group: System Role Switcher + Verification Status + Notification Bell */}
        <div className="flex items-center gap-3">
          {/* Notification Bell */}
          <NotificationBell />

          {/* Quick Demo System Role Switcher (Student vs Admin) */}
          <div className="hidden lg:flex items-center bg-[#12151C] p-1 rounded-xl border border-[#242834] text-xs">
            <span className="px-2 text-[#6E6B65] font-medium text-[10px]" title="Demo Mode is for hackathon presentation. In production, authentication uses standard OAuth 2.0 RBAC.">
              Demo Mode:
            </span>
            <button
              onClick={() => switchSystemRole('student')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                systemRole === 'student'
                  ? 'bg-[#FFB020] text-[#0B0E14] shadow-sm'
                  : 'text-[#A8A5A0] hover:text-[#F2F0EB]'
              }`}
              title="Switch to Student view"
            >
              Student Tab
            </button>
            <button
              onClick={() => switchSystemRole('admin')}
              className={`px-2.5 py-1 rounded-lg font-bold transition-all text-[11px] ${
                systemRole === 'admin'
                  ? 'bg-[#FF6B4A] text-[#0B0E14] shadow-sm'
                  : 'text-[#A8A5A0] hover:text-[#F2F0EB]'
              }`}
              title="Switch to Admin view"
            >
              Admin Tab
            </button>
          </div>

          {role === 'poster' && systemRole !== 'admin' && (
            <Link
              to="/create-problem"
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1 shadow-md shadow-[#FFB020]/20"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              Post Problem
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-[#242834]">
              <img
                src={user.avatarUrl || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150'}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-[#FFB020]/40 object-cover"
              />
              <div className="hidden sm:block text-left">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-bold text-[#F2F0EB] leading-tight">{user.name}</p>

                  {/* Verification Status Badge */}
                  {systemRole === 'admin' ? (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-[#FF6B4A]/20 text-[#FF6B4A] border border-[#FF6B4A]/40 flex items-center gap-1">
                      <ShieldCheck className="w-2.5 h-2.5" /> Admin
                    </span>
                  ) : verificationStatus === 'approved' ? (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center gap-0.5" title="Verified Student">
                      <CheckCircle2 className="w-2.5 h-2.5" /> Verified Student
                    </span>
                  ) : verificationStatus === 'pending' ? (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/40 flex items-center gap-0.5" title="Verification Pending">
                      <Clock className="w-2.5 h-2.5" /> Pending
                    </span>
                  ) : verificationStatus === 'rejected' ? (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center gap-0.5" title="Verification Rejected">
                      <XCircle className="w-2.5 h-2.5" /> Rejected
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase bg-[#1A1E28] text-[#A8A5A0] border border-[#242834]">
                      Student
                    </span>
                  )}
                </div>
                <p className="text-[10px] font-medium text-[#A8A5A0] truncate max-w-[130px]">
                  {systemRole === 'admin' ? 'System Administrator' : user.collegeName || 'ProofLoop Student'}
                </p>
              </div>

              <button
                onClick={logout}
                className="p-1.5 text-[#A8A5A0] hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors ml-1"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/onboarding"
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#FFB020] text-[#0B0E14]"
              >
                Welcome Onboarding
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
