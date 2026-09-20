import React, { useState, useEffect, useRef } from 'react';
import { Bell, CheckCheck, ExternalLink, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { 
  getNotificationsForRole, 
  markNotificationAsRead, 
  markAllNotificationsAsRead, 
  subscribeNotificationStore 
} from '../services/notificationStore';
import { AppNotification } from '../types';
import { useNavigate } from 'react-router-dom';

export const NotificationBell: React.FC = () => {
  const { user, systemRole } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncNotifs = () => {
      if (!user) return;
      const list = getNotificationsForRole(systemRole, user.id);
      setNotifications(list);
    };

    syncNotifs();
    const unsub = subscribeNotificationStore(syncNotifs);
    return () => unsub();
  }, [user, systemRole]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleNotificationClick = (notif: AppNotification) => {
    markNotificationAsRead(notif.id);
    setIsOpen(false);
    if (notif.link) {
      navigate(notif.link);
    }
  };

  const handleMarkAllRead = () => {
    markAllNotificationsAsRead(systemRole);
  };

  const formatTimeAgo = (isoDate: string) => {
    const diffMs = Date.now() - new Date(isoDate).getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${Math.floor(diffHours / 24)}d ago`;
  };

  return (
    <div className="relative" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl text-[#A8A5A0] hover:text-[#F2F0EB] hover:bg-[#12151C] transition-colors border border-transparent hover:border-[#242834]"
        title="Notifications"
      >
        <Bell className="w-5 h-5 text-[#FFB020]" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center shadow-md animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#12151C] border border-[#242834] rounded-3xl shadow-2xl z-[1000] overflow-hidden space-y-0">
          {/* Header */}
          <div className="p-4 border-b border-[#242834] flex items-center justify-between bg-[#0B0E14]">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#FFB020]" />
              <h4 className="font-display text-xs font-extrabold text-[#F2F0EB]">
                Notifications
              </h4>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#FFB020]/20 text-[#FFB020] border border-[#FFB020]/30">
                  {unreadCount} unread
                </span>
              )}
            </div>

            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllRead}
                className="text-[10px] font-bold text-[#FFB020] hover:underline flex items-center gap-1"
              >
                <CheckCheck className="w-3 h-3" /> Mark all read
              </button>
            )}
          </div>

          {/* List Content */}
          <div className="max-h-80 overflow-y-auto divide-y divide-[#242834]">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-xs text-[#6E6B65] space-y-1">
                <Sparkles className="w-6 h-6 mx-auto opacity-50 text-[#FFB020]" />
                <p className="font-bold text-[#F2F0EB]">No notifications yet</p>
                <p className="text-[10px]">Important updates will appear here live.</p>
              </div>
            ) : (
              notifications.map((n) => (
                <div
                  key={n.id}
                  onClick={() => handleNotificationClick(n)}
                  className={`p-3.5 text-xs transition-colors cursor-pointer flex items-start gap-3 ${
                    n.read ? 'bg-[#12151C]/60 hover:bg-[#1A1E28]' : 'bg-[#1A1E28] hover:bg-[#242834]'
                  }`}
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h5 className={`font-bold ${n.read ? 'text-[#A8A5A0]' : 'text-[#F2F0EB]'}`}>
                        {n.title}
                      </h5>
                      <span className="text-[9px] text-[#6E6B65] shrink-0">
                        {formatTimeAgo(n.createdAt)}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A8A5A0] leading-snug">
                      {n.message}
                    </p>
                  </div>

                  {n.link && (
                    <ExternalLink className="w-3.5 h-3.5 text-[#6E6B65] shrink-0 mt-0.5" />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
