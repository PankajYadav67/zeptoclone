import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Context/AuthContext';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../Redux/actions/cartActions';

export const GroceryItem = ({ _id, title, quantity, price, image, totalquantity }) => {
  const dispatch = useDispatch();
  const { username } = useAuth().userData;

  const handleAddToCart = (newCount) => {
    const updatedCartItem = {
      username,
      title,
      token: 54321,
      totalquantity: newCount,
    };
    dispatch(updateCartItem(updatedCartItem));
  }


  const handlePlus = (totalquantity) => {
    const newCount = totalquantity + 1;
    handleAddToCart(newCount);
  }
  const handleMinus = () => {
    const newCount = totalquantity + 1;
    handleAddToCart(newCount);
  }

  const calculateTotalPriceCartItem = () => {
    const quantity = parseInt(totalquantity, 10);
    if (isNaN(quantity)) {
      console.error('Invalid totalQuantity:', totalquantity);
      return 0;
    }

    return (quantity * parseFloat(price.slice(1))).toFixed(2);
  };

  const handleRemoveCartItem = (itemId) => {
    dispatch(removeCartItem(username, itemId));
  };

  useEffect(() => {
    return () => {
      console.log('Cleanup function executed.');
      // Additional cleanup code goes here
    };
  }, [totalquantity]);


  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={image} alt="img" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="font-bold text-sm">{quantity}</span>
          <span className="font-sm text-sm">{_id}</span>
          <span className="text-red-500 text-xs">{/* Brand information */}</span>

          <span className="font-semibold hover:text-red-500 cursor-pointer text-gray-500 text-xs" onClick={() => handleRemoveCartItem(_id)}>
            Remove
          </span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <FontAwesomeIcon icon={faMinus} className="fill-current cursor-pointer text-gray-600 w-3" onClick={() => handleMinus(totalquantity)} />
        <input className="mx-2 border text-center w-8" type="text" value={totalquantity} readOnly />
        <FontAwesomeIcon icon={faPlus} className="fill-current cursor-pointer text-gray-600 w-3" onClick={() => handlePlus(totalquantity)} />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">{calculateTotalPriceCartItem()}</span>
    </div>
  );
};

