
import React, { useState, useMemo, useEffect } from 'react';
import { MOCK_TESTIMONIALS } from '../services/mockData';
import { FilterType, Testimonial, Platform } from '../types';
import TestimonialCard from './TestimonialCard';
import FilterBar from './FilterBar';
import { fetchYouTubeTestimonials } from '../services/youtubeService';
import { fetchLocalTestimonials } from '../services/apiService';

interface WallOfLoveProps {
  initialLimit?: number;
  showFilters?: boolean;
  compact?: boolean;
}

const WallOfLove: React.FC<WallOfLoveProps> = ({ 
  initialLimit = 9, 
  showFilters = true,
  compact = false 
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [visibleCount, setVisibleCount] = useState(initialLimit);
  const [youtubeData, setYoutubeData] = useState<Testimonial[]>([]);
  const [localData, setLocalData] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadAllSources() {
      setIsLoading(true);
      try {
        // Fetch from YouTube and Local MongoDB concurrently
        const [ytItems, dbItems] = await Promise.all([
          fetchYouTubeTestimonials(),
          fetchLocalTestimonials()
        ]);
        
        setYoutubeData(ytItems);
        setLocalData(dbItems);
      } catch (error) {
        console.error("Failed to sync data sources:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadAllSources();
  }, []);

  const combinedData = useMemo(() => {
    // Merge all sources: Local DB + Mock Data + Live YouTube API Data
    // We sort by ID as a stable way to mix the sources, 
    // but in a real app you'd likely sort by timestamp.
    const all = [...localData, ...MOCK_TESTIMONIALS, ...youtubeData];

    return all.sort((a, b) => a.id.localeCompare(b.id));
  }, [youtubeData, localData]);

  const filteredData = useMemo(() => {
    return combinedData.filter(item => 
      activeFilter === 'all' ? true : item.platform === activeFilter
    );
  }, [activeFilter, combinedData]);

  const displayedData = filteredData.slice(0, visibleCount);
  const hasMore = visibleCount < filteredData.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${compact ? 'py-12' : 'py-20'}`}>
      {!compact && (
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight uppercase italic">
            Voices of the <span className="text-indigo-600">Circle</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Real stories from Flex Watches owners, synced live from YouTube and our global database.
          </p>
        </div>
      )}

      {showFilters && (
        <FilterBar 
          activeFilter={activeFilter} 
          onFilterChange={(f) => {
            setActiveFilter(f);
            setVisibleCount(initialLimit);
          }} 
        />
      )}

      {isLoading && displayedData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Calibrating Data Feeds...</p>
        </div>
      ) : filteredData.length > 0 ? (
        <>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {displayedData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-black rounded-full hover:bg-indigo-600 shadow-xl uppercase tracking-widest text-xs"
              >
                Load more love
                <svg className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-gray-100">
          <p className="text-gray-400 text-lg font-bold uppercase tracking-widest">No signals found in this frequency.</p>
        </div>
      )}
      
      {/* Dev Tip (Visible only during local development) */}
      {!isLoading && localData.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-[10px] text-gray-300 uppercase font-black tracking-widest">
            Note: Start `server.js` to see local MongoDB reviews here.
          </p>
        </div>
      )}
    </div>
  );
};

export default WallOfLove;
