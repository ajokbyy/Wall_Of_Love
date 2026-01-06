
import React from 'react';
import { Platform } from '../types';
import { PLATFORM_CONFIG } from '../constants';

interface PlatformBadgeProps {
  platform: Platform;
  isLive?: boolean;
}

const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform, isLive }) => {
  const config = PLATFORM_CONFIG[platform];
  
  return (
    <div className="flex flex-col items-end gap-1">
      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${config.color} shadow-sm transition-all`}>
        {config.icon}
        <span>{config.label}</span>
      </div>
      {isLive && (
        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-1.5 py-0.5 rounded-md border border-emerald-100 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[8px] font-black text-emerald-600 uppercase tracking-tighter">Live Sync</span>
        </div>
      )}
    </div>
  );
};

export default PlatformBadge;
