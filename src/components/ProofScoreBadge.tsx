import React from 'react';
import { Award, CheckCircle2, Circle, ShieldCheck } from 'lucide-react';
import { calculateProofScore } from '../services/projectProofStore';
import { ProjectProofSubmission } from '../types';

export interface ProofScoreBadgeProps {
  submission?: Partial<ProjectProofSubmission>;
  scoreBreakdown?: {
    totalScore: number;
    breakdown: {
      studentIdentity: number;
      githubRepo: number;
      liveProject: number;
      demoVideo: number;
      adminVerification: number;
    };
  };
  isStudentVerified?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ProofScoreBadge: React.FC<ProofScoreBadgeProps> = ({
  submission,
  scoreBreakdown,
  isStudentVerified,
  size = 'md',
  className = '',
}) => {
  const calculated = scoreBreakdown || calculateProofScore(submission || {}, isStudentVerified);
  const { totalScore, breakdown } = calculated;

  const getScoreColor = () => {
    if (totalScore >= 90) return 'text-emerald-400 border-emerald-500/40 bg-emerald-500/15';
    if (totalScore >= 70) return 'text-[#FFB020] border-[#FFB020]/40 bg-[#FFB020]/15';
    return 'text-amber-400 border-amber-500/40 bg-amber-500/15';
  };

  return (
    <div className={`glass-card rounded-2xl p-4 sm:p-5 bg-[#0B0E14] border border-[#242834] space-y-3 shadow-xl ${className}`}>
      <div className="flex items-center justify-between border-b border-[#242834] pb-3 gap-3">
        <div className="flex items-center gap-2">
          <Award className={`text-[#FFB020] ${size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`} />
          <div>
            <span className="text-[10px] uppercase font-bold text-[#A8A5A0] tracking-widest block">
              Impact Verification Metric
            </span>
            <h4 className={`font-display font-extrabold text-[#F2F0EB] ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
              PROOF SCORE
            </h4>
          </div>
        </div>

        <div className={`px-3 py-1.5 rounded-xl text-xs font-black tracking-wider border shadow-md flex items-center gap-1.5 ${getScoreColor()}`}>
          <ShieldCheck className="w-4 h-4" />
          <span>{totalScore} / 100</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 rounded-full bg-[#12151C] border border-[#242834] overflow-hidden p-0.5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#FFB020] via-emerald-400 to-emerald-300 transition-all duration-700 shadow-md"
          style={{ width: `${totalScore}%` }}
        />
      </div>

      {/* Proof Score Criteria Breakdown Checklist */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
        <div className="flex items-center gap-2 text-[#A8A5A0]">
          {breakdown.studentIdentity > 0 ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          ) : (
            <Circle className="w-3.5 h-3.5 text-[#6E6B65] shrink-0" />
          )}
          <span className={breakdown.studentIdentity > 0 ? 'text-[#F2F0EB] font-medium' : 'text-[#6E6B65]'}>
            Student identity verified (+20)
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#A8A5A0]">
          {breakdown.githubRepo > 0 ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          ) : (
            <Circle className="w-3.5 h-3.5 text-[#6E6B65] shrink-0" />
          )}
          <span className={breakdown.githubRepo > 0 ? 'text-[#F2F0EB] font-medium' : 'text-[#6E6B65]'}>
            GitHub repository (+20)
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#A8A5A0]">
          {breakdown.liveProject > 0 ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          ) : (
            <Circle className="w-3.5 h-3.5 text-[#6E6B65] shrink-0" />
          )}
          <span className={breakdown.liveProject > 0 ? 'text-[#F2F0EB] font-medium' : 'text-[#6E6B65]'}>
            Live project demo (+20)
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#A8A5A0]">
          {breakdown.demoVideo > 0 ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          ) : (
            <Circle className="w-3.5 h-3.5 text-[#6E6B65] shrink-0" />
          )}
          <span className={breakdown.demoVideo > 0 ? 'text-[#F2F0EB] font-medium' : 'text-[#6E6B65]'}>
            Demo video provided (+15)
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#A8A5A0] sm:col-span-2">
          {breakdown.adminVerification > 0 ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          ) : (
            <Circle className="w-3.5 h-3.5 text-[#6E6B65] shrink-0" />
          )}
          <span className={breakdown.adminVerification > 0 ? 'text-emerald-400 font-bold' : 'text-[#6E6B65]'}>
            Admin project verification (+25)
          </span>
        </div>
      </div>
    </div>
  );
};
