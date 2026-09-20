import React from 'react';
import { ProblemStatus, ProofStatus, ProblemUrgency } from '../types';
import { CheckCircle2, Clock, AlertTriangle, Flame, ShieldAlert, Sparkles } from 'lucide-react';

interface StatusBadgeProps {
  type: 'problem' | 'proof' | 'urgency';
  value: ProblemStatus | ProofStatus | ProblemUrgency | string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ type, value }) => {
  if (type === 'problem') {
    switch (value) {
      case 'open':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold badge-open">
            <Clock className="w-3.5 h-3.5" />
            Open for Claim
          </span>
        );
      case 'claimed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold badge-claimed">
            <Sparkles className="w-3.5 h-3.5" />
            Claimed
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold badge-in-progress">
            <Clock className="w-3.5 h-3.5" />
            In Progress
          </span>
        );
      case 'solved':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold badge-solved">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Validated & Solved
          </span>
        );
      default:
        return null;
    }
  }

  if (type === 'proof') {
    switch (value) {
      case 'pending':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30">
            <Clock className="w-3.5 h-3.5" />
            Pending Review
          </span>
        );
      case 'validated':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Validated Solution
          </span>
        );
      case 'rejected':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30">
            <AlertTriangle className="w-3.5 h-3.5" />
            Needs Revisions
          </span>
        );
      default:
        return null;
    }
  }

  if (type === 'urgency') {
    switch (value) {
      case 'Critical':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
            <Flame className="w-3 h-3" /> Critical
          </span>
        );
      case 'High':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
            <ShieldAlert className="w-3 h-3" /> High Urgency
          </span>
        );
      case 'Medium':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-medium bg-blue-500/15 text-blue-400 border border-blue-500/30">
            Medium
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-xs font-medium bg-[#1A1E28] text-[#A8A5A0] border border-[#242834]">
            Low
          </span>
        );
    }
  }

  return null;
};
