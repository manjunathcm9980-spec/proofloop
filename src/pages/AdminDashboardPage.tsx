import React, { useState, useEffect } from 'react';
import { 
  getVerificationRequests, 
  updateVerificationStatus, 
  subscribeVerificationStore 
} from '../services/verificationStore';
import { 
  getClaimRequests, 
  updateClaimStatus, 
  subscribeClaimStore 
} from '../services/claimStore';
import { 
  getProjectProofs, 
  updateProjectProofStatus, 
  subscribeProjectProofStore,
  calculateProofScore
} from '../services/projectProofStore';
import { 
  CollegeVerificationRequest, 
  ProblemClaimRequest, 
  ProjectProofSubmission 
} from '../types';
import { ProofScoreBadge } from '../components/ProofScoreBadge';
import { ProjectVerificationTimeline } from '../components/ProjectVerificationTimeline';
import { useAuth } from '../context/AuthContext';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Eye, 
  Check, 
  X, 
  Building2, 
  GraduationCap, 
  User, 
  Calendar,
  Layers,
  Search,
  Handshake,
  Target,
  Sparkles,
  FolderGit2,
  Github,
  ExternalLink,
  Video,
  AlertCircle,
  MessageSquare,
  Lock
} from 'lucide-react';

const CHANGE_OPTIONS = [
  'GitHub Repository',
  'Live Demo',
  'Demo Video',
  'Project Description',
  'Screenshot',
  'Other'
];

export const AdminDashboardPage: React.FC = () => {
  const { systemRole } = useAuth();
  const isAdmin = systemRole === 'admin';

  // Verification State
  const [verificationRequests, setVerificationRequests] = useState<CollegeVerificationRequest[]>(getVerificationRequests());
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Claim Requests State
  const [claimRequests, setClaimRequests] = useState<ProblemClaimRequest[]>(getClaimRequests());

  // Project Proofs State
  const [projectProofs, setProjectProofs] = useState<ProjectProofSubmission[]>(getProjectProofs());

  // Modals
  const [selectedVerification, setSelectedVerification] = useState<CollegeVerificationRequest | null>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReasonInput, setRejectReasonInput] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Claim Rejection Modal State
  const [selectedClaimToReject, setSelectedClaimToReject] = useState<ProblemClaimRequest | null>(null);
  const [claimRejectReasonInput, setClaimRejectReasonInput] = useState('');

  // Project Proof Modals State
  const [selectedProofToVerify, setSelectedProofToVerify] = useState<ProjectProofSubmission | null>(null);
  const [selectedProofToRequestChanges, setSelectedProofToRequestChanges] = useState<ProjectProofSubmission | null>(null);
  const [proofFeedbackInput, setProofFeedbackInput] = useState('');
  const [selectedChangeCheckboxes, setSelectedChangeCheckboxes] = useState<string[]>([]);
  const [activeTimelineProofId, setActiveTimelineProofId] = useState<string | null>(null);

  useEffect(() => {
    const syncVer = () => setVerificationRequests(getVerificationRequests());
    const syncClaims = () => setClaimRequests(getClaimRequests());
    const syncProofs = () => setProjectProofs(getProjectProofs());
    
    syncVer();
    syncClaims();
    syncProofs();

    const unsubVer = subscribeVerificationStore(syncVer);
    const unsubClaims = subscribeClaimStore(syncClaims);
    const unsubProofs = subscribeProjectProofStore(syncProofs);

    return () => {
      unsubVer();
      unsubClaims();
      unsubProofs();
    };
  }, []);

  // Lock scroll when modal is open
  useEffect(() => {
    if (
      selectedVerification || 
      showRejectModal || 
      selectedClaimToReject ||
      selectedProofToVerify ||
      selectedProofToRequestChanges
    ) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [
    selectedVerification, 
    showRejectModal, 
    selectedClaimToReject, 
    selectedProofToVerify, 
    selectedProofToRequestChanges
  ]);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Guard Helper (Task 7 Role Security)
  const verifyAdminAuth = (): boolean => {
    if (!isAdmin) {
      alert('Role Access Control: Only Platform Administrators can perform Admin actions. Use the Demo Mode switcher top-right to switch to Admin Tab.');
      return false;
    }
    return true;
  };

  // Verification Handlers
  const handleApproveVerification = (req: CollegeVerificationRequest) => {
    if (!verifyAdminAuth()) return;
    const updated = updateVerificationStatus(req.id, 'approved');
    if (updated) {
      showNotification(`✓ ${req.studentName} verified successfully (+20 points awarded).`);
      if (selectedVerification?.id === req.id) setSelectedVerification(null);
    }
  };

  const handleOpenRejectVerificationModal = (req: CollegeVerificationRequest) => {
    if (!verifyAdminAuth()) return;
    setSelectedVerification(req);
    setRejectReasonInput('');
    setShowRejectModal(true);
  };

  const handleConfirmRejectVerification = () => {
    if (!verifyAdminAuth() || !selectedVerification) return;
    const updated = updateVerificationStatus(selectedVerification.id, 'rejected', rejectReasonInput.trim() || undefined);
    if (updated) {
      showNotification(`Verification for ${selectedVerification.studentName} rejected.`);
      setShowRejectModal(false);
      setSelectedVerification(null);
    }
  };

  // Claim Request Handlers
  const handleApproveClaim = (claim: ProblemClaimRequest) => {
    if (!verifyAdminAuth()) return;
    const updated = updateClaimStatus(claim.id, 'approved');
    if (updated) {
      showNotification(`✓ Claim approved! ${claim.studentName} assigned to project.`);
    }
  };

  const handleConfirmRejectClaim = () => {
    if (!verifyAdminAuth() || !selectedClaimToReject) return;
    const updated = updateClaimStatus(selectedClaimToReject.id, 'rejected', claimRejectReasonInput.trim() || undefined);
    if (updated) {
      showNotification(`Claim request for ${selectedClaimToReject.studentName} rejected.`);
      setSelectedClaimToReject(null);
      setClaimRejectReasonInput('');
    }
  };

  // Project Proof Handlers
  const handleConfirmVerifyProof = () => {
    if (!verifyAdminAuth() || !selectedProofToVerify) return;
    const updated = updateProjectProofStatus(
      selectedProofToVerify.id, 
      'verified', 
      proofFeedbackInput.trim() || 'Proof verified successfully by admin. Maximum proof score awarded!'
    );
    if (updated) {
      showNotification(`🟢 ✓ Project "${selectedProofToVerify.projectName}" officially verified! (+25 pts)`);
      setSelectedProofToVerify(null);
      setProofFeedbackInput('');
    }
  };

  const toggleChangeCheckbox = (option: string) => {
    if (selectedChangeCheckboxes.includes(option)) {
      setSelectedChangeCheckboxes(selectedChangeCheckboxes.filter(o => o !== option));
    } else {
      setSelectedChangeCheckboxes([...selectedChangeCheckboxes, option]);
    }
  };

  // Task 4: Functional Request Changes Submission
  const handleConfirmRequestChangesProof = () => {
    if (!verifyAdminAuth() || !selectedProofToRequestChanges) return;

    if (selectedChangeCheckboxes.length === 0 && !proofFeedbackInput.trim()) {
      alert('Task Requirement: At least one item to fix OR an Admin comment must be provided.');
      return;
    }

    const updated = updateProjectProofStatus(
      selectedProofToRequestChanges.id, 
      'changes_requested', 
      proofFeedbackInput.trim() || undefined,
      selectedChangeCheckboxes
    );

    if (updated) {
      showNotification(`🔴 Change request sent to ${selectedProofToRequestChanges.studentName}.`);
      setSelectedProofToRequestChanges(null);
      setProofFeedbackInput('');
      setSelectedChangeCheckboxes([]);
    }
  };

  const pendingVerCount = verificationRequests.filter(r => r.status === 'pending').length;
  const approvedVerCount = verificationRequests.filter(r => r.status === 'approved').length;
  const rejectedVerCount = verificationRequests.filter(r => r.status === 'rejected').length;

  const pendingClaimCount = claimRequests.filter(c => c.status === 'pending').length;
  const pendingProofCount = projectProofs.filter(p => p.status === 'under_review').length;

  const filteredVerifications = verificationRequests.filter(r => {
    const matchesFilter = activeFilter === 'all' || r.status === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      r.studentName.toLowerCase().includes(q) || 
      r.studentEmail.toLowerCase().includes(q) || 
      r.collegeName.toLowerCase().includes(q) ||
      r.courseBranch.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-[1000] bg-[#12151C] border border-[#FFB020] text-[#F2F0EB] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2 text-xs font-bold animate-bounce">
          <ShieldCheck className="w-4 h-4 text-[#FFB020]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="glass-card rounded-3xl p-8 bg-gradient-to-r from-[#12151C] via-[#1A1E28] to-[#12151C] border-[#242834] flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#FF6B4A]/15 text-[#FF6B4A] border border-[#FF6B4A]/30">
            <ShieldCheck className="w-4 h-4" /> Platform Admin Portal
          </div>
          <h1 className="font-display text-3xl font-extrabold text-[#F2F0EB]">
            Admin Dashboard & Overseer
          </h1>
          <p className="text-xs text-[#A8A5A0]">
            Verify student identity submissions, manage project claim requests, and audit project proof score submissions.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div className="p-3 rounded-2xl bg-[#0B0E14] border border-[#FFB020]/30 text-center">
            <span className="text-[10px] uppercase font-bold text-[#A8A5A0] block">Pending IDs</span>
            <span className="text-xl font-black text-[#FFB020]">{pendingVerCount}</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#0B0E14] border border-[#FFB020]/30 text-center">
            <span className="text-[10px] uppercase font-bold text-[#A8A5A0] block">Pending Claims</span>
            <span className="text-xl font-black text-[#FFB020]">{pendingClaimCount}</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#0B0E14] border border-[#FFB020]/30 text-center">
            <span className="text-[10px] uppercase font-bold text-[#A8A5A0] block">Proof Reviews</span>
            <span className="text-xl font-black text-[#FFB020]">{pendingProofCount}</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#0B0E14] border border-emerald-500/30 text-center">
            <span className="text-[10px] uppercase font-bold text-[#A8A5A0] block">Verified Students</span>
            <span className="text-xl font-black text-emerald-400">{approvedVerCount}</span>
          </div>

          <div className="p-3 rounded-2xl bg-[#0B0E14] border border-rose-500/30 text-center">
            <span className="text-[10px] uppercase font-bold text-[#A8A5A0] block">Rejected</span>
            <span className="text-xl font-black text-rose-400">{rejectedVerCount}</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: PROJECT PROOF VERIFICATION QUEUE */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 mb-2">
              <FolderGit2 className="w-3 h-3" /> Project Proof Engine
            </div>
            <h2 className="font-display text-2xl font-extrabold text-[#F2F0EB] flex items-center gap-2">
              <FolderGit2 className="w-6 h-6 text-[#FFB020]" /> Project Proof Verifications ({projectProofs.length})
            </h2>
            <p className="text-xs text-[#A8A5A0] mt-0.5">
              Audit codebase repositories, live demos, and verify proof score authenticity.
            </p>
          </div>
        </div>

        {projectProofs.length === 0 ? (
          <div className="p-10 rounded-3xl bg-[#12151C] border border-[#242834] text-center space-y-2">
            <FolderGit2 className="w-8 h-8 text-[#6E6B65] mx-auto" />
            <p className="text-sm text-[#F2F0EB] font-bold">No project proof submissions to review right now.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {projectProofs.map((proof) => {
              const studentVer = verificationRequests.find(v => v.studentId === proof.studentId || v.studentEmail === proof.studentEmail);
              const isStudentVerified = studentVer?.status === 'approved';
              const scoreBreakdown = calculateProofScore(proof, isStudentVerified);

              return (
                <div
                  key={proof.id}
                  className="glass-card rounded-3xl p-6 bg-[#12151C] border border-[#242834] hover:border-[#FFB020]/40 transition-all space-y-5 shadow-2xl relative"
                >
                  {/* Top Status Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#242834] pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        {/* Task 5 Unified Status Badges */}
                        {proof.status === 'under_review' && (
                          <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> 🟡 UNDER REVIEW
                          </span>
                        )}
                        {proof.status === 'verified' && (
                          <span className="px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> 🟢 ✓ VERIFIED PROJECT
                          </span>
                        )}
                        {proof.status === 'changes_requested' && (
                          <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-300 border border-rose-500/30 inline-flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" /> 🟠 CHANGES REQUESTED
                          </span>
                        )}

                        <span className="text-xs text-[#6E6B65]">
                          Submitted by <strong className="text-[#FFB020]">{proof.studentName}</strong> ({proof.collegeName})
                        </span>

                        {isStudentVerified ? (
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                            Student ID Verified (+20)
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/40">
                            Student ID Pending (+0)
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl font-bold text-[#F2F0EB]">
                        {proof.projectName}
                      </h3>
                      <p className="text-xs text-[#A8A5A0]">
                        <strong>Target Problem:</strong> {proof.problemTitle || proof.problemBeingSolved}
                      </p>
                    </div>

                    {/* Proof Score Badge Widget */}
                    <ProofScoreBadge scoreBreakdown={scoreBreakdown} size="sm" />
                  </div>

                  {/* Submission Links & Details */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs">
                    <div className="md:col-span-8 space-y-3">
                      <p className="text-[#F2F0EB] bg-[#0B0E14] p-3.5 rounded-2xl border border-[#242834]">
                        {proof.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2">
                        {proof.githubUrl && (
                          <a
                            href={proof.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-[#0B0E14] hover:bg-[#1A1E28] text-[#F2F0EB] border border-[#242834] flex items-center gap-1.5 font-semibold"
                          >
                            <Github className="w-3.5 h-3.5 text-[#FFB020]" /> Repository
                          </a>
                        )}
                        {(proof.liveUrl || proof.liveDemoUrl) && (
                          <a
                            href={proof.liveUrl || proof.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-[#0B0E14] hover:bg-[#1A1E28] text-emerald-400 border border-[#242834] flex items-center gap-1.5 font-semibold"
                          >
                            <ExternalLink className="w-3.5 h-3.5" /> Live Project
                          </a>
                        )}
                        {proof.demoVideoUrl && (
                          <a
                            href={proof.demoVideoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-xl bg-[#0B0E14] hover:bg-[#1A1E28] text-purple-400 border border-[#242834] flex items-center gap-1.5 font-semibold"
                          >
                            <Video className="w-3.5 h-3.5" /> Video Walkthrough
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Screenshot Preview */}
                    <div className="md:col-span-4 rounded-2xl overflow-hidden border border-[#242834] bg-[#0B0E14] h-32 flex items-center justify-center">
                      {proof.screenshotUrl ? (
                        <img 
                          src={proof.screenshotUrl} 
                          alt="Project Proof Preview" 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <span className="text-[#6E6B65]">No screenshot uploaded</span>
                      )}
                    </div>
                  </div>

                  {proof.adminFeedback && (
                    <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#242834] text-xs text-[#A8A5A0]">
                      <span className="font-bold text-[#FFB020] block mb-0.5">Admin Note / Feedback:</span>
                      "{proof.adminFeedback}"
                    </div>
                  )}

                  {/* Task 3 Timeline Toggle */}
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTimelineProofId(activeTimelineProofId === proof.id ? null : proof.id)}
                      className="text-xs font-bold text-[#FFB020] hover:underline flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {activeTimelineProofId === proof.id ? 'Hide Verification Lifecycle Timeline' : 'View Full Verification Lifecycle Timeline'}
                    </button>

                    {activeTimelineProofId === proof.id && (
                      <div className="mt-4">
                        <ProjectVerificationTimeline
                          verification={studentVer}
                          proof={proof}
                          isStudentVerified={isStudentVerified}
                        />
                      </div>
                    )}
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#242834]">
                    <button
                      onClick={() => {
                        if (!verifyAdminAuth()) return;
                        setSelectedProofToRequestChanges(proof);
                        setProofFeedbackInput(proof.adminFeedback || '');
                        setSelectedChangeCheckboxes(proof.requestedChanges || []);
                      }}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 flex items-center gap-1"
                    >
                      <X className="w-4 h-4" /> Request Changes
                    </button>
                    <button
                      onClick={() => {
                        if (!verifyAdminAuth()) return;
                        setSelectedProofToVerify(proof);
                        setProofFeedbackInput('Verified and approved by admin. Exemplary project quality!');
                      }}
                      className="px-5 py-2 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-[#0B0E14] flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                    >
                      <Check className="w-4 h-4" /> Verify Project (+25 pts)
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* SECTION 2: PROBLEM CLAIM REQUESTS */}
      <div className="space-y-6 pt-6 border-t border-[#242834]">
        <div className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 mb-2">
              <Sparkles className="w-3 h-3" /> Skill Matching Review
            </div>
            <h2 className="font-display text-2xl font-extrabold text-[#F2F0EB] flex items-center gap-2">
              <Handshake className="w-6 h-6 text-[#FFB020]" /> Problem Claim Requests ({claimRequests.length})
            </h2>
            <p className="text-xs text-[#A8A5A0] mt-0.5">
              Review student skill compatibility scores and approve project assignments.
            </p>
          </div>
        </div>

        {claimRequests.length === 0 ? (
          <div className="p-10 rounded-3xl bg-[#12151C] border border-[#242834] text-center space-y-2">
            <Handshake className="w-8 h-8 text-[#6E6B65] mx-auto" />
            <p className="text-sm text-[#F2F0EB] font-bold">No active claim requests right now.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {claimRequests.map((claim) => (
              <div
                key={claim.id}
                className="glass-card rounded-3xl p-6 bg-[#12151C] border border-[#242834] hover:border-[#FFB020]/40 transition-all space-y-5 shadow-2xl relative"
              >
                {/* Top Badge Row */}
                <div className="flex items-center justify-between border-b border-[#242834] pb-3">
                  {claim.status === 'pending' && (
                    <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> 🟠 Claim Pending
                    </span>
                  )}
                  {claim.status === 'approved' && (
                    <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 🟢 Student Assigned
                    </span>
                  )}
                  {claim.status === 'rejected' && (
                    <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30 inline-flex items-center gap-1">
                      <XCircle className="w-3.5 h-3.5" /> 🔴 Rejected
                    </span>
                  )}

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-black uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Target className="w-3.5 h-3.5" /> {claim.matchPercentage}% Match
                  </div>
                </div>

                {/* Problem Title & Student Details */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#A8A5A0] block mb-0.5">Target Problem</span>
                    <h3 className="font-display text-lg font-bold text-[#F2F0EB] leading-snug">
                      {claim.problemTitle}
                    </h3>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#0B0E14] border border-[#242834] grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[#A8A5A0] text-[10px] block">Student Builder:</span>
                      <span className="font-bold text-[#FFB020]">{claim.studentName}</span>
                    </div>

                    <div>
                      <span className="text-[#A8A5A0] text-[10px] block">College:</span>
                      <span className="font-semibold text-[#F2F0EB] truncate block">{claim.collegeName}</span>
                    </div>
                  </div>
                </div>

                {/* Matched & Missing Skills Tags */}
                <div className="space-y-2 text-xs bg-[#0B0E14] p-3.5 rounded-2xl border border-[#242834]">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-emerald-400 block mb-1">
                      Matched Skills ({claim.matchedSkills.length})
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {claim.matchedSkills.map((sk, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          ✓ {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {claim.missingSkills.length > 0 && (
                    <div className="pt-2 border-t border-[#242834]">
                      <span className="text-[10px] font-bold uppercase text-[#A8A5A0] block mb-1">
                        Missing Skills ({claim.missingSkills.length})
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {claim.missingSkills.map((sk, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[#1A1E28] text-[#A8A5A0] border border-[#242834]">
                            • {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons for Pending Claim */}
                {claim.status === 'pending' && (
                  <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#242834]">
                    <button
                      onClick={() => {
                        if (!verifyAdminAuth()) return;
                        setSelectedClaimToReject(claim);
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 flex items-center gap-1"
                    >
                      <X className="w-4 h-4" /> Reject Claim
                    </button>
                    <button
                      onClick={() => handleApproveClaim(claim)}
                      className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-[#0B0E14] flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
                    >
                      <Check className="w-4 h-4" /> Approve Claim
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECTION 3: STUDENT VERIFICATION QUEUE */}
      <div className="space-y-6 pt-6 border-t border-[#242834]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[#F2F0EB] flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-[#FFB020]" /> Student Verification Queue
            </h2>
            <p className="text-xs text-[#A8A5A0] mt-0.5">
              Review uploaded college ID cards and grant verified student status (+20 pts).
            </p>
          </div>

          {/* Search & Status Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-[#A8A5A0] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student or college..."
                className="bg-[#12151C] border border-[#242834] rounded-xl pl-9 pr-4 py-2 text-xs text-[#F2F0EB] outline-none focus:border-[#FFB020] w-60"
              />
            </div>

            <div className="bg-[#12151C] p-1 rounded-xl border border-[#242834] flex items-center text-xs">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeFilter === 'all' ? 'bg-[#FFB020] text-[#0B0E14]' : 'text-[#A8A5A0] hover:text-[#F2F0EB]'
                }`}
              >
                All ({verificationRequests.length})
              </button>
              <button
                onClick={() => setActiveFilter('pending')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeFilter === 'pending' ? 'bg-[#FFB020] text-[#0B0E14]' : 'text-[#A8A5A0] hover:text-[#F2F0EB]'
                }`}
              >
                Pending ({pendingVerCount})
              </button>
              <button
                onClick={() => setActiveFilter('approved')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeFilter === 'approved' ? 'bg-emerald-500 text-[#0B0E14]' : 'text-[#A8A5A0] hover:text-[#F2F0EB]'
                }`}
              >
                Approved ({approvedVerCount})
              </button>
              <button
                onClick={() => setActiveFilter('rejected')}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                  activeFilter === 'rejected' ? 'bg-rose-500 text-white' : 'text-[#A8A5A0] hover:text-[#F2F0EB]'
                }`}
              >
                Rejected ({rejectedVerCount})
              </button>
            </div>
          </div>
        </div>

        {/* Requests List */}
        {filteredVerifications.length === 0 ? (
          <div className="p-16 rounded-3xl bg-[#12151C] border border-[#242834] text-center space-y-3">
            <Layers className="w-10 h-10 text-[#6E6B65] mx-auto" />
            <h3 className="font-display text-lg font-bold text-[#F2F0EB]">No verification requests found</h3>
            <p className="text-xs text-[#A8A5A0]">No student verification submissions match your current filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVerifications.map((req) => (
              <div
                key={req.id}
                className="glass-card rounded-2xl p-6 bg-[#12151C] border border-[#242834] hover:border-[#FFB020]/40 transition-all flex flex-col justify-between space-y-4 shadow-xl relative group"
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  {req.status === 'pending' && (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Pending Review
                    </span>
                  )}
                  {req.status === 'approved' && (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> ✓ Verified Student
                    </span>
                  )}
                  {req.status === 'rejected' && (
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/15 text-rose-400 border border-rose-500/30 inline-flex items-center gap-1">
                      <XCircle className="w-3 h-3" /> Rejected
                    </span>
                  )}

                  <span className="text-[10px] text-[#6E6B65] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(req.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                {/* Student Info Details */}
                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-[#F2F0EB] flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#FFB020]" /> {req.studentName}
                  </h3>
                  <p className="text-xs text-[#A8A5A0] truncate">{req.studentEmail}</p>

                  <div className="p-3 rounded-xl bg-[#0B0E14] border border-[#242834] space-y-1 text-xs">
                    <p className="text-[#FFB020] font-bold flex items-center gap-1 truncate">
                      <Building2 className="w-3.5 h-3.5 shrink-0" /> {req.collegeName}
                    </p>
                    <div className="flex justify-between text-[11px] text-[#A8A5A0] pt-1 border-t border-[#242834]">
                      <span>{req.courseBranch}</span>
                      <span className="font-semibold text-[#F2F0EB]">{req.yearSemester}</span>
                    </div>
                  </div>

                  {req.rejectionReason && (
                    <p className="text-[11px] text-rose-400 bg-rose-500/10 p-2 rounded-lg italic">
                      Reason: "{req.rejectionReason}"
                    </p>
                  )}
                </div>

                {/* ID Thumbnail & Actions */}
                <div className="pt-2 border-t border-[#242834] space-y-3">
                  <div
                    onClick={() => setSelectedVerification(req)}
                    className="relative rounded-xl overflow-hidden border border-[#242834] bg-[#0B0E14] h-28 cursor-pointer group-hover:border-[#FFB020]/50 transition-colors"
                  >
                    <img
                      src={req.idCardUrl}
                      alt="College ID Preview"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#0B0E14]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-xs font-bold text-[#FFB020]">
                      <Eye className="w-4 h-4" /> Click to View ID Card
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedVerification(req)}
                      className="px-3 py-2 rounded-xl text-xs font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834] flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#FFB020]" /> View ID
                    </button>

                    {req.status === 'pending' && (
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleApproveVerification(req)}
                          className="px-3.5 py-2 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-[#0B0E14] flex items-center gap-1 shadow-sm"
                        >
                          <Check className="w-3.5 h-3.5" /> Approve
                        </button>
                        <button
                          onClick={() => handleOpenRejectVerificationModal(req)}
                          className="px-3 py-2 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 flex items-center gap-1"
                        >
                          <X className="w-3.5 h-3.5" /> Reject
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL 1: VIEW ID CARD FULLSCREEN MODAL */}
      {selectedVerification && !showRejectModal && (
        <div className="fixed inset-0 z-[999] bg-[#0B0E14] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#12151C] border border-[#242834] rounded-3xl w-full max-w-3xl p-6 sm:p-8 relative space-y-6 shadow-2xl my-auto">
            <button
              onClick={() => setSelectedVerification(null)}
              className="absolute top-5 right-5 text-[#A8A5A0] hover:text-[#F2F0EB] bg-[#1A1E28] p-2 rounded-xl border border-[#242834]"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 pr-8">
              <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#FFB020]/15 text-[#FFB020] border border-[#FFB020]/30 inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" /> College ID Verification Preview
              </span>
              <h3 className="font-display text-2xl font-extrabold text-[#F2F0EB]">
                {selectedVerification.studentName}
              </h3>
              <p className="text-xs text-[#A8A5A0]">{selectedVerification.studentEmail}</p>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Image Preview */}
              <div className="md:col-span-7 rounded-2xl overflow-hidden border border-[#242834] bg-[#0B0E14] shadow-md max-h-80 flex items-center justify-center p-2">
                <img
                  src={selectedVerification.idCardUrl}
                  alt="Full College ID"
                  className="max-h-72 w-auto object-contain rounded-xl"
                />
              </div>

              {/* Right Column: Metadata */}
              <div className="md:col-span-5 space-y-4">
                <div className="p-4 rounded-2xl bg-[#0B0E14] border border-[#242834] space-y-2.5 text-xs">
                  <div>
                    <span className="text-[#A8A5A0] block text-[10px] uppercase font-bold">College / University</span>
                    <span className="font-bold text-[#FFB020]">{selectedVerification.collegeName}</span>
                  </div>

                  <div>
                    <span className="text-[#A8A5A0] block text-[10px] uppercase font-bold">Course / Branch</span>
                    <span className="font-semibold text-[#F2F0EB]">{selectedVerification.courseBranch}</span>
                  </div>

                  <div>
                    <span className="text-[#A8A5A0] block text-[10px] uppercase font-bold">Year / Semester</span>
                    <span className="font-semibold text-[#F2F0EB]">{selectedVerification.yearSemester}</span>
                  </div>

                  <div>
                    <span className="text-[#A8A5A0] block text-[10px] uppercase font-bold">Submission Date</span>
                    <span className="text-[#6E6B65]">
                      {new Date(selectedVerification.submittedAt).toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#A8A5A0] block text-[10px] uppercase font-bold mb-1">Status</span>
                    {selectedVerification.status === 'pending' && <span className="text-[#FFB020] font-bold">🟠 Pending Admin Approval</span>}
                    {selectedVerification.status === 'approved' && <span className="text-emerald-400 font-bold">🟢 Approved ✓ (+20 pts)</span>}
                    {selectedVerification.status === 'rejected' && <span className="text-rose-400 font-bold">🔴 Rejected</span>}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => handleApproveVerification(selectedVerification)}
                    className="w-full py-3 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-[#0B0E14] flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-500/20"
                  >
                    <Check className="w-4 h-4" /> Approve Student (+20 pts)
                  </button>

                  <button
                    onClick={() => handleOpenRejectVerificationModal(selectedVerification)}
                    className="w-full py-3 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 border border-rose-500/40 flex items-center justify-center gap-1.5"
                  >
                    <X className="w-4 h-4" /> Reject Student
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedVerification(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#1A1E28] hover:bg-[#242834] text-[#F2F0EB] border border-[#242834]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ID VERIFICATION REJECT REASON MODAL */}
      {showRejectModal && selectedVerification && (
        <div className="fixed inset-0 z-[1000] bg-[#0B0E14] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12151C] border border-rose-500/40 rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl my-auto">
            <h3 className="font-display text-lg font-bold text-[#F2F0EB] flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-400" /> Reject Verification Request
            </h3>
            <p className="text-xs text-[#A8A5A0]">
              Rejecting verification for <strong className="text-[#F2F0EB]">{selectedVerification.studentName}</strong> ({selectedVerification.collegeName}).
            </p>

            <div>
              <label className="block text-xs font-bold text-[#F2F0EB] mb-1">
                Reason for Rejection (Optional):
              </label>
              <textarea
                rows={3}
                value={rejectReasonInput}
                onChange={(e) => setRejectReasonInput(e.target.value)}
                placeholder="e.g. ID card photo is blurry or expired. Please upload a clear photo of your current college ID."
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-rose-400"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowRejectModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmRejectVerification}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-rose-500 hover:bg-rose-400 text-white shadow-md shadow-rose-500/20"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: CLAIM REJECTION MODAL */}
      {selectedClaimToReject && (
        <div className="fixed inset-0 z-[1000] bg-[#0B0E14] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12151C] border border-rose-500/40 rounded-3xl w-full max-w-md p-6 space-y-4 shadow-2xl my-auto">
            <h3 className="font-display text-lg font-bold text-[#F2F0EB] flex items-center gap-2">
              <XCircle className="w-5 h-5 text-rose-400" /> Reject Problem Claim Request
            </h3>
            <p className="text-xs text-[#A8A5A0]">
              Rejecting claim for <strong className="text-[#F2F0EB]">{selectedClaimToReject.studentName}</strong> on <strong className="text-[#F2F0EB]">{selectedClaimToReject.problemTitle}</strong>.
            </p>

            <div>
              <label className="block text-xs font-bold text-[#F2F0EB] mb-1">
                Reason for Rejection (Optional):
              </label>
              <textarea
                rows={3}
                value={claimRejectReasonInput}
                onChange={(e) => setClaimRejectReasonInput(e.target.value)}
                placeholder="e.g. Another student has already been assigned to this project."
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-rose-400"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedClaimToReject(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmRejectClaim}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-rose-500 hover:bg-rose-400 text-white shadow-md shadow-rose-500/20"
              >
                Confirm Rejection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: VERIFY PROJECT PROOF MODAL */}
      {selectedProofToVerify && (
        <div className="fixed inset-0 z-[1000] bg-[#0B0E14]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12151C] border border-emerald-500/40 rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl my-auto">
            <h3 className="font-display text-xl font-extrabold text-[#F2F0EB] flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" /> Verify Project Proof
            </h3>
            <p className="text-xs text-[#A8A5A0]">
              You are officially verifying project <strong className="text-[#FFB020]">{selectedProofToVerify.projectName}</strong> submitted by <strong className="text-[#F2F0EB]">{selectedProofToVerify.studentName}</strong>. 
              This will award +25 bonus points to the Proof Score.
            </p>

            <div>
              <label className="block text-xs font-bold text-[#F2F0EB] mb-1">
                Admin Commendation / Verification Note (Optional):
              </label>
              <textarea
                rows={3}
                value={proofFeedbackInput}
                onChange={(e) => setProofFeedbackInput(e.target.value)}
                placeholder="e.g. Excellent work! Code quality and demo video meet all verification requirements."
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-emerald-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedProofToVerify(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmVerifyProof}
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-[#0B0E14] shadow-lg shadow-emerald-500/20 flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" /> Officially Verify Project
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TASK 4: FULLY FUNCTIONAL REQUEST CHANGES MODAL */}
      {selectedProofToRequestChanges && (
        <div className="fixed inset-0 z-[1000] bg-[#0B0E14]/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#12151C] border border-rose-500/40 rounded-3xl w-full max-w-lg p-6 space-y-5 shadow-2xl my-auto">
            <div className="space-y-1">
              <h3 className="font-display text-xl font-extrabold text-[#F2F0EB] flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-rose-400" /> Request Project Changes
              </h3>
              <p className="text-xs text-[#A8A5A0]">
                Select specific items requiring fixes for <strong className="text-[#FFB020]">{selectedProofToRequestChanges.projectName}</strong>. The student will be notified immediately.
              </p>
            </div>

            {/* Checkboxes for what needs to be fixed */}
            <div className="space-y-2 bg-[#0B0E14] p-4 rounded-2xl border border-[#242834]">
              <label className="block text-xs font-bold text-[#FFB020] uppercase tracking-wider">
                Select items that need to be fixed:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {CHANGE_OPTIONS.map((opt) => {
                  const isChecked = selectedChangeCheckboxes.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleChangeCheckbox(opt)}
                      className={`px-3 py-2 rounded-xl text-left font-bold transition-all flex items-center justify-between border ${
                        isChecked
                          ? 'bg-rose-500/20 text-rose-200 border-rose-500/50 shadow-sm'
                          : 'bg-[#12151C] text-[#A8A5A0] border-[#242834] hover:text-[#F2F0EB]'
                      }`}
                    >
                      <span>{opt}</span>
                      <span className="text-xs font-black">{isChecked ? '✓' : '+'}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Admin Comment Textarea */}
            <div>
              <label className="block text-xs font-bold text-[#F2F0EB] mb-1">
                Admin Comment / Detailed Instructions:
              </label>
              <textarea
                rows={3}
                value={proofFeedbackInput}
                onChange={(e) => setProofFeedbackInput(e.target.value)}
                placeholder="Describe specific changes or fixes needed before verification..."
                className="w-full bg-[#0B0E14] border border-[#242834] rounded-xl p-3 text-xs text-[#F2F0EB] outline-none focus:border-rose-400"
              />
              <span className="text-[10px] text-[#6E6B65] mt-1 block">
                * At least 1 item or comment is required.
              </span>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-[#242834]">
              <button
                onClick={() => {
                  setSelectedProofToRequestChanges(null);
                  setSelectedChangeCheckboxes([]);
                  setProofFeedbackInput('');
                }}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#A8A5A0] hover:text-[#F2F0EB]"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmRequestChangesProof}
                className="px-5 py-2.5 rounded-xl text-xs font-extrabold bg-rose-500 hover:bg-rose-400 text-white shadow-lg shadow-rose-500/20 flex items-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4" /> Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
