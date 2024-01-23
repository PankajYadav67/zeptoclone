import axios from "axios";
import * as types from "./cartActionTypes";



// Fetch Cart
export const fetchCartRequest = () => ({
  type: types.FETCH_CART_REQUEST,
});

export const fetchCartSuccess = (cartItems) => ({
  type: types.FETCH_CART_SUCCESS,
  payload: cartItems,
});

export const fetchCartFailure = (error) => ({
  type: types.FETCH_CART_FAILURE,
  payload: error,
});

export const fetchCart = (username) => async (dispatch) => {
  dispatch(fetchCartRequest());
  try {
    const response = await axios.get(`https://zepto-backend-qvno.onrender.com/cart/${username}` ,{ headers: {
      Authorization: 54321, // Include your token here
    },});
    dispatch(fetchCartSuccess(response.data.carts));
  } catch (error) {
    dispatch(fetchCartFailure(error.message));
  }
};

// Update Cart Item
export const updateCartItemRequest = (updatedCartItem) => ({
  type: types.UPDATE_CART_ITEM_REQUEST,
  payload: updatedCartItem,
});

export const updateCartItemSuccess = () => ({
  type: types.UPDATE_CART_ITEM_SUCCESS,
});

export const updateCartItemFailure = (error) => ({
  type: types.UPDATE_CART_ITEM_FAILURE,
  payload: error,
});

export const updateCartItem = (updatedCartItem) => async (dispatch) => {
  dispatch(updateCartItemRequest(updatedCartItem));
  try {
    await axios.patch(`https://zepto-backend-qvno.onrender.com/cart/${updatedCartItem.username}`, updatedCartItem);
    dispatch(updateCartItemSuccess());
  } catch (error) {
    dispatch(updateCartItemFailure(error.message));
  }
};
