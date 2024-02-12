import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GroceryItem } from './GroceryItem';
import { useAuth } from '../../Context/AuthContext';
import { emptyCart, fetchCart } from '../../Redux/actions/cartActions';
import { useNavigate } from "react-router-dom";
import delivery from "./delivery.jpg";


export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { username } = useAuth().userData;
  const { isLoggedIn } = useAuth();

  const deliveryPrice = 40;
  const { cartItems, status, error } = useSelector((state) => state.cartData);


  const handleEmptyCart = () => {
    dispatch(emptyCart(username));
  }

  useEffect(() => {
    if (isLoggedIn) {
      if (status === 'idle') {
        dispatch(fetchCart(username));
      }
    } else {
      // Fetch cart items from local storage
      const localCartItems = JSON.parse(localStorage.getItem('cart')) || [];
      dispatch({ type: 'FETCH_CART_SUCCESS', payload: localCartItems });
    }
  }, [dispatch, username, status, isLoggedIn]);

  const calculateTotalPriceOrderSummary = () => {
    if (!cartItems) return 0;

    return cartItems.reduce((total, item) => {
      const itemTotal = parseFloat(item.price.slice(1)) * item.totalquantity;
      return (total + itemTotal);
    }, 0);

  };

  const calculateTotalCostOrderSummary = () => {
    if (!calculateTotalPriceOrderSummary) return 0;
    return calculateTotalPriceOrderSummary() + deliveryPrice;
  };

  return (
    <div className='bg-[#f6f6f6]'>


      {isLoggedIn ? (
        <>

          <img src={delivery} alt="delivery" />
          <div className="container  mx-auto  py-1">
            <div className="flex shadow-md my-10">

              <div className="w-3/4 bg-white px-10 py-10 rounded">
                <div className="flex justify-between text-center border-b pb-8">
                  <h1 className="font-semibold  text-2xl">Shopping Cart</h1>

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
                    {cartItems.map((item) => (<GroceryItem key={item._id} {...item} />))}
                  </>
                )}
                <button
                  className="bg-[#FB3A68] rounded-full font-semibold hover:bg-red-600 py-3 text-sm text-white uppercase w-full mt-4"
                  onClick={handleEmptyCart}
                >
                  Empty Cart
                </button>


              </div>

              <div id="summary" className="w-1/4 px-8 rounded bg-slate-50  py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>

                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">Items {cartItems ? cartItems.length : 0}</span>
                  <span className="font-semibold text-sm">₹{calculateTotalPriceOrderSummary()}</span>
                </div>
                <div className='flex justify-between'>
                  <span className="font-medium inline-block mb-3 text-sm uppercase">Delivery Charges</span>
                  <span className="font-semibold text-sm">₹ {deliveryPrice}</span>
                </div>
                <div className="py-10">
                  <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                  <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full rounded" />
                </div>
                <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full text-sm text-white uppercase">Apply</button>
                <div className="border-t mt-8">
                  <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                    <span>Total cost</span>
                    <span>₹{calculateTotalCostOrderSummary()}</span>
                  </div>
                  <button className="bg-[#FB3A68] rounded-full font-semibold hover:bg-red-600 py-3 text-sm text-white uppercase w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>

          </div>
        </>
      ) : ((!cartItems || cartItems.length === 0) && (
        <div className="text-center">

          <div className="absolute md:fixed top-40 inset-x-0 text-center w-full z-10">
            <img alt="" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-256,q-70 256w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-384,q-70 384w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-640,q-70 640w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-750,q-70 750w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-828,q-70 828w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-1080,q-70 1080w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-1200,q-70 1200w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-1920,q-70 1920w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-2048,q-70 2048w, https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-3840,q-70 3840w" src="https://cdn.zeptonow.com/app/images/empty-bag.png?tr=w-3840,q-70" width="48" height="48" decoding="async" data-nimg="1" className="relative overflow-hidden false m-auto pb-5" />
            <h6 className="block font-norms _3FRewB   undefined">Your cart is empty</h6>
            <button className=" py-1 px-7 text-base  ring-1 ring-[#FB0468] !p-2 mt-3 rounded" onClick={() => (isLoggedIn ? navigate(`/${username}`) : navigate("/"))} type="button" aria-label="Browse Products">
              <div className="flex justify-center items-center font-lato">
                <h6 className="block  text-[#ff5059] ">Browse Products</h6>
              </div>
            </button>
          </div>
        </div>
      ))
      }
    </div>
  );
};

