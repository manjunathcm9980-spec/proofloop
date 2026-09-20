import React, { useEffect, useState } from 'react';
import { Problem, ProblemCategory, ProblemStatus } from '../types';
import { fetchProblems, claimProblem } from '../services/api';
import { ProblemCard } from '../components/ProblemCard';
import { StatusBadge } from '../components/StatusBadge';
import { useAuth } from '../context/AuthContext';
import { Search, Filter, Sparkles, AlertCircle, PlusCircle, Flame, ArrowRight, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES: (ProblemCategory | 'All')[] = [
  'All',
  'Non-Profit',
  'Small Business',
  'Community',
  'Education',
  'Developer Tools',
  'Other',
];

const STATUSES: { label: string; value: ProblemStatus | 'All' }[] = [
  { label: 'All Problems', value: 'All' },
  { label: 'Open for Claim', value: 'open' },
  { label: 'Claimed', value: 'claimed' },
  { label: 'In Progress', value: 'in_progress' },
  { label: 'Solved', value: 'solved' },
];

export const ProblemsPage: React.FC = () => {
  const { user, role } = useAuth();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<ProblemCategory | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<ProblemStatus | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const loadProblems = async () => {
    try {
      setLoading(true);
      const data = await fetchProblems({
        category: selectedCategory,
        status: selectedStatus,
        search: searchQuery,
      });
      setProblems(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProblems();
  }, [selectedCategory, selectedStatus, searchQuery]);

  const handleClaim = async (problemId: string) => {
    if (!user) {
      alert('Please log in as a Student Builder to claim a problem.');
      return;
    }
    try {
      await claimProblem(problemId, user.id, user.name);
      setNotification('🎉 Problem claimed successfully! Added to your Builder Dashboard.');
      setTimeout(() => setNotification(null), 4000);
      loadProblems();
    } catch (err: any) {
      alert(err.message || 'Failed to claim problem');
    }
  };

  const featuredProblem = problems.length > 0 ? problems[0] : null;
  const remainingProblems = problems.length > 1 ? problems.slice(1) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#242834]">
        <div>
          <h1 className="font-display text-4xl font-extrabold text-[#F2F0EB]">Browse Real Problems</h1>
          <p className="text-[#A8A5A0] text-sm mt-1">
            Real operational problems submitted by local organizations, small businesses, and non-profits.
          </p>
        </div>

        {role === 'poster' && (
          <Link
            to="/create-problem"
            className="px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md shadow-[#FFB020]/20 w-fit"
          >
            <PlusCircle className="w-4 h-4" /> Post New Problem
          </Link>
        )}
      </div>

      {/* Toast Notification */}
      {notification && (
        <div className="p-4 rounded-xl bg-[#FFB020]/15 border border-[#FFB020]/30 text-[#FFB020] text-sm font-semibold flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FFB020]" />
          {notification}
        </div>
      )}

      {/* Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#A8A5A0] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, description, or organization..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#12151C] border border-[#242834] rounded-xl pl-11 pr-4 py-3 text-sm text-[#F2F0EB] placeholder-[#6E6B65] focus:border-[#FFB020] outline-none transition-colors"
            />
          </div>

          {/* Status Dropdown */}
          <div className="w-full md:w-56">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as any)}
              className="w-full bg-[#12151C] border border-[#242834] rounded-xl px-4 py-3 text-sm text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            >
              {STATUSES.map((st) => (
                <option key={st.value} value={st.value}>
                  {st.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-semibold text-[#6E6B65] mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Category:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#FFB020] text-[#0B0E14] font-bold shadow-sm'
                  : 'bg-[#12151C] text-[#A8A5A0] hover:text-[#F2F0EB] border border-[#242834]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured / Urgent Top Hero Card */}
      {featuredProblem && !loading && selectedCategory === 'All' && selectedStatus === 'All' && !searchQuery && (
        <div className="glass-card rounded-3xl p-8 border-2 border-[#FFB020]/40 bg-gradient-to-r from-[#12151C] via-[#1A1E28] to-[#12151C] space-y-6 shadow-xl relative overflow-hidden group">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> Featured Urgent Problem
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#1A1E28] text-[#FFB020] border border-[#242834]">
                {featuredProblem.category}
              </span>
            </div>
            <StatusBadge type="problem" value={featuredProblem.status} />
          </div>

          <div className="space-y-2">
            <Link to={`/problems/${featuredProblem.id}`}>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F2F0EB] group-hover:text-[#FFB020] transition-colors">
                {featuredProblem.title}
              </h2>
            </Link>
            <p className="text-xs text-[#A8A5A0] font-medium">
              Posted by <span className="text-[#F2F0EB] font-bold">{featuredProblem.posterName}</span> • Affects: {featuredProblem.whoAffected}
            </p>
          </div>

          <p className="text-[#A8A5A0] text-sm leading-relaxed max-w-4xl">
            {featuredProblem.description}
          </p>

          <div className="flex flex-wrap items-center justify-end gap-4 pt-4 border-t border-[#242834]">
            <div className="flex items-center gap-2">
              {featuredProblem.status === 'open' && role === 'builder' && (
                <button
                  onClick={() => handleClaim(featuredProblem.id)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md shadow-[#FFB020]/20"
                >
                  <Sparkles className="w-4 h-4" /> Claim Problem
                </button>
              )}
              <Link
                to={`/problems/${featuredProblem.id}`}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834] flex items-center gap-1"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Problems Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="h-64 rounded-2xl bg-[#12151C] animate-pulse border border-[#242834]" />
          ))}
        </div>
      ) : problems.length === 0 ? (
        <div className="p-14 rounded-3xl bg-[#12151C] border border-[#242834] text-center space-y-3">
          <AlertCircle className="w-10 h-10 text-[#6E6B65] mx-auto" />
          <h3 className="font-display text-lg font-bold text-[#F2F0EB]">No problems match your filters</h3>
          <p className="text-[#A8A5A0] text-xs max-w-md mx-auto">
            Try adjusting your search terms or select a different category filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(selectedCategory === 'All' && selectedStatus === 'All' && !searchQuery ? remainingProblems : problems).map((prob) => (
            <ProblemCard
              key={prob.id}
              problem={prob}
              onClaim={handleClaim}
              isBuilder={role === 'builder'}
              hideSkills={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};
