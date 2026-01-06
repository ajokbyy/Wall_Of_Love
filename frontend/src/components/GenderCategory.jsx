import React from 'react';
import './GenderCategory.css';

const GenderCategory = () => {
    return (
        <section className="gender-category-section">
            <h2 className="section-title">GEN Z & MILLENNIAL APPROVED</h2>
            <p className="section-subtitle">Minimal, Stunning & Trend-setting Global Fashion</p>

            <div className="gender-grid">
                {/* For Her */}
                <div className="gender-card">
                    <div className="image-container">
                        <img src="/assets/ForHer.webp" alt="For Her" />
                    </div>
                    <h3 className="card-title">FOR HER</h3>
                    <button className="shop-btn">SHOP NOW</button>
                </div>

                {/* For Him */}
                <div className="gender-card">
                    <div className="image-container">
                        <img src="/assets/forhim.webp" alt="For Him" />
                    </div>
                    <h3 className="card-title">FOR HIM</h3>
                    <button className="shop-btn">SHOP NOW</button>
                </div>
            </div>
        </section>
    );
};

export default GenderCategory;
