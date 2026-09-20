import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Problem, ProblemClaimRequest } from '../types';
import { fetchProblems } from '../services/api';
import { getClaimsByStudentId, subscribeClaimStore, AVAILABLE_SKILLS } from '../services/claimStore';
import { ProblemCard } from '../components/ProblemCard';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Sparkles, 
  FolderGit2,
  CheckCircle2,
  Clock,
  ArrowRight,
  Code2,
  Plus,
  X,
  Target
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { user, role, switchDemoRole } = useAuth();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [studentClaims, setStudentClaims] = useState<ProblemClaimRequest[]>([]);

  // Student Skills Management
  const [userSkills, setUserSkills] = useState<string[]>(() => user?.skills || ['React', 'TypeScript', 'Node.js', 'Database', 'AWS']);
  const [newSkillInput, setNewSkillInput] = useState('');

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

  // Sync Student Claims live
  useEffect(() => {
    if (!user) return;
    const syncClaims = () => {
      const claims = getClaimsByStudentId(user.id).concat(getClaimsByStudentId(user.email));
      setStudentClaims(claims);
    };
    syncClaims();
    const unsubscribe = subscribeClaimStore(syncClaims);
    return () => unsubscribe();
  }, [user?.id, user?.email]);

  const handleAddSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !userSkills.includes(trimmed)) {
      const updated = [...userSkills, trimmed];
      setUserSkills(updated);
      if (user) user.skills = updated;
      setNewSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updated = userSkills.filter(s => s !== skillToRemove);
    setUserSkills(updated);
    if (user) user.skills = updated;
  };

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
  const approvedClaims = studentClaims.filter(c => c.status === 'approved');
  const pendingClaims = studentClaims.filter(c => c.status === 'pending');

  const myClaimedProblems = problems.filter((p) => 
    p.claimedBy === user.id || approvedClaims.some(c => c.problemId === p.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Profile Banner */}
      <div className="glass-card rounded-3xl p-8 bg-gradient-to-r from-[#12151C] via-[#1A1E28] to-[#12151C] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-[#242834]">
        <div className="flex items-center gap-4">
          <img
            src={user.avatarUrl || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150'}
            alt={user.name}
            className="w-16 h-16 rounded-2xl border-2 border-[#FFB020]/60 object-cover shadow-lg"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-black text-[#F2F0EB]">{user.name}</h1>
              <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30">
                {user.collegeName || (role === 'poster' ? 'Problem Poster' : 'Verified Student Builder')}
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
              <Sparkles className="w-4 h-4" /> Browse Open Problems
            </Link>
          )}
        </div>
      </div>

      {/* STUDENT SKILLS MANAGEMENT SECTION */}
      <div className="glass-card rounded-3xl p-6 bg-[#12151C] border border-[#242834] space-y-4">
        <div className="flex items-center justify-between border-b border-[#242834] pb-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#FFB020]" />
            <div>
              <h2 className="font-display text-lg font-bold text-[#F2F0EB]">Your Profile Skills</h2>
              <p className="text-xs text-[#A8A5A0]">Used for real-time problem skill matching percentages.</p>
            </div>
          </div>
        </div>

        {/* Selected Skills Tags */}
        <div className="flex flex-wrap gap-2">
          {userSkills.map((sk, i) => (
            <span
              key={i}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 flex items-center gap-1.5 shadow-sm"
            >
              {sk}
              <button
                type="button"
                onClick={() => handleRemoveSkill(sk)}
                className="text-[#FFB020] hover:text-rose-400 ml-1"
                title="Remove skill"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}
        </div>

        {/* Add Skill Dropdown / Custom Input */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              value={newSkillInput}
              onChange={(e) => setNewSkillInput(e.target.value)}
              placeholder="Add skill (e.g. Docker, GraphQL)..."
              className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl px-3.5 py-2 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            />
          </div>

          <button
            type="button"
            onClick={() => handleAddSkill(newSkillInput)}
            disabled={!newSkillInput.trim()}
            className="px-4 py-2 rounded-xl text-xs font-bold btn-primary flex items-center gap-1 disabled:opacity-50"
          >
            <Plus className="w-3.5 h-3.5" /> Add Skill
          </button>

          {/* Quick Preset Buttons */}
          <div className="hidden md:flex items-center gap-1 pl-2">
            <span className="text-[10px] text-[#6E6B65] font-semibold">Quick add:</span>
            {AVAILABLE_SKILLS.filter(s => !userSkills.includes(s)).slice(0, 4).map((sk, i) => (
              <button
                key={i}
                onClick={() => handleAddSkill(sk)}
                className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-[#1A1E28] hover:bg-[#242834] text-[#A8A5A0] hover:text-[#F2F0EB] border border-[#242834]"
              >
                + {sk}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ACTIVE PROJECT SECTION (WHEN APPROVED BY ADMIN) */}
      {approvedClaims.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <h2 className="font-display text-2xl font-extrabold text-[#F2F0EB]">MY ACTIVE PROJECT</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {approvedClaims.map((claim) => (
              <div
                key={claim.id}
                className="glass-card rounded-3xl p-8 bg-gradient-to-r from-[#12151C] via-[#1A1E28] to-[#12151C] border-2 border-emerald-500/40 shadow-2xl space-y-6 relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#242834] pb-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> 🟢 Assigned Project
                  </span>

                  <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" /> {claim.matchPercentage}% Skill Match
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-3">
                    <h3 className="font-display text-2xl font-extrabold text-[#F2F0EB]">
                      {claim.problemTitle}
                    </h3>
                    <p className="text-xs text-[#A8A5A0]">
                      Assigned Builder: <strong className="text-[#FFB020]">{claim.studentName}</strong> ({claim.collegeName})
                    </p>

                    <div className="flex items-center gap-4 text-xs pt-1">
                      <span className="text-[#A8A5A0]">Project Status: <strong className="text-emerald-400 font-bold">In Progress</strong></span>
                      <span>•</span>
                      <span className="text-[#A8A5A0]">Progress: <strong className="text-[#F2F0EB]">25%</strong></span>
                    </div>
                  </div>

                  <div className="md:col-span-4 flex justify-end">
                    <Link
                      to={`/problems/${claim.problemId}`}
                      className="px-6 py-4 rounded-2xl text-xs font-extrabold btn-primary flex items-center gap-2 shadow-xl shadow-[#FFB020]/20 w-full sm:w-auto justify-center"
                    >
                      Open Active Project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PENDING CLAIMS SECTION */}
      {pendingClaims.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-[#F2F0EB] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#FFB020]" /> Pending Claim Requests ({pendingClaims.length})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pendingClaims.map((claim) => (
              <div key={claim.id} className="p-5 rounded-2xl bg-[#12151C] border border-[#FFB020]/40 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#F2F0EB] truncate max-w-xs">{claim.problemTitle}</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30">
                    🟠 Claim Pending
                  </span>
                </div>
                <p className="text-[#A8A5A0] text-[11px]">Submitted on {new Date(claim.submittedAt).toLocaleTimeString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}

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
              <Sparkles className="w-5 h-5 text-[#FFB020]" /> My Claimed & Active Projects ({myClaimedProblems.length})
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
