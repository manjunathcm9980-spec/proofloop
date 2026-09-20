import { AppNotification, SystemRole } from '../types';

const STORAGE_KEY = 'proofloop_notifications';
const BROADCAST_CHANNEL_NAME = 'proofloop_notification_channel';

const initialNotifications: AppNotification[] = [
  {
    id: 'notif_seed_1',
    recipientRole: 'student',
    recipientId: 'usr_student_manjunath',
    title: '👋 Welcome to ProofLoop',
    message: 'Connect real-world problems with verified student builders.',
    type: 'info',
    link: '/verify-student',
    read: false,
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
  {
    id: 'notif_seed_2',
    recipientRole: 'admin',
    recipientId: 'usr_admin_master',
    title: '📄 New Student Verification Request',
    message: 'Manjunath (Yenepoya University) uploaded college ID card for verification.',
    type: 'warning',
    link: '/admin',
    read: false,
    createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
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

export function subscribeNotificationStore(listener: Listener): () => void {
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

export function getNotifications(): AppNotification[] {
  if (typeof window === 'undefined') return initialNotifications;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialNotifications));
      return initialNotifications;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to read notifications:', err);
    return initialNotifications;
  }
}

export function saveNotifications(notifications: AppNotification[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
    notifyListeners();
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'NOTIFICATIONS_UPDATED', timestamp: Date.now() });
    }
  } catch (err) {
    console.error('Failed to save notifications:', err);
  }
}

export function getNotificationsForRole(role: SystemRole, userId?: string): AppNotification[] {
  const all = getNotifications();
  return all.filter(n => {
    if (n.recipientRole !== role) return false;
    if (n.recipientId && userId && n.recipientId !== userId && n.recipientId !== 'all') {
      return false;
    }
    return true;
  });
}

export function addNotification(payload: Omit<AppNotification, 'id' | 'read' | 'createdAt'>): AppNotification {
  const notifications = getNotifications();
  const newNotif: AppNotification = {
    id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    ...payload,
    read: false,
    createdAt: new Date().toISOString(),
  };

  notifications.unshift(newNotif);
  saveNotifications(notifications);
  return newNotif;
}

export function markNotificationAsRead(id: string): void {
  const notifications = getNotifications();
  const n = notifications.find(item => item.id === id);
  if (n) {
    n.read = true;
    saveNotifications(notifications);
  }
}

export function markAllNotificationsAsRead(role: SystemRole): void {
  const notifications = getNotifications();
  let updated = false;
  notifications.forEach(n => {
    if (n.recipientRole === role && !n.read) {
      n.read = true;
      updated = true;
    }
  });
  if (updated) {
    saveNotifications(notifications);
  }
}
