import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { addToCart, updateCartItem } from '../../Redux/actions/cartActions';
import { useAuth } from '../../Context/AuthContext';

export const CarouselCard = ({ offer, totalquantity }) => {
    const dispatch = useDispatch();
    const { username } = useAuth().userData;

    const handlePlus = (totalquantity) => {
        const newCount = totalquantity + 1;
        handleAddToCart(newCount);
    }
    const handleMinus = () => {
        const newCount = totalquantity + 1;
        handleAddToCart(newCount);
    }

    const handleAddToCart = () => {
        const newCartItem = {
            username: username,
            title: offer.keyword,
            quantity: offer.quantity,
            image: offer.image_url,
            totalquantity: totalquantity === 0 ? 1 : totalquantity,
            price: offer.price,
            token: 54321,
        };
        console.log(totalquantity)

        if (totalquantity === 0) {
            // Dispatch the addToCart action for a new item
            dispatch(addToCart(username, newCartItem));
        } else {
            // Dispatch the updateCartItem action for an existing item
            dispatch(updateCartItem(newCartItem));
        }
    };
    useEffect(() => {
        return () => {
            console.log('Cleanup function executed.');
            // Additional cleanup code goes here
        };
    }, [totalquantity])

    return (
        <div className="relative p-4 sm:w-full md:w-1/2 lg:w-1/3">
            <div className="border-2 rounded-md p-4 shadow-xl relative">
                <img src={offer.image_url} alt={offer.title} className="w-full h-40 object-contain mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">{offer.keyword}</h3>
                <p className="text-gray-600 font-light mb-4">{offer.quantity}</p>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h6 className='font-bold mb-2 sm:mb-0'>{offer.price}</h6>
                    <div className='flex shadow-2xl mt-2 sm:mt-0'>
                        {totalquantity > 0 && (
                            <button className='bg-[#FB3A68] text-white font-thin rounded-tl-lg  rounded-bl-lg py-1 px-2' onClick={() => handleMinus(totalquantity)}><FontAwesomeIcon icon={faMinus} size="xs" /></button>
                        )}
                        <button className={`font-bold py-1 px-2 ${totalquantity === 0 ? "rounded-md border border-[#FB3A68] text-[#FB3A68]" : "bg-[#FB3A68] text-white"}`} value={totalquantity} onClick={() => {
                            handleAddToCart();
                        }}>
                            {console.log(totalquantity)}
                            {totalquantity == undefined || 0 ? " Add " : totalquantity}
                        </button>
                        {totalquantity > 0 && (
                            <button className='bg-[#FB3A68] text-white font-thin rounded-tr-lg rounded-br-lg py-1 px-2' onClick={() => handlePlus(totalquantity)}><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


