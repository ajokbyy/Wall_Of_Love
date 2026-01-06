
import React from 'react';
import { MOCK_COUPONS } from '../services/mockData';
import CouponCard from './CouponCard';

const CouponSection: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Exclusive Rewards</span>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase italic">
          Circle <span className="text-indigo-600">Benefits</span>
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
          Unlock premium timepieces for less. Copy your exclusive code and apply it at checkout.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {MOCK_COUPONS.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} />
        ))}
      </div>

      <div className="mt-20 bg-indigo-600 rounded-[3rem] p-12 text-center text-white overflow-hidden relative shadow-2xl shadow-indigo-200">
        <div className="relative z-10">
          <h3 className="text-3xl font-black uppercase italic mb-4">Have a story to share?</h3>
          <p className="text-indigo-100 mb-8 max-w-lg mx-auto font-medium">Post your Flex watch on Instagram with #FlexCircle and we'll send you a custom 25% OFF code for your next order.</p>
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all">Submit Your Story</button>
        </div>
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-700 rounded-full opacity-50 blur-3xl"></div>
      </div>
    </div>
  );
};

export default CouponSection;
