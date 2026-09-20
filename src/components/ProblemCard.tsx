import React from 'react';
import { Link } from 'react-router-dom';
import { Problem } from '../types';
import { StatusBadge } from './StatusBadge';
import { useAuth } from '../context/AuthContext';
import { getSkillMatch } from '../services/claimStore';
import { Users, ArrowRight, Calendar, Sparkles, Target } from 'lucide-react';

interface ProblemCardProps {
  problem: Problem;
  onClaim?: (problemId: string) => void;
  isBuilder?: boolean;
  hideSkills?: boolean;
}

const CATEGORY_STYLES: Record<string, string> = {
  'Non-Profit': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'Small Business': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Community': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Education': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'Developer Tools': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
  'Other': 'bg-slate-500/10 text-slate-400 border-slate-500/30',
};

export const ProblemCard: React.FC<ProblemCardProps> = ({ problem, onClaim, isBuilder }) => {
  const { user } = useAuth();
  const catStyle = CATEGORY_STYLES[problem.category] || CATEGORY_STYLES['Other'];

  const match = getSkillMatch(
    user?.skills || ['React', 'TypeScript', 'Node.js', 'Database', 'AWS'],
    problem.skillsNeeded
  );

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#FFB020]/10 hover:border-[#FFB020]/40 transition-all duration-300">
      <div>
        {/* Category Tag & Status Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border ${catStyle}`}>
            {problem.category}
          </span>

          <div className="flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <Target className="w-3 h-3 text-emerald-400" /> {match.matchPercentage}% Match
            </span>
            <StatusBadge type="urgency" value={problem.urgency} />
            <StatusBadge type="problem" value={problem.status} />
          </div>
        </div>

        {/* Title */}
        <Link to={`/problems/${problem.id}`}>
          <h3 className="font-display text-lg font-bold text-[#F2F0EB] group-hover:text-[#FFB020] transition-colors line-clamp-2 mb-2 leading-snug">
            {problem.title}
          </h3>
        </Link>

        {/* Poster & Impacted Audience */}
        <div className="flex items-center gap-2 text-xs text-[#A8A5A0] mb-3">
          <span className="font-semibold text-[#F2F0EB]">Posted by {problem.posterName}</span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#A8A5A0] truncate">
            <Users className="w-3.5 h-3.5 text-[#A8A5A0] shrink-0" />
            <span className="truncate">{problem.whoAffected}</span>
          </span>
        </div>

        {/* Description Snippet */}
        <p className="text-[#A8A5A0] text-sm line-clamp-3 mb-4 leading-relaxed font-normal">
          {problem.description}
        </p>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-[#242834] flex items-center justify-between mt-auto">
        <div className="text-[11px] text-[#6E6B65] flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {new Date(problem.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
        </div>

        <div className="flex items-center gap-2">
          {problem.status === 'open' && isBuilder && onClaim && (
            <button
              onClick={() => onClaim(problem.id)}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Claim
            </button>
          )}

          <Link
            to={`/problems/${problem.id}`}
            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] flex items-center gap-1 transition-colors border border-[#242834]"
          >
            Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
