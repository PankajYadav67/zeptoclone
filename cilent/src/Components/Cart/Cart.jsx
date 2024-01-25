import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroceryItem } from './GroceryItem';
import { useAuth } from '../../Context/AuthContext';
import { emptyCart, fetchCart } from '../../Redux/actions/cartActions';

export const Cart = () => {
  const dispatch = useDispatch();
  const { username } = useAuth().userData;
  const shippingPrice = 40.00 ;
  const { cartItems, status, error } = useSelector((state) => state.cartData);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCart(username));
    }
  }, [dispatch, username, status]);

  const handleEmptyCart = () => {
    dispatch(emptyCart(username));
  };

  const calculateTotalPriceOrderSummary = () => {
    if (!cartItems) return 0;

    return cartItems.reduce((total, item) => {
      const itemTotal = parseFloat(item.price.slice(1)) * item.totalquantity;
      return total + itemTotal + shippingPrice ;
    }, 0);

  };

  // const calculateTotalPriceOrderSummary = () => {
  //   return (count * parseFloat(price.slice(1))).toFixed(2);
  // };

  return (
    <div className='bg-[#f6f6f6]'>


      <div className="container  mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">{cartItems ? `${cartItems.length} Items` : '0 Items'}</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
              <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>
            {status === 'loading' && <h4>Loading...</h4>}
            {status === 'failed' && <h4>Error: {error}</h4>}
            {status === 'succeeded' && cartItems && cartItems.length > 0 && (
              <>
                {cartItems.map((item) => (
                  <GroceryItem key={item._id} {...item} />
                ))}
              </>
            )}
            {status === 'succeeded' && (!cartItems || cartItems.length === 0) && (
              <div className="text-center">
                <h2 className="font-bold text-8xl hover:underline decoration-sky-500 ">404 Not Found</h2>
                <br />
                <h5 className="text-5xl font-bold ">No items in the cart.</h5>
              </div>
            )}
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cartItems ? cartItems.length : 0}</span>
              <span className="font-semibold text-sm">₹{calculateTotalPriceOrderSummary()}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - ₹ {shippingPrice}</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
              <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>₹{calculateTotalPriceOrderSummary()}</span>
              </div>
              <button className="bg-[#FB3A68] font-semibold hover:bg-red-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


