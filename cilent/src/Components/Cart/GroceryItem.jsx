import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Context/AuthContext';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { removeCartItem, updateCartItem } from '../../Redux/actions/cartActions';

export const GroceryItem = ({ _id, id, title, quantity, price, image, totalquantity }) => {
  const dispatch = useDispatch();
  const { username } = useAuth().userData;
  const { isloggedIn } = useAuth();
  const [localTotalQuantity, setLocalTotalQuantity] = useState(totalquantity);


  const handleAddToCart = (newCount) => {
    const updatedCartItem = {
      username,
      title,
      token: 54321,
      totalquantity: newCount,
    };
    dispatch(updateCartItem(updatedCartItem));

    setLocalTotalQuantity(newCount);
  }

  const handlePlus = () => {
    const newCount = localTotalQuantity + 1;
    if (isloggedIn) {
      handleAddToCart(newCount);
    } else {
      updateLocalStorage(newCount);
    }
  }

  const handleMinus = () => {
    if (localTotalQuantity > 0) {
      const newCount = localTotalQuantity - 1;
      if (isloggedIn) {
        handleAddToCart(newCount);
      } else {
        updateLocalStorage(newCount);
      }
    }
  }

  const calculateTotalPriceCartItem = () => {
    const quantity = parseInt(totalquantity, 10);
    if (isNaN(quantity)) {
      console.error('Invalid totalQuantity:', totalquantity);
      return 0;
    }

    return (quantity * parseFloat(price.slice(1))).toFixed(2);
  };

  const handleRemoveCartItem = useCallback((itemId) => {
    dispatch(removeCartItem(username, itemId));
  })

  // local
  const handleRemoveCartItemLocal = useCallback((itemId) => {
    // Remove item from local storage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = existingCart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    console.log('Item removed from local storage:', itemId);
  }, [username, dispatch]);


  const updateLocalStorage = (newCount) => {
    const cartItem = {
      id: uuidv4(), // Generate a random identifier
      title: title,
      quantity: quantity,
      image: image,
      totalquantity: newCount,
      price: price,
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

    setLocalTotalQuantity(newCount);
  };


  useEffect(() => {

    console.log('updateLocalStorage was called');
  }, [updateLocalStorage]);

  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">

      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={image} alt="img" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="font-bold text-sm">{quantity}</span>
          <span className="font-sm text-sm">{_id ? _id : id}</span>
          <span className="text-red-500 text-xs">{/* Brand information */}</span>

          <span className="font-semibold hover:text-red-500 cursor-pointer text-gray-500 text-xs" onClick={() => isloggedIn ? handleRemoveCartItem(_id) : handleRemoveCartItemLocal(id)}>
            Remove
          </span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <FontAwesomeIcon icon={faMinus} className="fill-current cursor-pointer text-gray-600 w-3" onClick={() => handleMinus()} />
        <input className="mx-2 border text-center w-8" type="text" value={localTotalQuantity} readOnly />
        <FontAwesomeIcon icon={faPlus} className="fill-current cursor-pointer text-gray-600 w-3" onClick={() =>
          handlePlus()
        } />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">{calculateTotalPriceCartItem()}</span>
    </div>
  );
};
