import React from 'react';
import { Search, Zap, Heart, ShoppingCart } from 'lucide-react';
import './Navbar.css';

const row1 = [
  'FESTIVE SALE',
  'NEW IN',
  'WATCHES',
  'CHARMS',
  'COUPLE WATCHES',
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

const Navbar = () => {
  return (
    <header className="header">
      {/* Top row: search + centered logo + icons */}
      <div className="header-top">
        <div className="header-left">
          <button
            aria-label="Search"
            className="icon-btn"
          >
            <Search className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="header-logo">
          <h1>
            FLEX &amp; WATCHES
          </h1>
        </div>

        <div className="header-right">
          <button
            aria-label="Offers"
            className="icon-btn"
          >
            <Zap className="w-5 h-5" />
          </button>

          <button
            aria-label="Wishlist"
            className="icon-btn wishlist-btn"
          >
            <Heart className="w-5 h-5" />
            <span className="wishlist-badge">
              0
            </span>
          </button>

          <button
            aria-label="Cart"
            className="icon-btn"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Second row: primary category nav */}
      <nav className="nav-section">
        <div className="nav-container">
          <ul className="nav-list-primary">
            {row1.map((item) => (
              <li key={item} className="nav-item">
                <a href="#" className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <ul className="nav-list-secondary">
            {row2.map((item) => (
              <li key={item} className="nav-item">
                <a href="#" className="nav-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;