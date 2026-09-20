import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  XCircle, 
  AlertCircle, 
  ShieldCheck, 
  Github, 
  ExternalLink, 
  Video, 
  Handshake, 
  FileCode, 
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { ProjectProofSubmission, CollegeVerificationRequest, ProblemClaimRequest } from '../types';

export interface ProjectVerificationTimelineProps {
  verification?: CollegeVerificationRequest;
  claim?: ProblemClaimRequest;
  proof?: ProjectProofSubmission;
  isStudentVerified?: boolean;
}

type TimelineStepStatus = 'completed' | 'current' | 'pending' | 'rejected' | 'changes_requested';

interface StepItem {
  id: string;
  label: string;
  sublabel: string;
  status: TimelineStepStatus;
  icon: React.ReactNode;
}

export const ProjectVerificationTimeline: React.FC<ProjectVerificationTimelineProps> = ({
  verification,
  claim,
  proof,
  isStudentVerified = false,
}) => {
  const isVerifiedStudent = isStudentVerified || verification?.status === 'approved';

  // Determine step statuses dynamically based on real data
  const steps: StepItem[] = [
    {
      id: 'step_id',
      label: 'Student Identity Verification',
      sublabel: isVerifiedStudent 
        ? 'Verified college student (+20 pts)' 
        : verification?.status === 'rejected'
        ? 'Identity verification rejected'
        : 'Pending student ID approval (0 pts)',
      status: isVerifiedStudent 
        ? 'completed' 
        : verification?.status === 'rejected' 
        ? 'rejected' 
        : 'current',
      icon: <GraduationCap className="w-4 h-4" />,
    },
    {
      id: 'step_claim',
      label: 'Problem Discovery & Claim',
      sublabel: claim 
        ? `Claimed "${claim.problemTitle}" (${claim.matchPercentage}% match)` 
        : 'Browse problems and request to claim',
      status: claim ? 'completed' : 'pending',
      icon: <Handshake className="w-4 h-4" />,
    },
    {
      id: 'step_claim_approved',
      label: 'Claim Approval',
      sublabel: claim?.status === 'approved' 
        ? 'Admin assigned problem to builder' 
        : claim?.status === 'rejected'
        ? 'Claim rejected by admin'
        : claim
        ? 'Awaiting admin claim assignment'
        : 'Claim approval pending',
      status: claim?.status === 'approved' 
        ? 'completed' 
        : claim?.status === 'rejected' 
        ? 'rejected' 
        : claim 
        ? 'current' 
        : 'pending',
      icon: <CheckCircle2 className="w-4 h-4" />,
    },
    {
      id: 'step_proof_submitted',
      label: 'Project Proof Submission',
      sublabel: proof 
        ? `Submitted "${proof.projectName}"` 
        : 'Build and submit project proof',
      status: proof ? 'completed' : 'pending',
      icon: <FileCode className="w-4 h-4" />,
    },
    {
      id: 'step_github',
      label: 'GitHub Codebase Repository',
      sublabel: proof?.githubUrl 
        ? `Public repository attached (+20 pts)` 
        : 'No GitHub repository attached (0 pts)',
      status: proof?.githubUrl ? 'completed' : proof ? 'current' : 'pending',
      icon: <Github className="w-4 h-4" />,
    },
    {
      id: 'step_live',
      label: 'Live Web App Demo',
      sublabel: (proof?.liveUrl || proof?.liveDemoUrl) 
        ? `Live deployment URL attached (+20 pts)` 
        : 'No live URL attached (0 pts)',
      status: (proof?.liveUrl || proof?.liveDemoUrl) ? 'completed' : proof ? 'current' : 'pending',
      icon: <ExternalLink className="w-4 h-4" />,
    },
    {
      id: 'step_video',
      label: 'Demo Video Walkthrough',
      sublabel: proof?.demoVideoUrl 
        ? `Video walkthrough attached (+15 pts)` 
        : 'No video URL attached (0 pts)',
      status: proof?.demoVideoUrl ? 'completed' : proof ? 'pending' : 'pending',
      icon: <Video className="w-4 h-4" />,
    },
    {
      id: 'step_admin_review',
      label: 'Admin Verification Audit',
      sublabel: proof?.status === 'verified' 
        ? 'Official admin verification complete (+25 pts)' 
        : proof?.status === 'changes_requested'
        ? 'Admin requested updates / changes'
        : proof?.status === 'under_review'
        ? 'Admin audit in progress...'
        : 'Pending project submission',
      status: proof?.status === 'verified' 
        ? 'completed' 
        : proof?.status === 'changes_requested' 
        ? 'changes_requested' 
        : proof?.status === 'under_review' 
        ? 'current' 
        : 'pending',
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: 'step_final_proof',
      label: 'Project Proof Verified',
      sublabel: proof?.status === 'verified' 
        ? `Project verified! Proof score updated` 
        : 'Awaiting final verification seal',
      status: proof?.status === 'verified' ? 'completed' : 'pending',
      icon: <ShieldCheck className="w-4 h-4" />,
    },
  ];

  return (
    <div className="glass-card rounded-3xl p-6 bg-[#0B0E14] border border-[#242834] space-y-4 shadow-xl">
      <div className="flex items-center justify-between border-b border-[#242834] pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#FFB020]" />
          <div>
            <h4 className="font-display text-sm font-extrabold text-[#F2F0EB]">
              PROJECT VERIFICATION TIMELINE
            </h4>
            <span className="text-[10px] uppercase font-bold text-[#A8A5A0] tracking-wider block">
              Real-time Impact Lifecycle & Verification Status
            </span>
          </div>
        </div>
      </div>

      <div className="relative pl-6 space-y-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#242834]">
        {steps.map((step, idx) => {
          let statusBadgeClass = 'bg-[#12151C] text-[#6E6B65] border-[#242834]';
          let iconContainerClass = 'bg-[#12151C] text-[#6E6B65] border-[#242834]';
          let statusText = 'Pending';

          if (step.status === 'completed') {
            statusBadgeClass = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
            iconContainerClass = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-sm shadow-emerald-500/20';
            statusText = '✓ Completed';
          } else if (step.status === 'current') {
            statusBadgeClass = 'bg-[#FFB020]/15 text-[#FFB020] border-[#FFB020]/30';
            iconContainerClass = 'bg-[#FFB020]/20 text-[#FFB020] border-[#FFB020]/40 shadow-sm shadow-[#FFB020]/20 animate-pulse';
            statusText = '⏳ Active / In Progress';
          } else if (step.status === 'changes_requested') {
            statusBadgeClass = 'bg-rose-500/15 text-rose-300 border-rose-500/30';
            iconContainerClass = 'bg-rose-500/20 text-rose-300 border-rose-500/40';
            statusText = '⚠️ Changes Requested';
          } else if (step.status === 'rejected') {
            statusBadgeClass = 'bg-rose-500/15 text-rose-400 border-rose-500/30';
            iconContainerClass = 'bg-rose-500/20 text-rose-400 border-rose-500/40';
            statusText = '🔴 Rejected';
          }

          return (
            <div key={step.id} className="relative flex items-start gap-3.5 group">
              {/* Timeline Bullet Icon */}
              <div className={`w-7 h-7 rounded-full border flex items-center justify-center -ml-9 shrink-0 transition-all ${iconContainerClass}`}>
                {step.status === 'completed' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : step.status === 'rejected' ? (
                  <XCircle className="w-4 h-4 text-rose-400" />
                ) : step.status === 'changes_requested' ? (
                  <AlertCircle className="w-4 h-4 text-rose-300" />
                ) : (
                  step.icon
                )}
              </div>

              {/* Step Info Content */}
              <div className="flex-1 bg-[#12151C] p-3 rounded-2xl border border-[#242834] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#6E6B65]">0{idx + 1}.</span>
                    <h5 className="font-display text-xs font-bold text-[#F2F0EB]">
                      {step.label}
                    </h5>
                  </div>
                  <p className="text-[11px] text-[#A8A5A0] leading-tight">
                    {step.sublabel}
                  </p>
                </div>

                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider border shrink-0 ${statusBadgeClass}`}>
                  {statusText}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
