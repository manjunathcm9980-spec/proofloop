import React, { useState, useEffect } from 'react';
import { 
  getProjectProofs, 
  subscribeProjectProofStore,
  calculateProofScore 
} from '../services/projectProofStore';
import { getVerificationByStudentId, subscribeVerificationStore } from '../services/verificationStore';
import { getClaimsByStudentId, subscribeClaimStore } from '../services/claimStore';
import { ProjectProofSubmission, CollegeVerificationRequest, ProblemClaimRequest } from '../types';
import { useAuth } from '../context/AuthContext';
import { SubmitProjectProofModal } from '../components/SubmitProjectProofModal';
import { ProofScoreBadge } from '../components/ProofScoreBadge';
import { ProjectVerificationTimeline } from '../components/ProjectVerificationTimeline';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Github, 
  ExternalLink, 
  Video, 
  Layers, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw,
  FolderGit2,
  FileCode,
  Sparkles,
  MessageSquare,
  GraduationCap
} from 'lucide-react';

export const MyProjectsPage: React.FC = () => {
  const { user } = useAuth();
  const [proofs, setProofs] = useState<ProjectProofSubmission[]>(getProjectProofs());
  const [verification, setVerification] = useState<CollegeVerificationRequest | undefined>(
    user ? getVerificationByStudentId(user.id) || getVerificationByStudentId(user.email) : undefined
  );
  const [studentClaims, setStudentClaims] = useState<ProblemClaimRequest[]>(
    user ? getClaimsByStudentId(user.id) || getClaimsByStudentId(user.email) : []
  );

  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [selectedProofToEdit, setSelectedProofToEdit] = useState<ProjectProofSubmission | null>(null);

  useEffect(() => {
    const syncAll = () => {
      setProofs(getProjectProofs());
      if (user) {
        setVerification(getVerificationByStudentId(user.id) || getVerificationByStudentId(user.email));
        setStudentClaims(getClaimsByStudentId(user.id) || getClaimsByStudentId(user.email));
      }
    };

    syncAll();
    const unsubProof = subscribeProjectProofStore(syncAll);
    const unsubVer = subscribeVerificationStore(syncAll);
    const unsubClaims = subscribeClaimStore(syncAll);

    return () => {
      unsubProof();
      unsubVer();
      unsubClaims();
    };
  }, [user]);

  const handleOpenNewSubmit = () => {
    setSelectedProofToEdit(null);
    setIsSubmitModalOpen(true);
  };

  const handleOpenEditSubmit = (proof: ProjectProofSubmission) => {
    setSelectedProofToEdit(proof);
    setIsSubmitModalOpen(true);
  };

  const isVerifiedStudent = verification?.status === 'approved';
  const activeClaim = studentClaims.find(c => c.status === 'approved') || studentClaims[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header Banner */}
      <div className="glass-card rounded-3xl p-8 bg-gradient-to-r from-[#12151C] via-[#1A1E28] to-[#12151C] border-[#242834] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30">
            <FolderGit2 className="w-4 h-4" /> Verified Proof Engine
          </div>
          <h1 className="font-display text-3xl font-extrabold text-[#F2F0EB]">
            My Projects & Proof Submissions
          </h1>
          <p className="text-xs text-[#A8A5A0] max-w-2xl">
            Submit codebase repositories, live demos, and video walkthroughs to achieve an official 
            Proof Score (up to 100/100) verified by platform admins.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={handleOpenNewSubmit}
            className="px-5 py-3 rounded-2xl text-xs font-extrabold btn-primary flex items-center justify-center gap-2 shadow-lg shadow-[#FFB020]/20"
          >
            <PlusCircle className="w-4 h-4" /> Submit Project Proof
          </button>
        </div>
      </div>

      {/* Single Source of Truth Student Verification Status Callout */}
      {!isVerifiedStudent ? (
        <div className="p-5 rounded-3xl bg-[#FFB020]/10 border border-[#FFB020]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <GraduationCap className="w-6 h-6 text-[#FFB020] shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <h4 className="font-bold text-[#FFB020] text-sm">
                Student Identity Verification Status: {verification?.status ? verification.status.toUpperCase() : 'NOT SUBMITTED'}
              </h4>
              <p className="text-[#A8A5A0]">
                {verification?.status === 'pending'
                  ? 'Your college ID submission is currently under review by Admin. (+0 pts until approved)'
                  : verification?.status === 'rejected'
                  ? `Verification rejected: "${verification.rejectionReason || 'Please upload a clear student ID card'}". Resubmit to unlock +20 points.`
                  : 'Complete college ID verification to automatically unlock +20 points for your Proof Score.'}
              </p>
            </div>
          </div>

          <Link
            to="/verify-student"
            className="px-4 py-2.5 rounded-xl text-xs font-bold bg-[#FFB020] text-[#0B0E14] inline-flex items-center justify-center gap-1.5 shrink-0"
          >
            <GraduationCap className="w-4 h-4" />
            {verification?.status === 'rejected' ? 'Resubmit Verification' : 'Student Verification'}
          </Link>
        </div>
      ) : (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300">
          <div className="flex items-center gap-2 font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Student Identity Verified (+20 points awarded)</span>
          </div>
          <span className="text-[10px] text-emerald-400/80 font-mono">ID VERIFIED ✓</span>
        </div>
      )}

      {/* Submissions & Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Submitted Proof Cards */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-[#F2F0EB] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#FFB020]" />
              Your Submitted Project Proofs ({proofs.length})
            </h2>
            <span className="text-xs text-[#6E6B65] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" /> Real-time sync active
            </span>
          </div>

          {proofs.length === 0 ? (
            <div className="p-16 rounded-3xl bg-[#12151C] border border-[#242834] text-center space-y-4">
              <FileCode className="w-12 h-12 text-[#6E6B65] mx-auto" />
              <div className="space-y-1">
                <h3 className="font-display text-lg font-bold text-[#F2F0EB]">No Project Proofs Submitted Yet</h3>
                <p className="text-xs text-[#A8A5A0] max-w-md mx-auto">
                  Build your proof portfolio by submitting GitHub repositories, live URLs, and demo videos for claimed real-world problems.
                </p>
              </div>
              <button
                onClick={handleOpenNewSubmit}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#FFB020] text-[#0B0E14] inline-flex items-center gap-2"
              >
                <PlusCircle className="w-4 h-4" /> Submit First Project Proof
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {proofs.map((proof) => {
                const scoreBreakdown = calculateProofScore(proof, isVerifiedStudent);

                return (
                  <div
                    key={proof.id}
                    className="glass-card rounded-3xl p-6 sm:p-8 bg-[#12151C] border border-[#242834] hover:border-[#FFB020]/40 transition-all space-y-6 shadow-xl relative"
                  >
                    {/* Top Status & Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242834] pb-5">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          {/* Unified Status Badges (Task 5) */}
                          {proof.status === 'under_review' && (
                            <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1.5">
                              <Clock className="w-4 h-4 animate-spin-slow" /> 🟡 UNDER REVIEW
                            </span>
                          )}
                          {proof.status === 'verified' && (
                            <span className="px-3.5 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1.5 shadow-md shadow-emerald-500/10">
                              <CheckCircle2 className="w-4 h-4" /> 🟢 ✓ VERIFIED PROJECT
                            </span>
                          )}
                          {proof.status === 'changes_requested' && (
                            <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-300 border border-rose-500/30 inline-flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4" /> 🟠 CHANGES REQUESTED
                            </span>
                          )}
                          {proof.status === 'rejected' && (
                            <span className="px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30 inline-flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4" /> 🔴 REJECTED
                            </span>
                          )}

                          <span className="text-xs text-[#6E6B65]">
                            Submitted {new Date(proof.submittedAt).toLocaleDateString()}
                          </span>
                        </div>

                        <h3 className="font-display text-2xl font-extrabold text-[#F2F0EB]">
                          {proof.projectName}
                        </h3>
                        <p className="text-xs text-[#A8A5A0]">
                          <strong className="text-[#FFB020]">Target Problem:</strong> {proof.problemTitle || proof.problemBeingSolved}
                        </p>
                      </div>

                      {/* Proof Score Badge */}
                      <ProofScoreBadge scoreBreakdown={scoreBreakdown} isStudentVerified={isVerifiedStudent} size="md" />
                    </div>

                    {/* Task 4: Feedback Box & Requested Changes Checklist (If Changes Requested) */}
                    {proof.status === 'changes_requested' && (
                      <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs space-y-3">
                        <div className="flex items-center gap-2 font-bold text-sm text-rose-300">
                          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                          <span>⚠️ Changes Requested by Platform Admin</span>
                        </div>

                        {proof.requestedChanges && proof.requestedChanges.length > 0 && (
                          <div className="space-y-1">
                            <span className="font-bold text-[10px] uppercase text-[#F2F0EB] tracking-wider block">
                              Items Requiring Updates:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {proof.requestedChanges.map((item, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-lg font-bold bg-rose-500/20 text-rose-200 border border-rose-500/40 text-[11px]">
                                  • {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {proof.adminFeedback && (
                          <div className="space-y-1 pt-1 border-t border-rose-500/20">
                            <span className="font-bold text-[10px] uppercase text-[#F2F0EB] tracking-wider block">
                              Admin Comment / Instructions:
                            </span>
                            <p className="leading-relaxed italic text-[#F2F0EB]">"{proof.adminFeedback}"</p>
                          </div>
                        )}
                      </div>
                    )}

                    {proof.status === 'verified' && proof.adminFeedback && (
                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5">
                        <MessageSquare className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                        <div>
                          <strong className="block font-bold text-[10px] uppercase text-emerald-400">Admin Commendation:</strong>
                          <p className="italic text-[#F2F0EB]">"{proof.adminFeedback}"</p>
                        </div>
                      </div>
                    )}

                    {/* Body Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Details Column */}
                      <div className="lg:col-span-8 space-y-4">
                        <p className="text-xs text-[#F2F0EB] leading-relaxed bg-[#0B0E14] p-4 rounded-2xl border border-[#242834]">
                          {proof.description}
                        </p>

                        {/* Tech Stack */}
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8A5A0] block mb-2">
                            Technologies & Frameworks
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {proof.techStack.map((tech, i) => (
                              <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#1A1E28] text-[#FFB020] border border-[#242834]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* External Links */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          {proof.githubUrl && (
                            <a
                              href={proof.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0B0E14] hover:bg-[#1A1E28] text-[#F2F0EB] border border-[#242834] flex items-center gap-2 transition-colors"
                            >
                              <Github className="w-4 h-4 text-[#FFB020]" /> Codebase Repository
                            </a>
                          )}

                          {(proof.liveUrl || proof.liveDemoUrl) && (
                            <a
                              href={proof.liveUrl || proof.liveDemoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0B0E14] hover:bg-[#1A1E28] text-emerald-400 border border-[#242834] flex items-center gap-2 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" /> Live Web App
                            </a>
                          )}

                          {proof.demoVideoUrl && (
                            <a
                              href={proof.demoVideoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0B0E14] hover:bg-[#1A1E28] text-purple-400 border border-[#242834] flex items-center gap-2 transition-colors"
                            >
                              <Video className="w-4 h-4" /> Demo Video
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Screenshot Preview Column */}
                      <div className="lg:col-span-4 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8A5A0] block">
                          Project Screenshot
                        </span>
                        <div className="rounded-2xl overflow-hidden border border-[#242834] bg-[#0B0E14] h-44 flex items-center justify-center">
                          {proof.screenshotUrl ? (
                            <img 
                              src={proof.screenshotUrl} 
                              alt={proof.projectName}
                              className="w-full h-full object-cover" 
                            />
                          ) : (
                            <div className="text-center p-4 text-xs text-[#6E6B65] space-y-1">
                              <Layers className="w-6 h-6 mx-auto opacity-50" />
                              <span>No screenshot provided</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Actions Bar */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#242834]">
                      <button
                        onClick={() => handleOpenEditSubmit(proof)}
                        className={`px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-colors ${
                          proof.status === 'changes_requested'
                            ? 'bg-rose-500 hover:bg-rose-400 text-white shadow-lg shadow-rose-500/20'
                            : 'bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834]'
                        }`}
                      >
                        <RefreshCw className="w-4 h-4 text-[#FFB020]" />
                        {proof.status === 'changes_requested' ? 'Update & Resubmit Proof' : 'Edit Submission Details'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Column: Task 3 Project Verification Timeline */}
        <div className="lg:col-span-4 space-y-6">
          <ProjectVerificationTimeline
            verification={verification}
            claim={activeClaim}
            proof={proofs[0]}
            isStudentVerified={isVerifiedStudent}
          />
        </div>
      </div>

      {/* Submit / Edit Modal */}
      <SubmitProjectProofModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        existingProof={selectedProofToEdit || undefined}
      />
    </div>
  );
};
