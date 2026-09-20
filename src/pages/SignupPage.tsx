import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { Workflow, ArrowRight } from 'lucide-react';

export const SignupPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('builder');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    login(email, role, name);
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
        <h1 className="font-display text-2xl font-extrabold text-[#F2F0EB]">Create ProofLoop Account</h1>
        <p className="text-xs text-[#A8A5A0]">Join as a Problem Poster or Student Builder</p>
      </div>

      <div className="glass-card rounded-3xl p-6 space-y-4 border border-[#242834]">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1.5">Pick Your Role *</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('poster')}
                className={`p-3 rounded-xl text-left border transition-all ${
                  role === 'poster'
                    ? 'bg-[#FFB020]/15 text-[#FFB020] border-[#FFB020]'
                    : 'bg-[#0B0E14] text-[#A8A5A0] border-[#242834]'
                }`}
              >
                <p className="text-xs font-bold">Problem Poster</p>
                <p className="text-[10px] text-[#A8A5A0] mt-0.5">Person / Org with real problems</p>
              </button>

              <button
                type="button"
                onClick={() => setRole('builder')}
                className={`p-3 rounded-xl text-left border transition-all ${
                  role === 'builder'
                    ? 'bg-[#FF6B4A]/15 text-[#FF6B4A] border-[#FF6B4A]'
                    : 'bg-[#0B0E14] text-[#A8A5A0] border-[#242834]'
                }`}
              >
                <p className="text-xs font-bold">Student Builder</p>
                <p className="text-[10px] text-[#A8A5A0] mt-0.5">Wants to build real solutions</p>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1">Full Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Rivera"
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-4 py-2.5 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1">Email Address *</label>
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
            <label className="block text-xs font-bold text-[#F2F0EB] mb-1">Password *</label>
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
            Create Account <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-[#A8A5A0]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#FFB020] hover:underline font-bold">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};
