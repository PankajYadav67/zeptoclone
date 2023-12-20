import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export const CarouselCard = ({ offer }) => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
    }
    const handleMinu = () => {
        if (count > 0) setCount(count - 1);
    }

    return (
        <div className="relative p-4 sm:w-full md:w-1/2 lg:w-1/3">
            <div className="border-2 rounded-md p-4 shadow-xl relative">
                <img src={offer.image_url} alt={offer.title} className="w-full h-40 object-contain mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">{offer.keyword}</h3>
                <p className="text-gray-600 font-light mb-4">{offer.quantity}</p>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h6 className='font-bold mb-2 sm:mb-0'>{offer.price}</h6>
                    <div className='flex shadow-2xl mt-2 sm:mt-0'>
                        {count > 0 && (
                            <button className='bg-[#FB3A68] text-white font-thin rounded-tl-lg  rounded-bl-lg py-1 px-2' onClick={handleMinu}><FontAwesomeIcon icon={faMinus} size="xs"/></button>
                        )}
                        <button className={` font-bold   py-1 px-2 ${count === 0 ? " rounded-md border border-[#FB3A68]  text-[#FB3A68]  " : "bg-[#FB3A68] text-white"}`} value={count} onClick={() => setCount(1)}>
                            {count === 0 ? " Add " : count}
                        </button>
                        {count > 0 && (
                            <button className='bg-[#FB3A68] text-white font-thin  rounded-tr-lg rounded-br-lg py-1 px-2' onClick={handlePlus}><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


