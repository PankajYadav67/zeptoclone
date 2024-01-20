import React, { useState, useEffect } from 'react';
import BigHero1 from "../Assets/BigHero/BigHero2.png";
import BigHero2 from "../Assets/BigHero/bigHero.png";

export const HeroCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-webp,q-80/inventory/banner/68d96cc8-7597-459c-9c85-fa9995285026.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-webp,q-80/inventory/banner/91abac22-7442-41d2-84cf-147a1b703c7c-Banner_Carousel_Here.png',
     
        BigHero2,
    ];

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 5000); // Auto-advance every 5 seconds

        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className="relative h-[720px] bg-cover overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${index === activeIndex ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-700 ease-in-out absolute top-0 left-0 w-full h-full`}
                >
                    <a href="/">
                        <img
                            src={image}
                            alt={`Carousel Image ${index}`}
                            className="object-cover w-full bg-cover h-full"
                        />
                    </a>
                </div>
            ))}

            <button onClick={handlePrev} className="flex-shrink-0 p-2 bg-slate-50 shadow-2xl absolute top-1/2 left-0 transform -translate-y-1/2 z-10 focus:outline-none rounded-full">
                <svg className="h-6 w-6" fill="none" stroke="#FB3A68" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>

            <button onClick={handleNext} className="flex-shrink-0 p-2 absolute top-1/2 right-0 transform -translate-y-1/2 z-10 focus:outline-none bg-slate-50 shadow-2xl rounded-full ">
                <svg className="h-6 w-6" fill="none" stroke="#FB3A68" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
    );
};

