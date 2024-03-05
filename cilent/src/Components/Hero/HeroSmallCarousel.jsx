import React, { useState, useEffect, useRef } from 'react';

export const HeroSmallCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState('right');
    const carouselRef = useRef(null);

    const images = [
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/6a46f25d-8e43-4686-88b5-f87642a03c27.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/a1f19fb9-9db3-4984-a72b-a135f4921392.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/d606d48e-7a99-450b-b954-02308a8c472d.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/c1101065-a7b4-40ad-a722-f709683ab85d.png',
        'https://cdn.zeptonow.com/production///tr:w-969,ar-969-558,pr-true,f-auto,q-80/inventory/banner/e2ca2580-ca8c-4270-bba2-fede5919fe49.png',
    ];

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
        setDirection('left');
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (
            prevIndex === images.length - 1 ? 0 : Math.min(prevIndex + 2, images.length - 1)
        ));
        setDirection('right');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    useEffect(() => {
        const handleResize = () => {
            const width = carouselRef.current.offsetWidth;
            const itemsPerSlide = Math.floor(width / 590);
            setActiveIndex((prevIndex) => Math.min(prevIndex, images.length - itemsPerSlide));
        };

        handleResize(); // Initial call to set activeIndex based on window width

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [images.length]);

    return (
        <div className="relative bg-cover overflow-hidden" ref={carouselRef}>
            <button
                onClick={prevSlide}
                className="w-8 h-8 p-2 rounded-full shadow-lg bg-skin-base flex items-center justify-center absolute left-0 top-1/2 transform -translate-y-1/2"
            >
                <img
                    src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/6.21.1/tr:w-0.2,ar-0.2-0.2,pr-true,f-auto,q-80//images/left-arrow-primary.svg"
                    alt="left-arrow-icon"
                    className="w-full h-full object-contain"
                />
            </button>

            <div className="flex" style={{ transition: 'transform 0.5s ease-in-out', transform: `translateX(${direction === 'right' ? '-' : ''}${activeIndex * -100}%)` }}>
                {images.map((imageUrl, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full md:w-[590px] h-[340px] mx-2 opacity-100 transition-opacity duration-500 ease-in-out sm:grid-cols-1"
                    >
                        <img src={imageUrl} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            <button
                onClick={nextSlide}
                className="w-8 h-8 p-2 rounded-full shadow-lg bg-skin-base flex items-center justify-center absolute right-0 top-1/2 transform -translate-y-1/2"
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
