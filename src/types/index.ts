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

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  bio?: string;
  skills?: string[];
  avatarUrl?: string;
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
