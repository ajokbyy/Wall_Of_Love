
import React, { useState } from 'react';
import { Coupon } from '../types';

interface CouponCardProps {
  coupon: Coupon;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(coupon.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'welcome': return 'bg-indigo-100 text-indigo-700';
      case 'limited': return 'bg-red-100 text-red-700';
      case 'seasonal': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="relative group bg-white border-2 border-dashed border-gray-200 rounded-3xl p-6 transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      {/* Decorative Cutouts */}
      <div className="absolute top-1/2 -left-3 w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full -translate-y-1/2"></div>
      <div className="absolute top-1/2 -right-3 w-6 h-6 bg-gray-50 border-2 border-gray-200 rounded-full -translate-y-1/2"></div>
      
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${getCategoryColor(coupon.category)}`}>
            {coupon.category}
          </span>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Exp: {coupon.expiryDate}
          </span>
        </div>

        <h3 className="text-4xl font-black text-gray-900 mb-2 italic uppercase leading-none">
          {coupon.discount}
        </h3>
        <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">
          {coupon.description}
        </p>

        <div className="mt-auto">
          <button
            onClick={handleCopy}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 font-mono text-sm font-bold tracking-widest
              ${copied 
                ? 'bg-emerald-50 border-emerald-500 text-emerald-700' 
                : 'bg-gray-50 border-gray-200 text-gray-900 hover:border-indigo-500 hover:bg-indigo-50'
              }`}
          >
            <span>{copied ? 'COPIED!' : coupon.code}</span>
            <svg 
              className={`w-5 h-5 transition-transform ${copied ? 'scale-110' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {copied ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
