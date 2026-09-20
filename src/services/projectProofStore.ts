import { ProjectProofSubmission, ProjectProofStatus } from '../types';
import { getVerificationByStudentId } from './verificationStore';
import { addNotification } from './notificationStore';

const STORAGE_KEY = 'proofloop_project_proofs';
const BROADCAST_CHANNEL_NAME = 'proofloop_project_proof_channel';

// Centralized Proof Score Calculation Engine (Task 1 & Task 2)
export function calculateProofScore(
  submission: Partial<ProjectProofSubmission>,
  isStudentIdentityVerified?: boolean
): {
  totalScore: number;
  breakdown: {
    studentIdentity: number;
    githubRepo: number;
    liveProject: number;
    demoVideo: number;
    adminVerification: number;
  };
} {
  // If isStudentIdentityVerified boolean is explicitly provided, use it.
  // Otherwise, lookup studentId/studentEmail dynamically from verificationStore single source of truth.
  let isVerified = false;
  if (typeof isStudentIdentityVerified === 'boolean') {
    isVerified = isStudentIdentityVerified;
  } else if (submission.studentId || submission.studentEmail) {
    const v = getVerificationByStudentId(submission.studentId || '') || getVerificationByStudentId(submission.studentEmail || '');
    isVerified = v?.status === 'approved';
  }

  const liveUrl = submission.liveUrl || submission.liveDemoUrl;

  const breakdown = {
    studentIdentity: isVerified ? 20 : 0,
    githubRepo: submission.githubUrl && submission.githubUrl.trim().length > 0 ? 20 : 0,
    liveProject: liveUrl && liveUrl.trim().length > 0 ? 20 : 0,
    demoVideo: submission.demoVideoUrl && submission.demoVideoUrl.trim().length > 0 ? 15 : 0,
    adminVerification: submission.status === 'verified' ? 25 : 0,
  };

  const totalScore = breakdown.studentIdentity + breakdown.githubRepo + breakdown.liveProject + breakdown.demoVideo + breakdown.adminVerification;

  return { totalScore, breakdown };
}

// Sample initial seed demo project proof for instant hackathon presentation
const initialProjectProofs: ProjectProofSubmission[] = [
  {
    id: 'proof_manjunath_101',
    studentId: 'usr_student_manjunath',
    studentName: 'Manjunath',
    studentEmail: 'manjunath@yenepoya.edu.in',
    collegeName: 'Yenepoya University',
    projectName: 'Food Pantry Expiration & Alert Dashboard',
    problemBeingSolved: 'Food bank volunteers struggle to track perishable food batch expirations manually, causing food spoilage and missed pantries.',
    problemTitle: 'Food Pantry Expiration & Alert Dashboard',
    description: 'Built a real-time AWS serverless web dashboard (Vite + DynamoDB + SNS) that tracks inventory batch expiration dates and sends automated 48-hour SMS alerts to 3 local partner food pantries.',
    githubUrl: 'https://github.com/manjunath-dev/foodbank-expiry-dashboard',
    liveUrl: 'https://demo.proofloop.dev/problems/prob_101',
    liveDemoUrl: 'https://demo.proofloop.dev/problems/prob_101',
    demoVideoUrl: 'https://youtube.com/watch?v=demo_foodbank_proofloop',
    techStack: ['React', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'Twilio'],
    screenshotUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80',
    additionalProof: 'Deployed live on AWS us-east-1 and tested with 45 real batch items at Hope Valley Food Bank.',
    status: 'under_review',
    proofScore: 55, // 0 ID (pending) + 20 Github + 20 Live + 15 Video + 0 Admin
    submittedAt: new Date(Date.now() - 3600000 * 3).toISOString(),
  }
];

let broadcastChannel: BroadcastChannel | null = null;
if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
  } catch (e) {
    console.warn('BroadcastChannel not available:', e);
  }
}

type Listener = () => void;
const listeners: Set<Listener> = new Set();

export function subscribeProjectProofStore(listener: Listener): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function notifyListeners() {
  listeners.forEach(l => l());
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
      notifyListeners();
    }
  });

  if (broadcastChannel) {
    broadcastChannel.onmessage = () => {
      notifyListeners();
    };
  }
}

export function getProjectProofs(): ProjectProofSubmission[] {
  if (typeof window === 'undefined') return initialProjectProofs;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProjectProofs));
      return initialProjectProofs;
    }
    const list: ProjectProofSubmission[] = JSON.parse(raw);
    return list.map(p => {
      const calculated = calculateProofScore(p);
      return {
        ...p,
        problemTitle: p.problemTitle || p.problemBeingSolved,
        liveDemoUrl: p.liveDemoUrl || p.liveUrl,
        proofScore: calculated.totalScore,
      };
    });
  } catch (err) {
    console.error('Failed to read project proofs:', err);
    return initialProjectProofs;
  }
}

export function saveProjectProofs(proofs: ProjectProofSubmission[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(proofs));
    notifyListeners();
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'PROJECT_PROOFS_UPDATED', timestamp: Date.now() });
    }
  } catch (err) {
    console.error('Failed to save project proofs:', err);
  }
}

export function getProjectProofsByStudentId(studentId: string): ProjectProofSubmission[] {
  return getProjectProofs().filter(p => p.studentId === studentId || p.studentEmail.toLowerCase() === studentId.toLowerCase());
}

export function submitProjectProof(payload: Omit<ProjectProofSubmission, 'id' | 'status' | 'proofScore' | 'submittedAt'>): ProjectProofSubmission {
  const proofs = getProjectProofs();
  const existingIndex = proofs.findIndex(p => p.studentId === payload.studentId && p.projectName.toLowerCase() === payload.projectName.toLowerCase());

  const liveUrl = payload.liveUrl || payload.liveDemoUrl;
  const problemTitle = payload.problemTitle || payload.problemBeingSolved;

  const initialScore = calculateProofScore({
    ...payload,
    liveUrl,
    status: 'under_review',
  }).totalScore;

  const newProof: ProjectProofSubmission = {
    id: existingIndex >= 0 ? proofs[existingIndex].id : `proof_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ...payload,
    liveUrl,
    liveDemoUrl: liveUrl,
    problemTitle,
    status: 'under_review',
    adminFeedback: undefined,
    requestedChanges: undefined,
    proofScore: initialScore,
    submittedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    proofs[existingIndex] = newProof;
  } else {
    proofs.unshift(newProof);
  }

  saveProjectProofs(proofs);

  // Trigger Notification to Admin
  addNotification({
    recipientRole: 'admin',
    recipientId: 'usr_admin_master',
    title: existingIndex >= 0 ? '🔄 Project Proof Resubmitted' : '📦 New Project Proof Submitted',
    message: `${payload.studentName} ${existingIndex >= 0 ? 'updated and resubmitted' : 'submitted'} project proof for "${payload.projectName}".`,
    type: 'info',
    link: '/admin',
  });

  return newProof;
}

export function verifyProjectProof(proofId: string): ProjectProofSubmission | undefined {
  const proofs = getProjectProofs();
  const proof = proofs.find(p => p.id === proofId);
  if (!proof) return undefined;

  proof.status = 'verified';
  proof.verifiedAt = new Date().toISOString();
  proof.proofScore = calculateProofScore(proof).totalScore;

  saveProjectProofs(proofs);

  // Notification to Student
  addNotification({
    recipientRole: 'student',
    recipientId: proof.studentId,
    title: '🏆 Project Proof Officially Verified!',
    message: `Congratulations! Your project "${proof.projectName}" has been verified by Admin (+25 pts). Total Proof Score: ${proof.proofScore}/100.`,
    type: 'success',
    link: '/my-projects',
  });

  return proof;
}

export function requestChangesOnProjectProof(
  proofId: string, 
  feedback: string, 
  requestedChanges: string[] = []
): ProjectProofSubmission | undefined {
  const proofs = getProjectProofs();
  const proof = proofs.find(p => p.id === proofId);
  if (!proof) return undefined;

  proof.status = 'changes_requested';
  proof.adminFeedback = feedback;
  proof.requestedChanges = requestedChanges;
  proof.proofScore = calculateProofScore(proof).totalScore;

  saveProjectProofs(proofs);

  // Notification to Student
  addNotification({
    recipientRole: 'student',
    recipientId: proof.studentId,
    title: '⚠️ Changes Requested on Project Proof',
    message: `Admin requested updates for "${proof.projectName}": ${requestedChanges.join(', ') || feedback}`,
    type: 'warning',
    link: '/my-projects',
  });

  return proof;
}

export function updateProjectProofStatus(
  proofId: string, 
  status: ProjectProofStatus, 
  feedback?: string,
  requestedChanges?: string[]
): ProjectProofSubmission | undefined {
  if (status === 'verified') {
    return verifyProjectProof(proofId);
  } else if (status === 'changes_requested') {
    return requestChangesOnProjectProof(proofId, feedback || '', requestedChanges || []);
  }

  const proofs = getProjectProofs();
  const proof = proofs.find(p => p.id === proofId);
  if (!proof) return undefined;

  proof.status = status;
  if (feedback !== undefined) proof.adminFeedback = feedback;
  if (requestedChanges !== undefined) proof.requestedChanges = requestedChanges;
  proof.proofScore = calculateProofScore(proof).totalScore;

  saveProjectProofs(proofs);
  return proof;
}
