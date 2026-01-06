
import React from 'react';
import { FilterType, Platform } from '../types';

interface FilterBarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onFilterChange }) => {
  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: 'All Love' },
    { id: Platform.TWITTER, label: 'Twitter' },
    { id: Platform.INSTAGRAM, label: 'Instagram' },
    { id: Platform.YOUTUBE, label: 'YouTube' },
    { id: Platform.REVIEW, label: 'Reviews' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm
            ${activeFilter === filter.id 
              ? 'bg-indigo-600 text-white shadow-indigo-200 scale-105' 
              : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-indigo-600'
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
