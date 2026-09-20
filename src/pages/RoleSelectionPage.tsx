import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, ShieldCheck, ArrowRight, Workflow, Sparkles } from 'lucide-react';

export const RoleSelectionPage: React.FC = () => {
  const { switchSystemRole } = useAuth();
  const navigate = useNavigate();

  const handleSelectRole = (role: 'student' | 'admin') => {
    switchSystemRole(role);
    if (role === 'admin') {
      navigate('/admin');
    } else {
      navigate('/verify-student');
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB020]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl w-full space-y-10 relative z-10 text-center">
        {/* Header */}
        <div className="space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-amber p-0.5 mx-auto shadow-xl shadow-[#FFB020]/25 flex items-center justify-center">
            <div className="w-full h-full bg-[#0B0E14] rounded-[14px] flex items-center justify-center">
              <Workflow className="w-8 h-8 text-[#FFB020]" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFB020]/10 text-[#FFB020] border border-[#FFB020]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>Official Identity & Roles Onboarding</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#F2F0EB] tracking-tight">
            Welcome to <span className="text-gradient-amber">ProofLoop</span>
          </h1>

          <p className="text-[#A8A5A0] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Connect real-world problems with student builders and verified impact.
          </p>
        </div>

        {/* Role Selection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          {/* Card 1: Student */}
          <div className="glass-card rounded-3xl p-8 bg-[#12151C] border border-[#242834] hover:border-[#FFB020]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap className="w-32 h-32 text-[#FFB020]" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#FFB020]/15 border border-[#FFB020]/30 flex items-center justify-center shadow-md">
                <GraduationCap className="w-7 h-7 text-[#FFB020]" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FFB020] block mb-1">
                  Primary Builder Role
                </span>
                <h2 className="font-display text-2xl font-extrabold text-[#F2F0EB] group-hover:text-[#FFB020] transition-colors">
                  Student Builder
                </h2>
                <p className="text-xs text-[#A8A5A0] leading-relaxed mt-2">
                  Verify college ID, claim real-world problems, build solutions, log build progress, and submit proof of work.
                </p>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <button
                onClick={() => handleSelectRole('student')}
                className="w-full py-4 rounded-2xl text-xs font-extrabold btn-primary flex items-center justify-center gap-2 shadow-lg shadow-[#FFB020]/20 group-hover:shadow-[#FFB020]/40 transition-all"
              >
                Continue as Student <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Admin */}
          <div className="glass-card rounded-3xl p-8 bg-[#12151C] border border-[#242834] hover:border-[#FF6B4A]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-32 h-32 text-[#FF6B4A]" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 flex items-center justify-center shadow-md">
                <ShieldCheck className="w-7 h-7 text-[#FF6B4A]" />
              </div>

              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B4A] block mb-1">
                  Governance & Overseer
                </span>
                <h2 className="font-display text-2xl font-extrabold text-[#F2F0EB] group-hover:text-[#FF6B4A] transition-colors">
                  Admin & Problem Poster
                </h2>
                <p className="text-xs text-[#A8A5A0] leading-relaxed mt-2">
                  Post real-world problems, verify student identities, review submitted proof of work, and oversee platform governance.
                </p>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <button
                onClick={() => handleSelectRole('admin')}
                className="w-full py-4 rounded-2xl text-xs font-extrabold bg-[#FF6B4A] text-[#0B0E14] hover:bg-[#ff7b5d] flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B4A]/20 group-hover:shadow-[#FF6B4A]/40 transition-all"
              >
                Continue as Admin <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-[#6E6B65]">
          ProofLoop Role & Identity Verification • Built for Hackathons & University Orgs
        </p>
      </div>
    </div>
  );
};
