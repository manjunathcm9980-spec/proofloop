import { ProblemClaimRequest, ClaimStatus } from '../types';
import { addNotification } from './notificationStore';

const STORAGE_KEY = 'proofloop_problem_claims';
const BROADCAST_CHANNEL_NAME = 'proofloop_claims_channel';

// Default skills list available for student profile
export const AVAILABLE_SKILLS = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Python',
  'Java',
  'C++',
  'HTML',
  'CSS',
  'MongoDB',
  'PostgreSQL',
  'Database',
  'AWS',
  'UI/UX',
  'Figma',
  'Twilio / Email Alerts',
  'Stripe / Payment API',
  'PDF Generation',
  'Calendar UI',
  'Responsive UI',
  'Filter Logic'
];

// Initial seed demo claim request for instant hackathon testing
const initialClaims: ProblemClaimRequest[] = [
  {
    id: 'claim_manjunath_prob101',
    problemId: 'prob_101',
    problemTitle: 'Food Bank Expiry & Surplus Redistribution Dashboard',
    studentId: 'usr_student_manjunath',
    studentName: 'Manjunath',
    studentEmail: 'manjunath@yenepoya.edu.in',
    collegeName: 'Yenepoya University',
    matchPercentage: 92,
    matchedSkills: ['React', 'Node.js', 'Database'],
    missingSkills: ['Twilio / Email Alerts'],
    status: 'pending',
    submittedAt: new Date(Date.now() - 1800000).toISOString(), // 30 mins ago
  }
];

// BroadcastChannel for cross-tab real-time synchronization
let broadcastChannel: BroadcastChannel | null = null;
if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    broadcastChannel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
  } catch (e) {
    console.warn('BroadcastChannel not available:', e);
  }
}

// Subscriber listeners
type Listener = () => void;
const listeners: Set<Listener> = new Set();

export function subscribeClaimStore(listener: Listener): () => void {
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

/**
 * Transparent rule-based skill matching algorithm:
 * matched / required * 100
 */
export function getSkillMatch(
  studentSkills: string[] = ['React', 'TypeScript', 'Node.js', 'Database', 'AWS'],
  requiredSkills: string[] = []
): {
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  reason: string;
} {
  if (!requiredSkills || requiredSkills.length === 0) {
    return {
      matchPercentage: 100,
      matchedSkills: studentSkills,
      missingSkills: [],
      reason: 'No specific skills required for this problem.'
    };
  }

  const normalizedStudent = studentSkills.map(s => s.toLowerCase().trim());

  const matchedSkills: string[] = [];
  const missingSkills: string[] = [];

  for (const reqSkill of requiredSkills) {
    const isMatch = normalizedStudent.some(stSkill => 
      stSkill.includes(reqSkill.toLowerCase().trim()) || 
      reqSkill.toLowerCase().trim().includes(stSkill)
    );

    if (isMatch) {
      matchedSkills.push(reqSkill);
    } else {
      missingSkills.push(reqSkill);
    }
  }

  const ratio = matchedSkills.length / requiredSkills.length;
  const matchPercentage = Math.min(100, Math.round(ratio * 100));

  let reason = `Your verified profile skills match ${matchedSkills.length} of ${requiredSkills.length} required skills for this problem.`;
  if (matchPercentage >= 90) {
    reason = `Outstanding match! You have almost all key skills required for this project.`;
  } else if (matchPercentage >= 70) {
    reason = `Strong match! Your profile skills align well with the core requirements.`;
  } else if (matchPercentage < 50) {
    reason = `Partial match. You possess some required skills, but may need to learn missing technologies.`;
  }

  return {
    matchPercentage,
    matchedSkills,
    missingSkills,
    reason
  };
}

export function getClaimRequests(): ProblemClaimRequest[] {
  if (typeof window === 'undefined') return initialClaims;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialClaims));
      return initialClaims;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read claim requests:', err);
    return initialClaims;
  }
}

export function saveClaimRequests(claims: ProblemClaimRequest[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(claims));
    notifyListeners();
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'CLAIMS_UPDATED', timestamp: Date.now() });
    }
  } catch (err) {
    console.error('Failed to save claim requests:', err);
  }
}

export function getClaimsByStudentId(studentId: string): ProblemClaimRequest[] {
  return getClaimRequests().filter(c => c.studentId === studentId || c.studentEmail.toLowerCase() === studentId.toLowerCase());
}

export function getClaimByStudentAndProblem(studentId: string, problemId: string): ProblemClaimRequest | undefined {
  return getClaimRequests().find(c => 
    c.problemId === problemId && (c.studentId === studentId || c.studentEmail.toLowerCase() === studentId.toLowerCase())
  );
}

export function submitProblemClaim(payload: {
  problemId: string;
  problemTitle: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  collegeName: string;
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
}): ProblemClaimRequest {
  const claims = getClaimRequests();

  const existingIndex = claims.findIndex(c => 
    c.problemId === payload.problemId && (c.studentId === payload.studentId || c.studentEmail.toLowerCase() === payload.studentEmail.toLowerCase())
  );

  const newClaim: ProblemClaimRequest = {
    id: existingIndex >= 0 ? claims[existingIndex].id : `claim_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ...payload,
    status: 'pending',
    submittedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    claims[existingIndex] = newClaim;
  } else {
    claims.unshift(newClaim);
  }

  saveClaimRequests(claims);

  // Notify Admin
  addNotification({
    recipientRole: 'admin',
    recipientId: 'usr_admin_master',
    title: '🤝 New Problem Claim Request',
    message: `${payload.studentName} requested to claim "${payload.problemTitle}" (${payload.matchPercentage}% Skill Match).`,
    type: 'info',
    link: '/admin',
  });

  return newClaim;
}

export function updateClaimStatus(
  claimId: string,
  status: ClaimStatus,
  rejectionReason?: string
): ProblemClaimRequest | undefined {
  const claims = getClaimRequests();
  const claim = claims.find(c => c.id === claimId);
  if (!claim) return undefined;

  claim.status = status;
  claim.reviewedAt = new Date().toISOString();
  if (rejectionReason) {
    claim.rejectionReason = rejectionReason;
  } else if (status === 'approved') {
    claim.rejectionReason = undefined;
  }

  saveClaimRequests(claims);

  // Trigger Notifications to Student
  if (status === 'approved') {
    addNotification({
      recipientRole: 'student',
      recipientId: claim.studentId,
      title: '🎯 Problem Claim Approved!',
      message: `Your request to claim "${claim.problemTitle}" was approved by Admin. You are assigned to build this project!`,
      type: 'success',
      link: '/my-projects',
    });
  } else if (status === 'rejected') {
    addNotification({
      recipientRole: 'student',
      recipientId: claim.studentId,
      title: '🔴 Problem Claim Rejected',
      message: `Your request to claim "${claim.problemTitle}" was rejected. ${rejectionReason ? `Reason: "${rejectionReason}"` : ''}`,
      type: 'warning',
      link: '/problems',
    });
  }

  return claim;
}
