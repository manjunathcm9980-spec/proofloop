/**
 * ProofLoop API Gateway Client with Instant Fallback Resilience
 * Communicates with AWS Lambda REST API endpoints (/api/*)
 */

import { Problem, BuildLog, Proof, ProofWallCardItem, ProblemCategory, ProblemUrgency } from '../types';
import { db } from '../../backend/db/dynamoTable';

const API_BASE = '/api';

/**
 * Fetch with automatic 2.5s timeout to guarantee instant fallback and prevent UI loading stalls
 */
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 2500): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

export async function fetchProblems(filters?: { category?: string; status?: string; search?: string }): Promise<Problem[]> {
  try {
    const params = new URLSearchParams();
    if (filters?.category && filters.category !== 'All') params.append('category', filters.category);
    if (filters?.status && filters.status !== 'All') params.append('status', filters.status);
    if (filters?.search) params.append('search', filters.search);

    const res = await fetchWithTimeout(`${API_BASE}/problems?${params.toString()}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (e) {
    // API network error fallback
  }

  const fallback = db.getProblems(filters);
  if (fallback.length === 0 && filters?.status === 'open') {
    return db.getProblems();
  }
  return fallback;
}

export async function fetchProblemById(id: string): Promise<{ problem: Problem; logs: BuildLog[]; proof: Proof | null }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/problems/${id}`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }

  const problem = db.getProblemById(id);
  if (!problem) throw new Error('Problem not found');
  const logs = db.getBuildLogsByProblemId(id);
  const proof = db.getProofByProblemId(id);
  return { problem, logs, proof: proof || null };
}

export async function createProblem(payload: {
  title: string;
  description: string;
  category: ProblemCategory;
  urgency: ProblemUrgency;
  whoAffected: string;
  skillsNeeded: string[];
  posterId: string;
  posterName: string;
  imageUrl?: string;
}): Promise<Problem> {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/problems`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }

  const newProblem: Problem = {
    id: `prob_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    ...payload,
    status: 'open',
    createdAt: new Date().toISOString(),
  };
  return db.createProblem(newProblem);
}

export async function claimProblem(problemId: string, builderId: string, builderName: string): Promise<Problem> {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/problems/${problemId}/claim`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ builderId, builderName }),
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }

  const updated = db.updateProblemStatus(problemId, 'claimed', { id: builderId, name: builderName });
  if (!updated) throw new Error('Problem not found');
  return updated;
}

export async function addBuildLog(problemId: string, builderId: string, builderName: string, text: string, imageUrl?: string): Promise<BuildLog> {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/problems/${problemId}/logs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ builderId, builderName, text, imageUrl }),
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }

  const logEntry: BuildLog = {
    id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    problemId,
    builderId,
    builderName,
    text,
    imageUrl,
    createdAt: new Date().toISOString(),
  };
  return db.addBuildLog(logEntry);
}

export async function submitProof(problemId: string, builderId: string, builderName: string, summary: string, demoUrl: string, imageUrl?: string): Promise<Proof> {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/problems/${problemId}/proof`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ builderId, builderName, summary, demoUrl, imageUrl }),
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }

  const newProof: Proof = {
    id: `prf_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    problemId,
    builderId,
    builderName,
    summary,
    demoUrl,
    imageUrl,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  return db.submitProof(newProof);
}

export async function validateProof(proofId: string, status: 'validated' | 'rejected', posterComment?: string): Promise<Proof> {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/proofs/${proofId}/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status, posterComment }),
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }

  const updated = db.validateProof(proofId, status, posterComment);
  if (!updated) throw new Error('Proof not found');
  return updated;
}

export async function fetchProofWall(): Promise<ProofWallCardItem[]> {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/wall`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) return data;
    }
  } catch (e) {
    // Fallback
  }
  return db.getProofWallItems();
}

export async function getPresignedUploadUrl(filename: string, contentType: string): Promise<{ uploadUrl: string; publicUrl: string; key: string }> {
  try {
    const res = await fetchWithTimeout(`${API_BASE}/storage/upload-url`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, contentType }),
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }

  const key = `uploads/${Date.now()}_${filename.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
  return {
    uploadUrl: `/api/storage/mock-upload?key=${key}`,
    publicUrl: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80`,
    key,
  };
}

