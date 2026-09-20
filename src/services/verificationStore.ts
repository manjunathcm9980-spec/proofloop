import { CollegeVerificationRequest, CollegeVerificationStatus } from '../types';
import { addNotification } from './notificationStore';

const STORAGE_KEY = 'proofloop_verification_requests';
const BROADCAST_CHANNEL_NAME = 'proofloop_verification_channel';

// Sample demo student verification request (Status: pending by default as per Task 1 specification)
const initialRequests: CollegeVerificationRequest[] = [
  {
    id: 'req_manjunath_101',
    studentId: 'usr_student_manjunath',
    studentName: 'Manjunath',
    studentEmail: 'manjunath@yenepoya.edu.in',
    collegeName: 'Yenepoya University',
    courseBranch: 'B.Tech AI/ML',
    yearSemester: '2nd Year',
    idCardUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    idFileName: 'Yenepoya_Student_ID_Card.jpg',
    status: 'pending',
    submittedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
  },
  {
    id: 'req_alex_102',
    studentId: 'usr_builder_1',
    studentName: 'Alex Rivera',
    studentEmail: 'alex.rivera@university.edu',
    collegeName: 'State Tech University',
    courseBranch: 'B.S. Computer Science',
    yearSemester: '4th Year',
    idCardUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    idFileName: 'StateTech_ID_AlexRivera.pdf',
    status: 'approved',
    submittedAt: '2026-09-18T10:00:00Z',
    reviewedAt: '2026-09-18T14:30:00Z',
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

export function subscribeVerificationStore(listener: Listener): () => void {
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

export function getVerificationRequests(): CollegeVerificationRequest[] {
  if (typeof window === 'undefined') return initialRequests;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialRequests));
      return initialRequests;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read verification requests:', err);
    return initialRequests;
  }
}

export function saveVerificationRequests(requests: CollegeVerificationRequest[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(requests));
    notifyListeners();
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'VERIFICATION_UPDATED', timestamp: Date.now() });
    }
  } catch (err) {
    console.error('Failed to save verification requests:', err);
  }
}

export function getVerificationByStudentId(studentId: string): CollegeVerificationRequest | undefined {
  const all = getVerificationRequests();
  return all.find(r => r.studentId === studentId || r.studentEmail.toLowerCase() === studentId.toLowerCase());
}

export function getVerificationById(id: string): CollegeVerificationRequest | undefined {
  return getVerificationRequests().find(r => r.id === id);
}

export function submitVerificationRequest(payload: {
  studentId: string;
  studentName: string;
  studentEmail: string;
  collegeName: string;
  courseBranch: string;
  yearSemester: string;
  idCardUrl: string;
  idFileName?: string;
}): CollegeVerificationRequest {
  const requests = getVerificationRequests();
  const existingIndex = requests.findIndex(r => r.studentId === payload.studentId || r.studentEmail.toLowerCase() === payload.studentEmail.toLowerCase());

  const newReq: CollegeVerificationRequest = {
    id: existingIndex >= 0 ? requests[existingIndex].id : `req_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ...payload,
    status: 'pending',
    submittedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    requests[existingIndex] = newReq;
  } else {
    requests.unshift(newReq);
  }

  saveVerificationRequests(requests);

  // Notify Admin
  addNotification({
    recipientRole: 'admin',
    recipientId: 'usr_admin_master',
    title: '📄 New Student Verification Request',
    message: `${payload.studentName} (${payload.collegeName}) submitted college ID card for verification.`,
    type: 'warning',
    link: '/admin',
  });

  return newReq;
}

export function updateVerificationStatus(
  requestId: string,
  status: CollegeVerificationStatus,
  rejectionReason?: string
): CollegeVerificationRequest | undefined {
  const requests = getVerificationRequests();
  const req = requests.find(r => r.id === requestId);
  if (!req) return undefined;

  req.status = status;
  req.reviewedAt = new Date().toISOString();
  if (rejectionReason) {
    req.rejectionReason = rejectionReason;
  } else if (status === 'approved') {
    req.rejectionReason = undefined;
  }

  saveVerificationRequests(requests);

  // Trigger Notifications to Student
  if (status === 'approved') {
    addNotification({
      recipientRole: 'student',
      recipientId: req.studentId,
      title: '🎉 Student Verification Approved!',
      message: `Your college ID verification for ${req.collegeName} has been approved! +20 points added to your Proof Score.`,
      type: 'success',
      link: '/verify-student',
    });
  } else if (status === 'rejected') {
    addNotification({
      recipientRole: 'student',
      recipientId: req.studentId,
      title: '🔴 Student Verification Rejected',
      message: `Your college ID verification was rejected. Reason: "${rejectionReason || 'Invalid ID card image'}". Please resubmit a clear photo.`,
      type: 'warning',
      link: '/verify-student',
    });
  }

  return req;
}
