
import React, { useState } from 'react';
import { Testimonial } from '../types';
import PlatformBadge from './PlatformBadge';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { user, content, platform, timestamp, mediaUrl, verified, product, isLive } = testimonial;

  const charLimit = 180;
  const isLong = content.length > charLimit;
  const displayContent = isLong && !isExpanded ? content.slice(0, charLimit) + '...' : content;

  return (
    <div className="masonry-item group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {mediaUrl && (
        <div className="relative overflow-hidden aspect-auto max-h-96">
          <img 
            src={mediaUrl} 
            alt="Customer shared media" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute top-3 right-3">
             <PlatformBadge platform={platform} isLive={isLive} />
          </div>
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div>
              <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                {user.name}
                {verified && (
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.25.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                  </svg>
                )}
              </h4>
              <p className="text-xs text-gray-500 font-medium">{user.handle}</p>
            </div>
          </div>
          {!mediaUrl && <PlatformBadge platform={platform} isLive={isLive} />}
        </div>

        <div className="relative">
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap italic">
            "{displayContent}"
          </p>
          {isLong && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-indigo-600 text-xs font-semibold mt-2 hover:underline focus:outline-none"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {product && (
          <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
            <span className="text-[10px] font-medium text-gray-400 uppercase">Purchased:</span>
            <span className="text-[11px] font-semibold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md">{product}</span>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[10px] text-gray-400 font-medium">{timestamp}</span>
          <div className="flex gap-1.5">
             <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
