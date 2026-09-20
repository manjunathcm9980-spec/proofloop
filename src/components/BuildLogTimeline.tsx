import React from 'react';
import { BuildLog } from '../types';
import { Clock, Layers, Sparkles, FolderGit2 } from 'lucide-react';

interface BuildLogTimelineProps {
  logs: BuildLog[];
}

export const BuildLogTimeline: React.FC<BuildLogTimelineProps> = ({ logs }) => {
  if (!logs || logs.length === 0) {
    return (
      <div className="p-10 rounded-2xl bg-[#0B0E14] border border-[#242834] text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl bg-[#FFB020]/10 border border-[#FFB020]/20 flex items-center justify-center mx-auto text-[#FFB020]">
          <FolderGit2 className="w-6 h-6" />
        </div>
        <h4 className="font-display font-bold text-[#F2F0EB] text-sm">No Build Updates Logged Yet</h4>
        <p className="text-xs text-[#A8A5A0] max-w-sm mx-auto leading-relaxed">
          When the claimed student builder works on this project, their transparent build log progress & screenshots will appear right here.
        </p>
      </div>
    );
  }

  return (
    <div className="relative border-l-2 border-[#242834] pl-6 space-y-6 my-4">
      {logs.map((log) => (
        <div key={log.id} className="relative group">
          {/* Amber Timeline Node */}
          <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#0B0E14] border-2 border-[#FFB020] group-hover:bg-[#FFB020] transition-colors shadow-sm shadow-[#FFB020]/30" />

          {/* Log Card */}
          <div className="p-5 rounded-2xl bg-[#0B0E14] border border-[#242834] space-y-2.5 hover:border-[#FFB020]/30 transition-colors">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#F2F0EB] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFB020]"></span>
                {log.builderName}
              </span>
              <span className="text-[#6E6B65] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {new Date(log.createdAt).toLocaleString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>

            <p className="text-sm text-[#A8A5A0] leading-relaxed">
              {log.text}
            </p>

            {log.imageUrl && (
              <div className="mt-3 rounded-xl overflow-hidden border border-[#242834] max-w-md">
                <img
                  src={log.imageUrl}
                  alt="Build log attachment"
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
