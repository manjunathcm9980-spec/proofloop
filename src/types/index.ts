/**
 * Data Model Types for ProofLoop
 * 
 * Target AWS Architecture:
 * Single Table DynamoDB Item Types mapped via PK/SK:
 * - User: PK="USER#<id>", SK="METADATA#<id>"
 * - Problem: PK="PROBLEM#<id>", SK="METADATA#<id>"
 * - BuildLog: PK="PROBLEM#<problem_id>", SK="LOG#<created_at>#<id>"
 * - Proof: PK="PROBLEM#<problem_id>", SK="PROOF#<id>"
 */

export type UserRole = 'poster' | 'builder';
export type SystemRole = 'student' | 'admin';

export type CollegeVerificationStatus = 'pending' | 'approved' | 'rejected';

export interface CollegeVerificationRequest {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  collegeName: string;
  courseBranch: string;
  yearSemester: string;
  idCardUrl: string;
  idFileName?: string;
  status: CollegeVerificationStatus;
  submittedAt: string;
  reviewedAt?: string;
  rejectionReason?: string;
}

export type ClaimStatus = 'pending' | 'approved' | 'rejected';

export interface ProblemClaimRequest {
  id: string;
  problemId: string;
  problemTitle: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  collegeName: string;
  matchPercentage: number;
  matchedSkills: string[];
  missingSkills: string[];
  status: ClaimStatus;
  submittedAt: string;
  reviewedAt?: string;
  rejectionReason?: string;
}

export type ProjectProofStatus = 'draft' | 'submitted' | 'under_review' | 'changes_requested' | 'verified' | 'rejected';

export interface ProjectProofSubmission {
  id: string;
  studentId: string;
  studentName: string;
  studentEmail: string;
  collegeName: string;
  projectName: string;
  problemBeingSolved: string;
  problemTitle?: string;
  description: string;
  githubUrl?: string;
  liveUrl?: string;
  liveDemoUrl?: string;
  demoVideoUrl?: string;
  techStack: string[];
  screenshotUrl: string;
  additionalProof?: string;
  status: ProjectProofStatus;
  adminFeedback?: string;
  requestedChanges?: string[];
  proofScore: number;
  submittedAt: string;
  verifiedAt?: string;
}

export interface AppNotification {
  id: string;
  recipientRole: SystemRole;
  recipientId?: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'info' | 'badge';
  link?: string;
  read: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  systemRole?: SystemRole;
  bio?: string;
  skills?: string[];
  avatarUrl?: string;
  collegeName?: string;
  courseBranch?: string;
  yearSemester?: string;
  verificationStatus?: CollegeVerificationStatus;
  verificationRequestId?: string;
  createdAt: string;
}

export type ProblemCategory = 
  | 'Community' 
  | 'Small Business' 
  | 'Non-Profit' 
  | 'Education' 
  | 'Developer Tools' 
  | 'Other';

export type ProblemUrgency = 'Low' | 'Medium' | 'High' | 'Critical';

export type ProblemStatus = 'open' | 'claimed' | 'in_progress' | 'solved';

export interface Problem {
  id: string;
  title: string;
  description: string;
  category: ProblemCategory;
  urgency: ProblemUrgency;
  whoAffected: string;
  skillsNeeded: string[];
  posterId: string;
  posterName: string;
  status: ProblemStatus;
  claimedBy?: string;
  claimedByName?: string;
  claimedAt?: string;
  imageUrl?: string;
  createdAt: string;
}

export interface BuildLog {
  id: string;
  problemId: string;
  builderId: string;
  builderName: string;
  text: string;
  imageUrl?: string;
  createdAt: string;
}

export type ProofStatus = 'pending' | 'validated' | 'rejected';

export interface Proof {
  id: string;
  problemId: string;
  builderId: string;
  builderName: string;
  summary: string;
  demoUrl: string;
  imageUrl?: string;
  status: ProofStatus;
  posterComment?: string;
  createdAt: string;
  updatedAt?: string;
}

// Combined View Item for Public Proof Wall
export interface ProofWallCardItem {
  problem: Problem;
  proof: Proof;
  buildLogCount: number;
}
