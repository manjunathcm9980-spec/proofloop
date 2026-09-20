import React, { useEffect } from 'react';
import { Target, X, CheckCircle2, Sparkles, Send } from 'lucide-react';

interface ClaimProblemModalProps {
  problemTitle: string;
  studentName: string;
  collegeName: string;
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  onConfirm: () => void;
  onClose: () => void;
}

export const ClaimProblemModal: React.FC<ClaimProblemModalProps> = ({
  problemTitle,
  studentName,
  collegeName,
  matchPercentage,
  matchedSkills,
  missingSkills,
  onConfirm,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[999] bg-[#0B0E14] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-lg p-6 sm:p-8 relative space-y-6 shadow-2xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#A8A5A0] hover:text-[#F2F0EB] bg-[#1A1E28] p-2 rounded-xl border border-[#242834]"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 pr-8">
          <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Project Claim Request
          </span>
          <h3 className="font-display text-2xl font-extrabold text-[#F2F0EB]">
            Claim This Problem?
          </h3>
          <p className="text-xs text-[#A8A5A0]">
            You are requesting to become the student builder for this problem.
          </p>
        </div>

        {/* Claim Details Card */}
        <div className="p-5 rounded-2xl bg-[#0B0E14] border border-[#242834] space-y-4 text-xs">
          <div>
            <span className="text-[#A8A5A0] text-[10px] uppercase font-bold block mb-0.5">Problem</span>
            <span className="font-bold text-[#F2F0EB] text-sm leading-snug block">{problemTitle}</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#242834]">
            <div>
              <span className="text-[#A8A5A0] text-[10px] uppercase font-bold block mb-0.5">Student Builder</span>
              <span className="font-bold text-[#FFB020]">{studentName}</span>
              <span className="text-[#6E6B65] text-[10px] block truncate">{collegeName}</span>
            </div>

            <div>
              <span className="text-[#A8A5A0] text-[10px] uppercase font-bold block mb-0.5">Skill Match</span>
              <span className="font-extrabold text-emerald-400 text-sm flex items-center gap-1">
                <Target className="w-4 h-4 text-emerald-400" /> {matchPercentage}% Match
              </span>
            </div>
          </div>

          {/* Matched Skills */}
          <div className="space-y-1.5 pt-2 border-t border-[#242834]">
            <span className="text-[#A8A5A0] text-[10px] font-bold uppercase block">Matched Skills ({matchedSkills.length})</span>
            <div className="flex flex-wrap gap-1">
              {matchedSkills.map((sk, i) => (
                <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  ✓ {sk}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          {missingSkills.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[#A8A5A0] text-[10px] font-bold uppercase block">Missing Skills ({missingSkills.length})</span>
              <div className="flex flex-wrap gap-1">
                {missingSkills.map((sk, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#1A1E28] text-[#A8A5A0] border border-[#242834]">
                    • {sk}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Informational Message */}
        <div className="p-3.5 rounded-xl bg-[#1A1E28] border border-[#242834] text-xs text-[#A8A5A0] flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#FFB020] shrink-0" />
          <span>Submitting will send your claim request to the administrator for review.</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#A8A5A0] hover:text-[#F2F0EB] border border-[#242834]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="px-6 py-2.5 rounded-xl text-xs font-extrabold btn-primary flex items-center gap-1.5 shadow-lg shadow-[#FFB020]/20"
          >
            <Send className="w-3.5 h-3.5" /> Submit Claim Request
          </button>
        </div>
      </div>
    </div>
  );
};
