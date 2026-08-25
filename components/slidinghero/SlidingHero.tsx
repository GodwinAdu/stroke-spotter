import React, { useState, useEffect } from 'react';

interface Slide {
    src: string;
    heading: string;
    text: string;
}

interface SlidingHeroProps {
    slides: Slide[];
}

const SlidingHero: React.FC<SlidingHeroProps> = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);  // Change slide every 5 seconds

        return () => clearTimeout(timer);  // Clear timer on component unmount
    }, [activeSlide, slides.length]);

    return (
        <div className="relative overflow-hidden rounded-lg h-80">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 w-full transition-opacity duration-500 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.src} alt={slide.heading} className="w-full h-80 object-cover rounded-lg" />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-white">{slide.heading}</h3>
                        <p className="text-white">{slide.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SlidingHero;
