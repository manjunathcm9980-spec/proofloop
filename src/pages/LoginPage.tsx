import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { Workflow, Sparkles, ArrowRight } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login, switchDemoRole } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('builder');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    login(email, role);
    navigate('/dashboard');
  };

  const handleDemoSelect = (selectedRole: UserRole) => {
    switchDemoRole(selectedRole);
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16 space-y-8">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-gradient-amber p-0.5 mx-auto mb-4 shadow-lg shadow-[#FFB020]/20">
          <div className="w-full h-full bg-[#0B0E14] rounded-[14px] flex items-center justify-center">
            <Workflow className="w-6 h-6 text-[#FFB020]" />
          </div>
        </div>
        <h1 className="font-display text-2xl font-extrabold text-[#F2F0EB]">Log in to ProofLoop</h1>
        <p className="text-xs text-[#A8A5A0]">Amazon Cognito User Pool Authenticated</p>
      </div>

      {/* Quick Demo Pre-fills */}
      <div className="p-4 rounded-2xl bg-[#12151C] border border-[#242834] space-y-2">
        <span className="text-xs font-bold text-[#FFB020] flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Quick Demo Session Switcher:
        </span>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleDemoSelect('poster')}
            className="p-3 rounded-xl bg-[#0B0E14] border border-[#242834] text-left hover:border-[#FFB020]/50 transition-colors"
          >
            <p className="text-xs font-bold text-[#F2F0EB]">Sarah Lin</p>
            <p className="text-[10px] text-[#FFB020] font-semibold">Problem Poster</p>
          </button>

          <button
            onClick={() => handleDemoSelect('builder')}
            className="p-3 rounded-xl bg-[#0B0E14] border border-[#242834] text-left hover:border-[#FF6B4A]/50 transition-colors"
          >
            <p className="text-xs font-bold text-[#F2F0EB]">Alex Rivera</p>
            <p className="text-[10px] text-[#FF6B4A] font-semibold">Student Builder</p>
          </button>
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6 space-y-4 border border-[#242834]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Select Role *</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('poster')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                  role === 'poster'
                    ? 'bg-[#FFB020] text-[#0B0E14] shadow-md'
                    : 'bg-[#0B0E14] text-[#A8A5A0] border border-[#242834]'
                }`}
              >
                Problem Poster
              </button>
              <button
                type="button"
                onClick={() => setRole('builder')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                  role === 'builder'
                    ? 'bg-[#FF6B4A] text-[#0B0E14] shadow-md'
                    : 'bg-[#0B0E14] text-[#A8A5A0] border border-[#242834]'
                }`}
              >
                Student Builder
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-2.5 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-2.5 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-xs font-extrabold btn-primary flex items-center justify-center gap-1.5 shadow-md shadow-[#FFB020]/20"
          >
            Log In <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-[#A8A5A0]">
          Don't have an account?{' '}
          <Link to="/signup" className="text-[#FFB020] hover:underline font-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
