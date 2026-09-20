import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Problem } from '../types';
import { fetchProblems } from '../services/api';
import { ProblemCard } from '../components/ProblemCard';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Sparkles, 
  FolderGit2
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, role, switchDemoRole } = useAuth();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchProblems();
        setProblems(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="font-display text-2xl font-bold text-[#F2F0EB]">Please log in to view your dashboard</h2>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => switchDemoRole('poster')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold btn-primary"
          >
            Demo as Problem Poster
          </button>
          <button
            onClick={() => switchDemoRole('builder')}
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FF6B4A] text-[#0B0E14]"
          >
            Demo as Student Builder
          </button>
        </div>
      </div>
    );
  }

  const myPostedProblems = problems.filter((p) => p.posterId === user.id);
  const myClaimedProblems = problems.filter((p) => p.claimedBy === user.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Profile Banner */}
      <div className="glass-card rounded-3xl p-8 bg-gradient-to-r from-[#12151C] via-[#1A1E28] to-[#12151C] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-[#242834]">
        <div className="flex items-center gap-4">
          <img
            src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'}
            alt={user.name}
            className="w-16 h-16 rounded-2xl border-2 border-[#FFB020]/60 object-cover shadow-lg"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-black text-[#F2F0EB]">{user.name}</h1>
              <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30">
                {role === 'poster' ? 'Problem Poster' : 'Student Builder'}
              </span>
            </div>
            <p className="text-xs text-[#A8A5A0] mt-1">{user.email}</p>
            {user.bio && <p className="text-xs text-[#A8A5A0] italic mt-1">{user.bio}</p>}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-3">
          {role === 'poster' ? (
            <Link
              to="/create-problem"
              className="px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md shadow-[#FFB020]/20"
            >
              <PlusCircle className="w-4 h-4" /> Post New Problem
            </Link>
          ) : (
            <Link
              to="/problems"
              className="px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-4 h-4" /> Claim Open Problems
            </Link>
          )}
        </div>
      </div>

      {/* Role Dashboard Sections */}
      {role === 'poster' ? (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-[#F2F0EB] flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-[#FFB020]" /> My Posted Problems ({myPostedProblems.length})
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((n) => (
                <div key={n} className="h-48 rounded-2xl bg-[#12151C] animate-pulse border border-[#242834]" />
              ))}
            </div>
          ) : myPostedProblems.length === 0 ? (
            <div className="p-10 rounded-2xl bg-[#12151C] border border-[#242834] text-center space-y-3">
              <p className="text-sm text-[#F2F0EB] font-semibold">You haven't posted any problems yet.</p>
              <Link
                to="/create-problem"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold btn-primary"
              >
                <PlusCircle className="w-4 h-4" /> Submit First Problem
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myPostedProblems.map((prob) => (
                <ProblemCard key={prob.id} problem={prob} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-[#F2F0EB] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFB020]" /> My Claimed Projects ({myClaimedProblems.length})
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((n) => (
                <div key={n} className="h-48 rounded-2xl bg-[#12151C] animate-pulse border border-[#242834]" />
              ))}
            </div>
          ) : myClaimedProblems.length === 0 ? (
            <div className="p-10 rounded-2xl bg-[#12151C] border border-[#242834] text-center space-y-3">
              <p className="text-sm text-[#F2F0EB] font-semibold">You haven't claimed any problems yet.</p>
              <Link
                to="/problems"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold btn-primary"
              >
                <Sparkles className="w-4 h-4" /> Browse & Claim a Problem
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myClaimedProblems.map((prob) => (
                <ProblemCard key={prob.id} problem={prob} isBuilder={true} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
