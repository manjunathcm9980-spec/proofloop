import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  PlusCircle, 
  LayoutDashboard, 
  Sparkles, 
  LogOut, 
  Workflow
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, role, logout, switchDemoRole } = useAuth();
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
            className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
              isActive('/problems')
                ? 'bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]'
                : 'text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60'
            }`}
          >
            Browse Problems
          </Link>
          <Link
            to="/wall"
            className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
              isActive('/wall')
                ? 'bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]'
                : 'text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FFB020]" />
            Proof Wall
          </Link>
          {user && (
            <Link
              to="/dashboard"
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive('/dashboard')
                  ? 'bg-[#12151C] text-[#FFB020] font-semibold border border-[#242834]'
                  : 'text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C]/60'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </Link>
          )}
        </nav>

        {/* Right CTA Group: Role Switcher + Post Problem Button */}
        <div className="flex items-center gap-3">
          {/* Demo Role Switcher Toggle */}
          <div className="hidden lg:flex items-center bg-[#12151C] p-1 rounded-xl border border-[#242834] text-xs">
            <span className="px-2 text-[#6E6B65] font-medium text-[11px]">Role:</span>
            <button
              onClick={() => switchDemoRole('poster')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                role === 'poster'
                  ? 'bg-[#FFB020] text-[#0B0E14] font-bold shadow-sm'
                  : 'text-[#A8A5A0] hover:text-[#F2F0EB]'
              }`}
              title="Switch to Problem Poster role"
            >
              Poster
            </button>
            <button
              onClick={() => switchDemoRole('builder')}
              className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                role === 'builder'
                  ? 'bg-[#FF6B4A] text-[#0B0E14] font-bold shadow-sm'
                  : 'text-[#A8A5A0] hover:text-[#F2F0EB]'
              }`}
              title="Switch to Student Builder role"
            >
              Builder
            </button>
          </div>

          {role === 'poster' && (
            <Link
              to="/create-problem"
              className="px-4 py-2 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md shadow-[#FFB020]/20"
            >
              <PlusCircle className="w-4 h-4" />
              Post Problem
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-2 pl-2 border-l border-[#242834]">
              <img
                src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
                alt={user.name}
                className="w-8 h-8 rounded-full border border-[#FFB020]/40 object-cover"
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-semibold text-[#F2F0EB] leading-tight">{user.name}</p>
                <p className="text-[10px] font-medium text-[#FFB020] capitalize">
                  {user.role === 'poster' ? 'Problem Poster' : 'Student Builder'}
                </p>
              </div>
              <button
                onClick={logout}
                className="p-1.5 text-[#A8A5A0] hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-3 py-1.5 text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#12151C] hover:bg-[#1A1E28] text-[#F2F0EB] border border-[#242834]"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
