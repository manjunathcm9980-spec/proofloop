import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Problem, BuildLog, Proof, ProblemClaimRequest } from '../types';
import { fetchProblemById, claimProblem, addBuildLog, submitProof, validateProof } from '../services/api';
import { StatusBadge } from '../components/StatusBadge';
import { BuildLogTimeline } from '../components/BuildLogTimeline';
import { ImageUploadModal } from '../components/ImageUploadModal';
import { SkillMatchCard } from '../components/SkillMatchCard';
import { ClaimProblemModal } from '../components/ClaimProblemModal';
import { useAuth } from '../context/AuthContext';
import { 
  getSkillMatch, 
  getClaimByStudentAndProblem, 
  submitProblemClaim, 
  subscribeClaimStore 
} from '../services/claimStore';
import { 
  ArrowLeft, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  UserCheck, 
  Send,
  Upload,
  Eye,
  Handshake,
  Clock,
  Lock,
  GraduationCap
} from 'lucide-react';

export const ProblemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, role, verificationStatus } = useAuth();

  const [problem, setProblem] = useState<Problem | null>(null);
  const [logs, setLogs] = useState<BuildLog[]>([]);
  const [proof, setProof] = useState<Proof | null>(null);
  const [loading, setLoading] = useState(true);

  // Claim State
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [claimRequest, setClaimRequest] = useState<ProblemClaimRequest | undefined>(undefined);

  // Modals & Form state
  const [logText, setLogText] = useState('');
  const [logImageUrl, setLogImageUrl] = useState<string | undefined>(undefined);
  const [showLogImageModal, setShowLogImageModal] = useState(false);

  // Proof Submit Form
  const [showProofModal, setShowProofModal] = useState(false);
  const [proofSummary, setProofSummary] = useState('');
  const [proofDemoUrl, setProofDemoUrl] = useState('');
  const [proofImageUrl, setProofImageUrl] = useState<string | undefined>(undefined);
  const [showProofImageModal, setShowProofImageModal] = useState(false);

  // Poster Review Form
  const [posterComment, setPosterComment] = useState('');

  useEffect(() => {
    if (showProofModal || showClaimModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showProofModal, showClaimModal]);

  const loadData = async () => {
    if (!id) return;
    try {
      setLoading(true);
      const res = await fetchProblemById(id);
      setProblem(res.problem);
      setLogs(res.logs);
      setProof(res.proof);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  // Sync claim request with live store
  useEffect(() => {
    if (!user || !id) return;
    const syncClaim = () => {
      const c = getClaimByStudentAndProblem(user.id, id) || getClaimByStudentAndProblem(user.email, id);
      setClaimRequest(c);
    };
    syncClaim();
    const unsubscribe = subscribeClaimStore(syncClaim);
    return () => unsubscribe();
  }, [user?.id, user?.email, id]);

  const handleConfirmSubmitClaim = () => {
    if (!user || !problem) return;
    const match = getSkillMatch(
      user.skills || ['React', 'TypeScript', 'Node.js', 'Database', 'AWS'],
      problem.skillsNeeded
    );

    const newClaim = submitProblemClaim({
      problemId: problem.id,
      problemTitle: problem.title,
      studentId: user.id,
      studentName: user.name,
      studentEmail: user.email,
      collegeName: user.collegeName || 'Verified University Student',
      matchPercentage: match.matchPercentage,
      matchedSkills: match.matchedSkills,
      missingSkills: match.missingSkills,
    });

    setClaimRequest(newClaim);
    setShowClaimModal(false);
  };

  const handleClaim = async () => {
    if (!user || !problem) return;
    try {
      await claimProblem(problem.id, user.id, user.name);
      loadData();
    } catch (err: any) {
      alert(err.message || 'Failed to claim problem');
    }
  };

  const handleAddLog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !problem || !logText.trim()) return;
    try {
      await addBuildLog(problem.id, user.id, user.name, logText, logImageUrl);
      setLogText('');
      setLogImageUrl(undefined);
      loadData();
    } catch (err: any) {
      alert(err.message || 'Failed to add build log');
    }
  };

  const handleSubmitProof = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !problem || !proofSummary.trim() || !proofDemoUrl.trim()) return;
    try {
      await submitProof(problem.id, user.id, user.name, proofSummary, proofDemoUrl, proofImageUrl);
      setShowProofModal(false);
      loadData();
    } catch (err: any) {
      alert(err.message || 'Failed to submit proof');
    }
  };

  const handlePosterValidate = async (status: 'validated' | 'rejected') => {
    if (!proof) return;
    try {
      await validateProof(proof.id, status, posterComment);
      loadData();
    } catch (err: any) {
      alert(err.message || 'Failed to validate proof');
    }
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-6">
        <div className="h-8 bg-[#12151C] rounded-lg w-1/3 animate-pulse" />
        <div className="h-96 bg-[#12151C] rounded-3xl animate-pulse" />
      </div>
    );
  }

  if (!problem) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-[#A8A5A0]">
        <h2 className="font-display text-xl font-bold text-[#F2F0EB] mb-2">Problem Not Found</h2>
        <Link to="/problems" className="text-[#FFB020] hover:underline">
          Return to Problems List
        </Link>
      </div>
    );
  }

  const isAssignedBuilder = user && (problem.claimedBy === user.id || claimRequest?.status === 'approved');
  const isPosterOwner = user && problem.posterId === user.id;
  const isVerifiedStudent = verificationStatus === 'approved';

  const skillMatch = getSkillMatch(
    user?.skills || ['React', 'TypeScript', 'Node.js', 'Database', 'AWS'],
    problem.skillsNeeded
  );

  const isExternalDemoUrl = proof?.demoUrl && 
    (proof.demoUrl.startsWith('http://') || proof.demoUrl.startsWith('https://')) &&
    !proof.demoUrl.includes('proofloop-foodbank-app.com') &&
    !proof.demoUrl.includes('proofloop.dev');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Back Button */}
      <Link to="/problems" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#A8A5A0] hover:text-[#F2F0EB] transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Problems
      </Link>

      {/* Full-Bleed Wide Image Banner (Above the Fold) */}
      {problem.imageUrl && (
        <div className="relative rounded-3xl overflow-hidden border border-[#242834] bg-[#0B0E14] h-64 sm:h-96 shadow-2xl">
          <img
            src={problem.imageUrl}
            alt={problem.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/30 to-transparent flex items-end p-8">
            <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#0B0E14] text-[#FFB020] border border-[#FFB020]/30">
              {problem.category}
            </span>
          </div>
        </div>
      )}

      {/* Main Problem Header Card */}
      <div className="glass-card rounded-3xl p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {!problem.imageUrl && (
            <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#1A1E28] text-[#FFB020] border border-[#242834]">
              {problem.category}
            </span>
          )}
          <div className="flex items-center gap-2 ml-auto">
            <StatusBadge type="urgency" value={problem.urgency} />
            <StatusBadge type="problem" value={problem.status} />
          </div>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#F2F0EB] leading-tight">
          {problem.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#A8A5A0] pb-4 border-b border-[#242834]">
          <p>Posted by <span className="text-[#F2F0EB] font-bold">{problem.posterName}</span></p>
          <span>•</span>
          <p>Affects: <span className="text-[#F2F0EB] font-medium">{problem.whoAffected}</span></p>
          <span>•</span>
          <p>Posted {new Date(problem.createdAt).toLocaleDateString()}</p>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <h3 className="text-xs uppercase font-bold text-[#FFB020] tracking-wider">Problem Description</h3>
          <p className="text-[#F2F0EB] text-base leading-relaxed whitespace-pre-line font-normal">
            {problem.description}
          </p>
        </div>

        {/* Dynamic Skill Match Card Component */}
        <SkillMatchCard
          matchPercentage={skillMatch.matchPercentage}
          matchedSkills={skillMatch.matchedSkills}
          missingSkills={skillMatch.missingSkills}
          reason={skillMatch.reason}
        />

        {/* Skills & Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#242834]">
          <div>
            <span className="text-xs text-[#A8A5A0] block mb-2 font-semibold">Skills Needed:</span>
            <div className="flex flex-wrap gap-2">
              {problem.skillsNeeded.map((sk, i) => (
                <span key={i} className="px-3 py-1 rounded-xl text-xs font-bold bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30">
                  {sk}
                </span>
              ))}
            </div>
          </div>

          {/* Action: Claim Problem with Verification Gate */}
          <div className="flex flex-col sm:items-end gap-2">
            {!isVerifiedStudent ? (
              <div className="p-4 rounded-2xl bg-[#0B0E14] border border-amber-500/30 text-xs text-[#A8A5A0] space-y-2 max-w-sm">
                <div className="flex items-center gap-1.5 font-bold text-[#FFB020]">
                  <Lock className="w-4 h-4" /> Verify Student Identity to Claim
                </div>
                <p>Verify your student identity before claiming a problem.</p>
                <Link
                  to="/verify-student"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold btn-primary"
                >
                  <GraduationCap className="w-3.5 h-3.5" /> Upload College ID to Verify
                </Link>
              </div>
            ) : claimRequest?.status === 'pending' ? (
              <div className="p-4 rounded-2xl bg-[#0B0E14] border border-[#FFB020]/40 text-xs text-right space-y-1">
                <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Claim Pending
                </span>
                <p className="text-[#A8A5A0] text-[11px] pt-1">
                  Your claim request has been sent to the administrator.
                </p>
              </div>
            ) : claimRequest?.status === 'approved' || problem.claimedBy === user?.id ? (
              <div className="p-4 rounded-2xl bg-[#0B0E14] border border-emerald-500/40 text-xs text-right space-y-1">
                <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Project Assigned to You
                </span>
                <p className="text-[#A8A5A0] text-[11px]">
                  You are the active student builder for this problem!
                </p>
              </div>
            ) : (
              <button
                onClick={() => setShowClaimModal(true)}
                className="px-6 py-3.5 rounded-2xl text-xs font-extrabold btn-primary flex items-center justify-center gap-2 shadow-lg shadow-[#FFB020]/20"
              >
                <Handshake className="w-4.5 h-4.5" /> Claim This Problem
              </button>
            )}

            {problem.claimedByName && (
              <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#242834] text-xs">
                <span className="text-[#A8A5A0] block">Assigned Builder:</span>
                <span className="font-bold text-[#FFB020]">{problem.claimedByName}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Claim Problem Modal */}
      {showClaimModal && user && problem && (
        <ClaimProblemModal
          problemTitle={problem.title}
          studentName={user.name}
          collegeName={user.collegeName || 'Yenepoya University'}
          matchPercentage={skillMatch.matchPercentage}
          matchedSkills={skillMatch.matchedSkills}
          missingSkills={skillMatch.missingSkills}
          onConfirm={handleConfirmSubmitClaim}
          onClose={() => setShowClaimModal(false)}
        />
      )}

      {/* Proof Review Section (If proof exists) */}
      {proof && (
        <div className="glass-card rounded-3xl p-8 border-2 border-[#FFB020]/40 space-y-6">
          <div className="flex items-center justify-between border-b border-[#242834] pb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFB020]" />
              <h2 className="font-display text-xl font-bold text-[#F2F0EB]">Submitted Solution Proof</h2>
            </div>
            <StatusBadge type="proof" value={proof.status} />
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-xs text-[#A8A5A0] font-semibold mb-1">Solution Summary:</p>
              <p className="text-[#F2F0EB] text-sm leading-relaxed">{proof.summary}</p>
            </div>

            {proof.demoUrl && (
              <div>
                {isExternalDemoUrl ? (
                  <a
                    href={proof.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-extrabold btn-primary"
                  >
                    <ExternalLink className="w-4 h-4" /> View Live External Demo
                  </a>
                ) : (
                  <div className="p-4 rounded-2xl bg-[#0B0E14] border border-[#FFB020]/30 text-xs text-[#F2F0EB] space-y-1">
                    <span className="font-bold text-[#FFB020] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Working Demo Solution Attached
                    </span>
                    <p className="text-[#A8A5A0] text-[11px]">
                      This solution was built and verified live for {problem.posterName}. See screenshot proof below.
                    </p>
                  </div>
                )}
              </div>
            )}

            {proof.imageUrl && (
              <div className="rounded-2xl overflow-hidden border border-[#242834] max-w-lg">
                <img
                  src={proof.imageUrl}
                  alt="Proof demo"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000';
                  }}
                />
              </div>
            )}

            {proof.posterComment && (
              <div className="p-4 rounded-2xl bg-[#0B0E14] border border-[#242834] text-xs text-[#F2F0EB]">
                <span className="font-bold text-[#FFB020] block mb-1">Poster Endorsement:</span>
                "{proof.posterComment}"
              </div>
            )}
          </div>

          {/* Poster Validation Workflow */}
          {isPosterOwner && proof.status === 'pending' && (
            <div className="pt-6 border-t border-[#242834] space-y-4 bg-[#0B0E14] p-6 rounded-2xl border border-[#242834]">
              <h3 className="font-display text-sm font-bold text-[#F2F0EB] flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#FFB020]" /> Problem Poster Review & Validation
              </h3>
              <div>
                <label className="block text-xs text-[#A8A5A0] mb-1">Review Comment / Feedback:</label>
                <textarea
                  rows={2}
                  value={posterComment}
                  onChange={(e) => setPosterComment(e.target.value)}
                  placeholder="e.g. Validated! Worked amazingly with our staff. Thank you!"
                  className="w-full bg-[#12151C] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handlePosterValidate('validated')}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" /> Validate Solution & Publish to Proof Wall
                </button>
                <button
                  onClick={() => handlePosterValidate('rejected')}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 flex items-center gap-1.5"
                >
                  <XCircle className="w-4 h-4" /> Request Changes / Reject
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Build Log Timeline Section */}
      <div className="glass-card rounded-3xl p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242834] pb-4">
          <div>
            <h2 className="font-display text-xl font-bold text-[#F2F0EB] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#FFB020]" /> Build Log Progress Timeline
            </h2>
            <p className="text-xs text-[#A8A5A0] mt-0.5">Transparent builder updates tied to this problem.</p>
          </div>

          {/* Builder Submit Proof Button */}
          {isAssignedBuilder && problem.status !== 'solved' && (
            <button
              onClick={() => setShowProofModal(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold btn-primary flex items-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-4 h-4" /> Submit Final Proof
            </button>
          )}
        </div>

        {/* Builder Add Log Form */}
        {isAssignedBuilder && problem.status !== 'solved' && (
          <form onSubmit={handleAddLog} className="p-5 rounded-2xl bg-[#0B0E14] border border-[#242834] space-y-3">
            <h4 className="text-xs font-bold text-[#F2F0EB] uppercase tracking-wider">Post Build Progress Update</h4>
            <textarea
              rows={2}
              value={logText}
              onChange={(e) => setLogText(e.target.value)}
              placeholder="What progress did you make? (e.g. Connected database API, added dashboard layout...)"
              className="w-full bg-[#12151C] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
            />
            {logImageUrl && (
              <div className="flex items-center gap-2 text-xs text-[#FFB020]">
                <Upload className="w-3.5 h-3.5" /> Screenshot attached
              </div>
            )}
            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={() => setShowLogImageModal(true)}
                className="text-xs text-[#A8A5A0] hover:text-[#FFB020] flex items-center gap-1"
              >
                <Upload className="w-3.5 h-3.5" /> Attach Screenshot (S3 Upload)
              </button>
              <button
                type="submit"
                disabled={!logText.trim()}
                className="px-4 py-2 rounded-xl text-xs font-bold btn-primary disabled:opacity-50 flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" /> Post Update
              </button>
            </div>
          </form>
        )}

        {/* Timeline Component */}
        <BuildLogTimeline logs={logs} />
      </div>

      {/* S3 Image Modal for Build Logs */}
      {showLogImageModal && (
        <ImageUploadModal
          title="Upload Progress Screenshot"
          onImageUploaded={(url) => setLogImageUrl(url)}
          onClose={() => setShowLogImageModal(false)}
        />
      )}

      {/* Submit Proof Modal */}
      {showProofModal && (
        <div className="fixed inset-0 z-[999] bg-[#0B0E14] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl my-auto">
            <h3 className="font-display text-lg font-bold text-[#F2F0EB] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FFB020]" /> Submit Solution Proof
            </h3>
            <p className="text-xs text-[#A8A5A0]">
              Provide a brief summary and working demo link showing your project solves the stated problem.
            </p>

            <form onSubmit={handleSubmitProof} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#F2F0EB] mb-1">Solution Summary:</label>
                <textarea
                  rows={3}
                  required
                  value={proofSummary}
                  onChange={(e) => setProofSummary(e.target.value)}
                  placeholder="Describe what you built and how it addresses the poster's needs..."
                  className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#F2F0EB] mb-1">Demo / Deployment URL:</label>
                <input
                  type="url"
                  required
                  value={proofDemoUrl}
                  onChange={(e) => setProofDemoUrl(e.target.value)}
                  placeholder="https://demo.myproject.com or /problems/prob_101"
                  className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020]"
                />
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => setShowProofImageModal(true)}
                  className="text-xs text-[#A8A5A0] hover:text-[#FFB020] flex items-center gap-1"
                >
                  <Upload className="w-3.5 h-3.5" /> {proofImageUrl ? 'Screenshot Attached ✓' : 'Upload Solution Screenshot (S3)'}
                </button>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowProofModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[#A8A5A0]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold btn-primary"
                >
                  Submit Proof to Poster
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* S3 Image Modal for Proof */}
      {showProofImageModal && (
        <ImageUploadModal
          title="Upload Solution Proof Screenshot"
          onImageUploaded={(url) => setProofImageUrl(url)}
          onClose={() => setShowProofImageModal(false)}
        />
      )}
    </div>
  );
};
