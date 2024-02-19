import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { addToCart, updateCartItem } from '../../Redux/actions/cartActions';
import { useAuth } from '../../Context/AuthContext';
import { v4 as uuidv4 } from 'uuid';

export const CarouselCard = ({ offer }) => {
    const dispatch = useDispatch();
    const { username } = useAuth().userData;

    const [localTotalQuantity, setLocalTotalQuantity] = useState(offer.totalquantity);

    const UpdateHandleAddToCart = (newCount) => {
        const updatedCartItem = {
            username,
            title: offer.keyword,
            token: 54321,
            totalquantity: newCount,
        };
        dispatch(updateCartItem(updatedCartItem));

        setLocalTotalQuantity(newCount);
    }


    const handlePlus = () => {
        const newCount = localTotalQuantity + 1;
        if (localTotalQuantity === 0) {
            handleAddToCart(newCount);
        } else {
            UpdateHandleAddToCart(newCount)
        }
    }

    const handleMinus = () => {
        if (localTotalQuantity > 0) {
            const newCount = localTotalQuantity - 1;
            updateCartItem(newCount);
        }
    }

    const handleAddToCart = (newCount) => {
        const newCartItem = {
            username: username,
            title: offer.keyword,
            quantity: offer.quantity,
            image: offer.image_url,
            totalquantity: newCount,
            price: offer.price,
            token: 54321,
        };

        if (offer.totalquantity === 0) {
            // Dispatch the addToCart action for a new item
            dispatch(addToCart(username, newCartItem));
            setLocalTotalQuantity(newCount);
        }
    };


    return (
        <div className="relative p-4 sm:w-full md:w-1/2 lg:w-1/3">
            <div className="border-2 rounded-md p-4 shadow-xl relative">
                <img src={offer.image_url} alt={offer.title} className="w-full h-40 object-contain mb-4 rounded-lg" />
                <h3 className="text-lg font-semibold mb-2">{offer.keyword}</h3>
                <p className="text-gray-600 font-light mb-4">{offer.quantity}</p>
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <h6 className='font-bold mb-2 sm:mb-0'>{offer.price}</h6>
                    <div className='flex shadow-2xl mt-2 sm:mt-0'>
                        {localTotalQuantity > 0 && (
                            <button className='bg-[#FB3A68] text-white font-thin rounded-tl-lg  rounded-bl-lg py-1 px-2' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} size="xs" /></button>
                        )}
                        <button className={`font-bold py-1 px-2 ${localTotalQuantity === 0 ? "rounded border border-[#FB3A68] text-[#FB3A68]" : "bg-[#FB3A68] text-white "}`} onClick={() => {
                            handleAddToCart(1);
                        }}>
                            {console.log(offer)}
                            {localTotalQuantity === undefined || localTotalQuantity === 0 ? " Add " : localTotalQuantity}
                        </button>
                        {localTotalQuantity > 0 && (
                            <button className='bg-[#FB3A68] text-white font-thin rounded-tr-lg rounded-br-lg py-1 px-2' onClick={handlePlus}><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};




export const NotLoggedInCarouselCard = ({ offer }) => {
    const [count, setCount] = useState(0);

    const handlePlus = () => {
        setCount(count + 1);
        updateLocalStorage(count + 1);
    };

    const handleMinus = () => {
        if (count > 0) {
            setCount(count - 1);
            updateLocalStorage(count - 1);
        }
    };

    const updateLocalStorage = (newCount) => {
        const cartItem = {
            id: uuidv4(), // Generate a random identifier
            title: offer.keyword,
            quantity: offer.quantity,
            image: offer.image_url,
            totalquantity: newCount,
            price: offer.price,
        };

        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingIndex = existingCart.findIndex(item => item.title === cartItem.title);

        if (existingIndex !== -1) {
            // If the item already exists in the cart, update its quantity
            existingCart[existingIndex].totalquantity = newCount;
        } else {
            // Otherwise, add the new item to the cart
            existingCart.push(cartItem);
        }

        localStorage.setItem('cart', JSON.stringify(existingCart));

        console.log('Item updated in local storage:', cartItem);
    };

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
                            <button className='bg-[#FB3A68] text-white font-thin rounded-tl-lg  rounded-bl-lg py-1 px-2' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} size="xs" /></button>
                        )}
                        <button className={` font-bold   py-1 px-2 ${count === 0 ? " rounded-md border border-[#FB3A68]  text-[#FB3A68]  " : "bg-[#FB3A68] text-white"}`} value={count} onClick={handlePlus}>
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
