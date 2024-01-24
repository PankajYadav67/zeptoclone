import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroceryItem } from './GroceryItem';
import { useAuth } from '../../Context/AuthContext';
import { fetchCart } from '../../Redux/slice/cartSlice';


export const Cart = () => {
  const dispatch = useDispatch();
  const { username } = useAuth().userData;
  const { cartItems, status, error } = useSelector((state) => state.cartData);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCart(username));
    }
  }, [dispatch, username, status]);
  console.log(cartItems);


  const calculateTotalPrice = () => {
    if (!cartItems) return 0; // Handle the case where cartItems is undefined
    return cartItems.reduce((total, item) => {
      const itemTotal = parseFloat(item.price.slice(1)) * item.totalQuantity;
      return total + itemTotal;
    }, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && cartItems && cartItems.length > 0 && (
        <div>
          {cartItems.map((item) => (
            <GroceryItem key={item._id} {...item} />
          ))}
          <div className="flex justify-between mt-4">
            <div className="text-xl font-bold">Total Price: ₹{calculateTotalPrice()}</div>
            <button className="bg-[#FB3A68] text-white px-4 py-2 rounded">Checkout</button>
          </div>
        </div>
      )}
    {status === 'succeeded' && (!cartItems || cartItems.length === 0) && (
        <div className="text-center">
          <h2 className="font-bold text-8xl hover:underline decoration-sky-500 ">404 Not Found</h2>
          <br />
          <h5 className="text-5xl font-bold ">No items in the cart.</h5>
        </div>
      )}
    </div>
  );
};
