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
  console.log("Fetching cart data for:", username);

  dispatch(fetchCartRequest());

  try {
    const response = await axios.get(
      `https://zepto-backend-qvno.onrender.com/cart/${username}`
    );
    // console.log("Fetched cart data:", response.data.data.carts);
    // console.log("Fetched cart data:", response.data);
    // console.log("Fetched cart data:", response);

    dispatch(fetchCartSuccess(response.data.data.carts));
  } catch (error) {
    console.error("Error fetching cart data:", error);
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
    await axios.patch(
      `https://zepto-backend-qvno.onrender.com/cart/${updatedCartItem.username}`,
      updatedCartItem
    );
    dispatch(updateCartItemSuccess());
  } catch (error) {
    dispatch(updateCartItemFailure(error.message));
  }
};

// EMPTY / DELETE CARD
export const emptyCartRequest = () => ({
  type: types.EMPTY_CART_REQUEST,
});

export const emptyCartSuccess = () => ({
  type: types.EMPTY_CART_SUCCESS,
});

export const emptyCartFailure = (error) => ({
  type: types.EMPTY_CART_FAILURE,
  payload: error,
});

export const emptyCart = (username) => async (dispatch) => {
  dispatch(emptyCartRequest());

  try {
    await axios.delete(
      `https://zepto-backend-qvno.onrender.com/cart/${username}/empty`
    );
    dispatch(emptyCartSuccess());
  } catch (error) {
    dispatch(emptyCartFailure(error.message));
  }
};