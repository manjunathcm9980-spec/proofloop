import React from 'react';
import { Target, CheckCircle2, AlertTriangle, Sparkles, HelpCircle } from 'lucide-react';

interface SkillMatchCardProps {
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  reason: string;
  className?: string;
}

export const SkillMatchCard: React.FC<SkillMatchCardProps> = ({
  matchPercentage,
  matchedSkills,
  missingSkills,
  reason,
  className = '',
}) => {
  // Color coding based on percentage
  const getBadgeStyle = () => {
    if (matchPercentage >= 80) return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
    if (matchPercentage >= 50) return 'bg-[#FFB020]/15 text-[#FFB020] border-[#FFB020]/30';
    return 'bg-amber-500/15 text-amber-400 border-amber-500/30';
  };

  const getProgressColor = () => {
    if (matchPercentage >= 80) return 'from-emerald-400 to-[#FFB020]';
    if (matchPercentage >= 50) return 'from-[#FFB020] to-[#FF6B4A]';
    return 'from-amber-400 to-rose-400';
  };

  return (
    <div className={`glass-card rounded-2xl p-6 bg-[#12151C] border border-[#242834] space-y-4 relative overflow-hidden shadow-xl ${className}`}>
      {/* Header Badge & Match Score */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#242834] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#FFB020]/15 border border-[#FFB020]/30 flex items-center justify-center">
            <Target className="w-4 h-4 text-[#FFB020]" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFB020] block">
              Student Skill Match
            </span>
            <h4 className="font-display text-sm font-extrabold text-[#F2F0EB]">
              Profile Skills vs Required Skills
            </h4>
          </div>
        </div>

        <div className={`px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider border flex items-center gap-1.5 shadow-sm ${getBadgeStyle()}`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{matchPercentage}% Match</span>
        </div>
      </div>

      {/* Visual Dynamic Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-[11px] font-semibold text-[#A8A5A0]">
          <span>Match Compatibility Ratio</span>
          <span className="text-[#F2F0EB] font-bold">{matchPercentage}%</span>
        </div>
        <div className="w-full h-3 rounded-full bg-[#0B0E14] border border-[#242834] overflow-hidden p-0.5">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${getProgressColor()} transition-all duration-700 shadow-md`}
            style={{ width: `${Math.max(8, matchPercentage)}%` }}
          />
        </div>
      </div>

      {/* Matched & Missing Skills Lists */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
        {/* Matched Skills */}
        <div className="space-y-2 bg-[#0B0E14] p-3.5 rounded-xl border border-[#242834]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Matched Skills ({matchedSkills.length})
          </span>
          {matchedSkills.length === 0 ? (
            <p className="text-[11px] text-[#6E6B65] italic">No overlapping skills detected yet.</p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {matchedSkills.map((sk, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  ✓ {sk}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Missing Skills */}
        <div className="space-y-2 bg-[#0B0E14] p-3.5 rounded-xl border border-[#242834]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8A5A0] flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" /> Missing Skills ({missingSkills.length})
          </span>
          {missingSkills.length === 0 ? (
            <p className="text-[11px] text-emerald-400 font-semibold">✓ 100% Complete Skill Match!</p>
          ) : (
            <div className="flex flex-wrap gap-1.5">
              {missingSkills.map((sk, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-lg text-[11px] font-medium bg-[#1A1E28] text-[#A8A5A0] border border-[#242834] flex items-center gap-1">
                  • {sk}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Why This Matches You explanation */}
      <div className="p-3 rounded-xl bg-[#1A1E28] border border-[#242834] flex items-start gap-2 text-xs text-[#A8A5A0]">
        <HelpCircle className="w-4 h-4 text-[#FFB020] shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-[#F2F0EB] block text-[11px] mb-0.5">Why this matches you:</span>
          <span>{reason}</span>
        </div>
      </div>
    </div>
  );
};
