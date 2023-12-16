import React from 'react';

export const CarouselCard = ({ offer }) => {
    return (
        <div className="relative p-4 w-full md:w-1/2 lg:w-1/3">
            <div className="border-2 rounded-lg p-4 shadow-xl relative">
                <img src={offer.image_url} alt={offer.title} className="w-full h-40 object-contain mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">{offer.keyword}</h3>
                <p className="text-gray-600 font-light mb-4">{offer.quantity}</p>
                <h6 className='font-bold'>{offer.price}</h6>
            </div>
        </div>
    );
};
