import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './HeroSlider.css';

// Import images or use paths directly if in public folder. 
// Assuming we will move generated images to src/assets or public.
// Ideally, we'd import them, but for now using paths assuming they are accessible.
// We should probably copy the generated artifacts to the public folder.

const slides = [
    {
        id: 1,
        image: '/assets/banner_fashion_sale_1767690964231.png', // We need to move the file here
        alt: 'Season Sale'
    },
    {
        id: 2,
        image: '/assets/banner_watches_1767691060372.png',
        alt: 'Timeless Elegance'
    },
    {
        id: 3,
        image: '/assets/banner_jewelry_1767691076550.png',
        alt: 'New Collection'
    },
    {
        id: 4,
        image: '/assets/banner_sunglasses_1767691034507.png',
        alt: 'Summer Vibes'
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                >
                    {/* We'll update the src once we move the files */}
                    <img src={slide.image} alt={slide.alt} />
                </div>
            ))}

            <button className="slider-control control-prev" onClick={prevSlide}>
                <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button className="slider-control control-next" onClick={nextSlide}>
                <ChevronRight className="w-6 h-6 text-black" />
            </button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
