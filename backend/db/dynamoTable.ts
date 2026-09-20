/**
 * ProofLoop - DynamoDB Single-Table Store & Local In-Memory Emulator Layer
 * 
 * AWS DynamoDB Single-Table Design:
 * Table Name: ProofLoopData
 * Partition Key (PK): String
 * Sort Key (SK): String
 * GSI1PK: String (e.g. STATUS#open, PROOF_STATUS#validated)
 * GSI1SK: String (e.g. CREATED#2026-09-19T10:00:00Z)
 */

import { Problem, BuildLog, Proof, User, ProofWallCardItem } from '../../src/types/index';

// Initial Seed Data for immediate high-quality demo out of the box
const initialUsers: User[] = [
  {
    id: 'usr_poster_1',
    email: 'sarah.lin@hopefoodbank.org',
    name: 'Sarah Lin',
    role: 'poster',
    bio: 'Outreach Director at Hope Valley Food Bank. Connecting surplus food to families.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    createdAt: '2026-09-10T08:00:00Z'
  },
  {
    id: 'usr_poster_2',
    email: 'marcus@vancewoodworking.com',
    name: 'Marcus Vance',
    role: 'poster',
    bio: 'Independent artisan woodworker running a local custom furniture shop.',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    createdAt: '2026-09-12T10:30:00Z'
  },
  {
    id: 'usr_poster_3',
    email: 'elena@humanesociety.org',
    name: 'Elena Rostova',
    role: 'poster',
    bio: 'Shelter Manager at Eastside Animal Rescue. Helping pets find forever homes.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    createdAt: '2026-09-14T09:15:00Z'
  },
  {
    id: 'usr_builder_1',
    email: 'alex.rivera@university.edu',
    name: 'Alex Rivera',
    role: 'builder',
    bio: 'Computer Science Senior @ State Tech. Passionate about full-stack web apps and social impact.',
    skills: ['React', 'TypeScript', 'Node.js', 'DynamoDB', 'AWS Lambda'],
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    createdAt: '2026-09-11T14:20:00Z'
  },
  {
    id: 'usr_builder_2',
    email: 'priya.sharma@state.edu',
    name: 'Priya Sharma',
    role: 'builder',
    bio: 'Frontend & UI/UX Developer focusing on lightweight web applications for small businesses.',
    skills: ['React', 'TailwindCSS', 'REST APIs', 'UI/UX Design'],
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    createdAt: '2026-09-13T11:00:00Z'
  }
];

const initialProblems: Problem[] = [
  {
    id: 'prob_101',
    title: 'Food Bank Expiry & Surplus Redistribution Dashboard',
    description: 'Our food bank processes ~2 tons of donated food weekly. Volunteers currently log batch expiration dates on paper whiteboards, leading to accidental food spoilage and missed donation pickups from grocery partners. We need a simple web dashboard where staff can quickly log perishables, get automated 48-hour expiration alerts, and dispatch pickup requests to local partner pantries.',
    category: 'Non-Profit',
    urgency: 'High',
    whoAffected: 'Hope Valley Food Bank staff, 350+ weekly food pantry recipients, and 12 grocery donors.',
    skillsNeeded: ['React', 'Node.js', 'Database', 'Twilio / Email Alerts'],
    posterId: 'usr_poster_1',
    posterName: 'Sarah Lin (Hope Valley Food Bank)',
    status: 'solved',
    claimedBy: 'usr_builder_1',
    claimedByName: 'Alex Rivera',
    claimedAt: '2026-09-12T09:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
    createdAt: '2026-09-10T09:30:00Z'
  },
  {
    id: 'prob_102',
    title: 'Custom Artisan Furniture Deposit & Invoice Portal',
    description: 'As a solo craftsman, I waste 6+ hours every week texting clients back and forth to confirm custom timber orders, compute material deposits (50%), and email PDF invoices. I need a straightforward portal where clients can review item specs, sign off on deposit terms, and pay/track invoice status without complex ERP software.',
    category: 'Small Business',
    urgency: 'Medium',
    whoAffected: 'Vance Woodworking and 15-20 active custom furniture clients per month.',
    skillsNeeded: ['React', 'Tailwind', 'Stripe / Payment API', 'PDF Generation'],
    posterId: 'usr_poster_2',
    posterName: 'Marcus Vance (Vance Woodworking)',
    status: 'claimed',
    claimedBy: 'usr_builder_2',
    claimedByName: 'Priya Sharma',
    claimedAt: '2026-09-15T10:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&auto=format&fit=crop&q=80',
    createdAt: '2026-09-12T11:00:00Z'
  },
  {
    id: 'prob_103',
    title: 'Interactive Shelter Pet Personality & Lifestyle Matchmaker',
    description: 'High return rates happen when adopters pick shelter dogs based solely on photos rather than energy level, living space, and family dynamic. We need an interactive 5-question matchmaker quiz that takes potential adopters through lifestyle preferences and filters our current shelter animals by temperament compatibility.',
    category: 'Non-Profit',
    urgency: 'High',
    whoAffected: 'Eastside Animal Rescue, 80+ shelter dogs/cats, and prospective pet adopters.',
    skillsNeeded: ['React', 'JavaScript', 'Responsive UI', 'Filter Logic'],
    posterId: 'usr_poster_3',
    posterName: 'Elena Rostova (Eastside Animal Rescue)',
    status: 'open',
    imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&auto=format&fit=crop&q=80',
    createdAt: '2026-09-14T10:00:00Z'
  },
  {
    id: 'prob_104',
    title: 'Community Garden Plot Reservation & Watering Schedule App',
    description: 'Our 40-plot neighborhood garden uses a paper sign-up sheet pinned to a wooden post. Neighbors frequently double-book plots or forget their watering rotations. We need a web app where residents can claim available plots, view seasonal planting guides, and receive watering reminders.',
    category: 'Community',
    urgency: 'Medium',
    whoAffected: '60+ community gardeners in Oakridge neighborhood.',
    skillsNeeded: ['React', 'Calendar UI', 'Express / Node.js'],
    posterId: 'usr_poster_1',
    posterName: 'Sarah Lin',
    status: 'solved',
    claimedBy: 'usr_builder_1',
    claimedByName: 'Alex Rivera',
    claimedAt: '2026-09-14T14:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80',
    createdAt: '2026-09-13T16:00:00Z'
  },
  {
    id: 'prob_105',
    title: 'Accessible PDF Document Formatter for Special Ed Classrooms',
    description: 'Special Education teachers spend hours formatting lesson worksheets so screen readers can parse headings, tables, and images properly. We need a web tool where teachers upload raw DOCX/PDF files and receive an accessible, screen-reader validated PDF with automatically generated alt-text suggestions.',
    category: 'Education',
    urgency: 'High',
    whoAffected: '24 Special Education teachers and 140+ visually impaired students across 4 local schools.',
    skillsNeeded: ['TypeScript', 'PDF Parsing / Accessibility', 'AI / OpenAI API'],
    posterId: 'usr_poster_3',
    posterName: 'Elena Rostova',
    status: 'open',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
    createdAt: '2026-09-16T12:00:00Z'
  }
];

const initialBuildLogs: BuildLog[] = [
  {
    id: 'log_201',
    problemId: 'prob_101',
    builderId: 'usr_builder_1',
    builderName: 'Alex Rivera',
    text: 'Connected DynamoDB table for inventory tracking and built the real-time food batch expiration countdown widget.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    createdAt: '2026-09-14T15:30:00Z'
  },
  {
    id: 'log_202',
    problemId: 'prob_101',
    builderId: 'usr_builder_1',
    builderName: 'Alex Rivera',
    text: 'Integrated Twilio SMS gateway + AWS SNS to automatically send SMS notifications to 3 partner pantries when perishables hit 48h to expiration.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    createdAt: '2026-09-16T11:00:00Z'
  },
  {
    id: 'log_203',
    problemId: 'prob_102',
    builderId: 'usr_builder_2',
    builderName: 'Priya Sharma',
    text: 'Designed responsive furniture quote builder component with automated 50% deposit breakdown calculations.',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    createdAt: '2026-09-16T16:45:00Z'
  }
];

const initialProofs: Proof[] = [
  {
    id: 'prf_301',
    problemId: 'prob_101',
    builderId: 'usr_builder_1',
    builderName: 'Alex Rivera',
    summary: 'Built and deployed a production-ready Food Pantry Expiration & Alert Dashboard on AWS (Vite + DynamoDB + SNS). Hope Valley Food Bank tested it with 45 real batch items; 0 food spoiled this week and 180 lbs of produce were redistributed on time!',
    demoUrl: '/problems/prob_101',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80',
    status: 'validated',
    posterComment: 'Validated by Sarah Lin (Hope Valley Food Bank)! "Alex built exactly what our volunteers needed. The automated 48-hour SMS alerts saved 180 lbs of fresh vegetables from being wasted on day 1. Fantastic job!"',
    createdAt: '2026-09-17T14:00:00Z',
    updatedAt: '2026-09-18T09:30:00Z'
  },
  {
    id: 'prf_302',
    problemId: 'prob_104',
    builderId: 'usr_builder_1',
    builderName: 'Alex Rivera',
    summary: 'Created Oakridge Garden Plot Booking Web App with interactive grid map, automated watering calendar sync, and SMS reminders.',
    demoUrl: '/problems/prob_104',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1000&auto=format&fit=crop&q=80',
    status: 'validated',
    posterComment: 'Validated by Sarah Lin! "No more double-booked plots or dead tomato plants. The interactive grid map was an instant hit with our neighborhood gardeners."',
    createdAt: '2026-09-18T10:00:00Z',
    updatedAt: '2026-09-18T16:20:00Z'
  }
];

// In-Memory Data Store
let dbUsers: User[] = [...initialUsers];
let dbProblems: Problem[] = [...initialProblems];
let dbBuildLogs: BuildLog[] = [...initialBuildLogs];
let dbProofs: Proof[] = [...initialProofs];

export const db = {
  getUserById: (id: string) => dbUsers.find(u => u.id === id),
  getUserByEmail: (email: string) => dbUsers.find(u => u.email.toLowerCase() === email.toLowerCase()),
  createUser: (user: User) => {
    dbUsers.push(user);
    return user;
  },

  getProblems: (filters?: { category?: string; status?: string; search?: string }) => {
    let list = [...dbProblems];
    if (filters?.category && filters.category !== 'All') {
      list = list.filter(p => p.category === filters.category);
    }
    if (filters?.status && filters.status !== 'All') {
      list = list.filter(p => p.status === filters.status);
    }
    if (filters?.search) {
      const q = filters.search.toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.whoAffected.toLowerCase().includes(q));
    }
    return list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  getProblemById: (id: string) => dbProblems.find(p => p.id === id),

  createProblem: (problem: Problem) => {
    dbProblems.unshift(problem);
    return problem;
  },

  updateProblemStatus: (id: string, status: Problem['status'], claimedBy?: { id: string; name: string }) => {
    const problem = dbProblems.find(p => p.id === id);
    if (!problem) return null;
    problem.status = status;
    if (claimedBy) {
      problem.claimedBy = claimedBy.id;
      problem.claimedByName = claimedBy.name;
      problem.claimedAt = new Date().toISOString();
    }
    return problem;
  },

  getBuildLogsByProblemId: (problemId: string) => {
    return dbBuildLogs
      .filter(l => l.problemId === problemId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  },

  addBuildLog: (log: BuildLog) => {
    dbBuildLogs.unshift(log);
    const problem = dbProblems.find(p => p.id === log.problemId);
    if (problem && problem.status === 'claimed') {
      problem.status = 'in_progress';
    }
    return log;
  },

  getProofByProblemId: (problemId: string) => {
    return dbProofs.find(p => p.problemId === problemId);
  },

  submitProof: (proof: Proof) => {
    const existingIndex = dbProofs.findIndex(p => p.problemId === proof.problemId);
    if (existingIndex >= 0) {
      dbProofs[existingIndex] = proof;
    } else {
      dbProofs.unshift(proof);
    }
    return proof;
  },

  validateProof: (proofId: string, status: 'validated' | 'rejected', posterComment?: string) => {
    const proof = dbProofs.find(p => p.id === proofId);
    if (!proof) return null;
    proof.status = status;
    proof.posterComment = posterComment;
    proof.updatedAt = new Date().toISOString();

    if (status === 'validated') {
      const problem = dbProblems.find(p => p.id === proof.problemId);
      if (problem) {
        problem.status = 'solved';
      }
    }
    return proof;
  },

  getProofWallItems: (): ProofWallCardItem[] => {
    const validatedProofs = dbProofs.filter(p => p.status === 'validated');
    const items: ProofWallCardItem[] = [];
    for (const proof of validatedProofs) {
      const problem = dbProblems.find(p => p.id === proof.problemId);
      if (problem) {
        const logs = dbBuildLogs.filter(l => l.problemId === proof.problemId);
        items.push({
          problem,
          proof,
          buildLogCount: logs.length
        });
      }
    }
    return items;
  }
};
