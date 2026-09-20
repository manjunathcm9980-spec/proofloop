/**
 * ProofLoop Auth Service - Amazon Cognito Integration & Local Fallback
 * 
 * AWS Cognito User Pool setup configuration:
 * Pool ID: us-east-1_ProofLoopUserPool
 * Client ID: 4proofloopappclientid1234
 * Custom Attribute: custom:role ("poster" | "builder")
 */

import { User, UserRole } from '../types';

const STORAGE_KEY = 'proofloop_auth_user';

export const DEMO_POSTER: User = {
  id: 'usr_poster_1',
  email: 'sarah.lin@hopefoodbank.org',
  name: 'Sarah Lin',
  role: 'poster',
  bio: 'Outreach Director at Hope Valley Food Bank. Connecting surplus food to families.',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
  createdAt: '2026-09-10T08:00:00Z',
};

export const DEMO_BUILDER: User = {
  id: 'usr_builder_1',
  email: 'alex.rivera@university.edu',
  name: 'Alex Rivera',
  role: 'builder',
  bio: 'Computer Science Senior @ State Tech. Building web solutions for social impact.',
  skills: ['React', 'TypeScript', 'Node.js', 'AWS DynamoDB', 'Lambda'],
  avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
  createdAt: '2026-09-11T14:20:00Z',
};

export function getStoredUser(): User | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : DEMO_BUILDER; // Default to DEMO_BUILDER for immediate active experience
  } catch {
    return DEMO_BUILDER;
  }
}

export function storeUser(user: User | null): void {
  if (user) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}
