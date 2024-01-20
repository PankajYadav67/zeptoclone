import React, { useState, useEffect } from 'react';

export const HeroSmallCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(2);


    const images = [
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/6a46f25d-8e43-4686-88b5-f87642a03c27.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/a1f19fb9-9db3-4984-a72b-a135f4921392.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/d606d48e-7a99-450b-b954-02308a8c472d.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/c1101065-a7b4-40ad-a722-f709683ab85d.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/e2ca2580-ca8c-4270-bba2-fede5919fe49.png',
    ];


    const prevSlide = () => {
        console.log('Previous Slide Clicked');
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        console.log('Next Slide Clicked');
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    console.log('activeIndex:', activeIndex);

    return (
        <div className="relative h-[358px] bg-cover overflow-hidden">
            {images.map((imageUrl, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 h-[340px] w-[580px] opacity-${index === activeIndex ? '100' : '0'} transition-opacity duration-500 ease-in-out`}
                >
                    <img
                        src={imageUrl}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
            <button
                onClick={prevSlide}
                className="absolute top-0 left-0 w-8 h-8 p-2 rounded-full shadow-lg bg-skin-base flex items-center justify-center"
            >
                <img
                    src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.21.1/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/left-arrow-primary.svg"
                    alt="left-arrow-icon"
                    className="w-full h-full object-contain"
                />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-0 right-0 w-8 h-8 p-2 rounded-full shadow-lg bg-skin-base flex items-center justify-center"
            >
                <img
                    src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.21.1/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/right-arrow.svg"
                    alt="right-arrow-icon"
                    className="w-full h-full object-contain"
                />
            </button>
        </div>
    );
};