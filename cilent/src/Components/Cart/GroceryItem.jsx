// GroceryItem.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export const GroceryItem = ({ id, title, quantity, price, image, totalQuantity }) => {
  const [count, setCount] = useState(totalQuantity);

  useEffect(() => {
    const updateCartQuantity = async (newQuantity) => {
      try {
        const updatedCartItem = {
          id,
          totalQuantity: newQuantity,
        };

        await axios.patch(`http://localhost:8080/cart/${id}`, updatedCartItem);
        // Handle successful patch request if needed
      } catch (error) {
        console.error('Error updating cart item:', error);
      }
    };

    // Update cart quantity when count changes
    updateCartQuantity(count);
  }, [count, id]);

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  const calculateTotalPrice = () => {
    return (count * parseFloat(price.slice(1))).toFixed(2);
  };

  return (
    <div className="grocery-item-container flex justify-between items-center p-4 border-b">
      <div className="product-details flex items-center">
        {image && <img src={image} alt={title} className="w-24 h-24 object-cover rounded-full mr-4" />}
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm">{quantity}</p>
        </div>
      </div>
      <div className="quantity-section flex items-center space-x-4 ml-auto">
       
      
          <>
            <div className="quantity-info flex items-center space-x-2">
            {count > 0 && (
                            <button className='bg-[#FB3A68] text-white font-thin rounded-tl-lg  rounded-bl-lg py-1 px-2' onClick={handleMinus}><FontAwesomeIcon icon={faMinus} size="xs" /></button>
                        )}
                        <button className={` font-bold   py-1 px-2 ${count === 0 ? " rounded-md border border-[#FB3A68]  text-[#FB3A68]  " : "bg-[#FB3A68] text-white"}`} value={count} onClick={() => {
                            setCount(1);
                            handleAddToCart();

                        }}>
                            {count === 0 ? " Add " : count}
                        </button>
                        {count > 0 && (
                            <button className='bg-[#FB3A68] text-white font-thin  rounded-tr-lg rounded-br-lg py-1 px-2' onClick={handlePlus}><FontAwesomeIcon icon={faPlus} size="xs" /></button>
                        )}
            </div>
              <div className="quantity-value">Qty: {count}</div>
            <div className="total-price">Price: ₹{calculateTotalPrice()}</div>
          </>
     
      </div>
    </div>
  );
};


