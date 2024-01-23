import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroceryItem } from './GroceryItem';
import { useAuth } from '../../Context/AuthContext';
import { fetchCart } from '../../Redux/actions/cartActions';



export const Cart = () => {
  const dispatch = useDispatch();
  const {username} = useAuth().userData; 
  const cartItems = useSelector((state) => state.cart.cartItems); // Adjust the selector based on your Redux state structure

  useEffect(() => {
    dispatch(fetchCart(username)); // Dispatch the action to fetch cart data
  }, [dispatch, username]);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = parseFloat(item.price.slice(1)) * item.totalQuantity;
      return total + itemTotal;
    }, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            // Update the component to use the new structure of cartItems
            <GroceryItem key={item._id} {...item} />
          ))}
          <div className="flex justify-between mt-4">
            <div className="text-xl font-bold">Total Price: ₹{calculateTotalPrice()}</div>
            <button className="bg-[#FB3A68] text-white px-4 py-2 rounded">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="font-bold text-8xl hover:underline decoration-sky-500 ">404 Not Found</h2>
          <br />
          <h5 className="text-5xl font-bold ">No items in the cart.</h5>
        </div>
      )}
    </div>
  );
};