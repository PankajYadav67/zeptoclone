import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../Context/AuthContext';
import { useDispatch } from 'react-redux';
import { updateCartItem } from '../../Redux/actions/cartActions';

export const GroceryItem = ({ _id, title, quantity, price, image, totalquantity }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(totalquantity);
  const { username } = useAuth().userData;

  // useEffect(() => {
  //   const updatedCartItem = {
  //     username,
  //     title,
  //     token: 54321,
  //     totalQuantity: count,
  //   };

  //   dispatch(updateCartItem(updatedCartItem));
  // }, [dispatch, username, count]);

  const handleMinus = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      handleAddToCart();
    }
  };

  const handleAddToCart = async () => {
    const updatedCartItem = {
      username,
      title,
      token: 54321,
      totalquantity: count,
    };
    dispatch(updateCartItem(updatedCartItem));
  };

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
  
  };

  const calculateTotalPriceCartItem = () => {
    console.log(totalquantity);
    
    const quantity = parseInt(totalquantity, 10);
    console.log(quantity);
    if (isNaN(quantity)) {
      // Handle the case where totalQuantity is not a valid number
      console.error('Invalid totalQuantity:', totalquantity);
      return 0; // or handle it differently based on your logic
    }

    return (quantity * parseFloat(price.slice(1))).toFixed(2);
  };


  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={image} alt="img" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="font-bold text-sm">{quantity}</span>
          <span className="text-red-500 text-xs">{/* Brand information */}</span>
          <a href='.' className="font-semibold hover:text-red-500 text-gray-500 text-xs">
            Remove
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <FontAwesomeIcon icon={faMinus} className="fill-current text-gray-600 w-3" onClick={handleMinus} />
        <input className="mx-2 border text-center w-8" type="text" value={count} readOnly />
        <FontAwesomeIcon icon={faPlus} className="fill-current text-gray-600 w-3" onClick={handlePlus} />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">{calculateTotalPriceCartItem()}</span>
    </div>
  );
};

