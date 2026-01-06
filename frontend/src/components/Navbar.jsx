import React from 'react';
import { Search, Zap, Heart, ShoppingCart } from 'lucide-react';

const row1 = [
  'FESTIVE SALE',
  'NEW IN',
  'WATCHES',
  'SUNGLASSES',
  'CHARMS',
  'COUPLE WATCHES',
  'LOVE TRIANGLES & STACKS',
  'WATCH BRACELET STACKS',
  'JEWELLERY',
];

const row2 = [
  'JEWELLERY SET',
  'BEWITCHED JEWELLERY',
  'GIFTING',
  'CLUTCHES',
  'INDIAN JEWELLERY',
  'WISHLIST',
];

const NavList = ({ items }) => (
  <ul className="flex flex-col items-center gap-4 text-[11px] tracking-[0.25em] uppercase text-gray-800">
    {items.map((item) => (
      <li key={item} className="whitespace-normal text-center">
        <a
          href="#"
          className="inline-block hover:text-black transition-colors"
        >
          {item}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col items-center py-8 overflow-y-auto z-50">

      {/* Search */}
      <div className="mb-8">
        <button
          aria-label="Search"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Search className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Logo */}
      <div className="mb-10 text-center px-4">
        <h1 className="text-2xl font-light tracking-[0.2em] uppercase text-black leading-tight">
          JOKER &<br />WITCH
        </h1>
      </div>

      {/* Navigation */}
      <div className="flex-1 w-full px-6 flex flex-col items-center space-y-8">
        <div className="w-full">
          <NavList items={row1} />
        </div>
        <div className="w-full">
          <NavList items={row2} />
        </div>
      </div>

      {/* Icons */}
      <div className="mt-8 flex gap-6 text-black">
        <button
          aria-label="Offers"
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Zap className="w-5 h-5" />
        </button>

        <button
          aria-label="Wishlist"
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors relative"
        >
          <Heart className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[9px] bg-red-600 text-white rounded-full">
            0
          </span>
        </button>

        <button
          aria-label="Cart"
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;