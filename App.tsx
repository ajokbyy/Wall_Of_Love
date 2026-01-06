
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import WallOfLove from './components/WallOfLove';
import CouponSection from './components/CouponSection';

const Navbar = () => (
  <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 uppercase">Flex <span className="text-indigo-600">Watches</span></span>
        </Link>
        <div className="hidden sm:flex gap-8">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium text-sm uppercase tracking-wider">Collections</Link>
          <Link to="/wall-of-love" className="text-gray-600 hover:text-indigo-600 font-medium text-sm uppercase tracking-wider">Wall of Love</Link>
          <Link to="/rewards" className="text-gray-600 hover:text-indigo-600 font-medium text-sm uppercase tracking-wider">Rewards</Link>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs mb-6">Established 2024</span>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-none uppercase italic">
          Master Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-indigo-950 to-indigo-600">Time</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
          Precision engineering meets timeless design. Discover the collection that watch enthusiasts and professional athletes swear by.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
           <button className="px-10 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all shadow-2xl uppercase tracking-widest text-sm">Explore Collection</button>
           <Link to="/rewards" className="px-10 py-4 bg-white border-2 border-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-50 transition-all uppercase tracking-widest text-sm">View Offers</Link>
        </div>
      </div>
    </section>

    {/* Product Preview (Simulation) */}
    <section className="bg-gray-50 py-24 px-4 border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 text-center md:text-left gap-4">
           <div>
             <h2 className="text-4xl font-bold text-gray-900 mb-2 uppercase tracking-tight">The Essentials</h2>
             <p className="text-gray-500 text-lg">Meticulously crafted for the modern individual.</p>
           </div>
           <Link to="/products" className="text-indigo-600 font-bold hover:underline tracking-widest uppercase text-sm">View Catalog →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Chrono Steel Pro", price: "249", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a1b?auto=format&fit=crop&q=80&w=600" },
            { name: "Aqua Diver 200m", price: "329", img: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=600" },
            { name: "Midnight Explorer", price: "199", img: "https://images.unsplash.com/photo-1508685096489-7aac29145fe0?auto=format&fit=crop&q=80&w=600" }
          ].map((watch, i) => (
            <div key={i} className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-indigo-50">
               <div className="aspect-[4/5] bg-gray-50 rounded-2xl mb-6 overflow-hidden">
                  <img src={watch.img} alt={watch.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
               <h3 className="font-bold text-xl text-gray-900 mb-1">{watch.name}</h3>
               <p className="text-gray-400 text-sm mb-6 font-medium">Japanese Quartz Movement</p>
               <div className="flex justify-between items-center">
                  <span className="text-2xl font-black text-gray-900">${watch.price}</span>
                  <button className="px-5 py-2 bg-black text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-indigo-600 transition-colors">Add To Bag</button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Wall of Love Preview Section */}
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto pt-24 px-4">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-bold tracking-[0.3em] uppercase text-xs">Community Love</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 tracking-tight uppercase italic">Trusted by <span className="text-indigo-600">Collectors</span></h2>
        </div>
        <WallOfLove initialLimit={6} showFilters={false} compact={true} />
        <div className="text-center pb-24">
          <Link 
            to="/wall-of-love" 
            className="group inline-flex items-center gap-2 text-gray-900 font-black text-lg uppercase tracking-widest hover:text-indigo-600 transition-colors"
          >
            Explore all 2,500+ stories
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  </div>
);

const WallOfLovePage = () => (
  <div className="bg-gray-50 min-h-screen">
    <WallOfLove initialLimit={9} />
  </div>
);

const ProductPage = () => (
  <div className="bg-white py-24">
    {/* Product content here as before */}
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wall-of-love" element={<WallOfLovePage />} />
            <Route path="/rewards" element={<CouponSection />} />
            <Route path="/products" element={<ProductPage />} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-gray-100 py-20 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Flex <span className="text-indigo-600">Watches</span></span>
              <p className="text-gray-500 text-sm mt-4 max-w-xs leading-relaxed font-medium">Defining modern timekeeping since 2024. Engineering excellence meets Italian design sensibility.</p>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-widest text-gray-900 mb-6">Collections</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-400">
                <li><a href="#" className="hover:text-indigo-600">The Diver</a></li>
                <li><a href="#" className="hover:text-indigo-600">Heritage Classic</a></li>
                <li><a href="#" className="hover:text-indigo-600">Minimalist</a></li>
                <li><a href="#" className="hover:text-indigo-600">Limited Editions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-xs uppercase tracking-widest text-gray-900 mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-400">
                <li><Link to="/rewards" className="hover:text-indigo-600">Coupon Codes</Link></li>
                <li><Link to="/wall-of-love" className="hover:text-indigo-600">Community Stories</Link></li>
                <li><a href="#" className="hover:text-indigo-600">Shipping Info</a></li>
                <li><a href="#" className="hover:text-indigo-600">Returns</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
