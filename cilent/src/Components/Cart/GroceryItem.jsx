import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Context/AuthContext';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../../Redux/slice/cartSlice';

export const GroceryItem = ({ _id, title, quantity, price, image, totalquantity }) => {
  console.log('Props received in GroceryItem:', { _id, title, quantity, price, image, totalquantity });
  console.log("gfgrhrht5");
  const dispatch = useDispatch();
  const [count, setCount] = useState(totalquantity);
  const { username } = useAuth().userData;


  useEffect(() => {
    const updatedCartItem = {
      username,
      title,
      totalquantity: count,
    };

    // Dispatch the updateCartItem action when the count changes
    dispatch(updateCartItem(updatedCartItem));
  }, [dispatch, username, title, count]);

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      const updatedCartItem = {
        username,
        title,
        totalquantity: newCount,
      };

      // Dispatch the updateCartItem action when adding to cart
      dispatch(updateCartItem(updatedCartItem));
      return newCount;
    });
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
      <div className="quantity-section flex items-center space-x-4">
        <>
          <div className="quantity-info flex items-center space-x-2">
            {count > 0 && (
              <button
                className='bg-[#FB3A68] text-white font-thin rounded-tl-lg rounded-bl-lg py-1 px-2'
                onClick={handleMinus}
              >
                <FontAwesomeIcon icon={faMinus} size="xs" />
              </button>
            )}
            <button
              className={`font-bold py-1 px-2 ${count === 0 ? "rounded-md border border-[#FB3A68] text-[#FB3A68]" : "bg-[#FB3A68] text-white"}`}
              value={count}
              onClick={() => {
                setCount(1);
                handleAddToCart();
              }}
            >
              {count === 0 ? " Add " : count}
            </button>
            {count > 0 && (
              <button
                className='bg-[#FB3A68] text-white font-thin rounded-tr-lg rounded-br-lg py-1 px-2'
                onClick={handlePlus}
              >
                <FontAwesomeIcon icon={faPlus} size="xs" />
              </button>
            )}
          </div>
          <div className="quantity-value">Qty: {totalquantity}</div>
          <div className="total-price">Price: ₹{calculateTotalPrice()}</div>
        </>
      </div>
    </div>
  );
};
