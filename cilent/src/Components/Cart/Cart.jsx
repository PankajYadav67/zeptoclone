import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {GroceryItem} from './GroceryItem';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  

  useEffect(() => {
    axios.get(`${URL}/cart`)
      .then((response) => {
        console.log(response.data);
        setCartItems(response.data);
      })
      .catch((error) => console.error('Error fetching cart data:', error));
  }, []);

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
            <GroceryItem key={item.id} {...item} />
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






