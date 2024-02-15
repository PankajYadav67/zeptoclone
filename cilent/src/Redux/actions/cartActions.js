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
    const response = await axios.get(
      `https://zepto-backend-qvno.onrender.com/cart/${username}`
    );
    // console.log("Fetched cart data:", response.data.data.carts);
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

export const updateCartItemSuccess = (updatedCartItem) => ({
  type: types.UPDATE_CART_ITEM_SUCCESS,
  payload: updatedCartItem,
});

export const updateCartItemFailure = (error) => ({
  type: types.UPDATE_CART_ITEM_FAILURE,
  payload: error,
});

export const updateCartItem = (updatedCartItem) => async (dispatch) => {
  dispatch(updateCartItemRequest(updatedCartItem));
  try {
    const response = await axios.patch(
      `https://zepto-backend-qvno.onrender.com/cart/${updatedCartItem.username}`,
      updatedCartItem
    );
    // console.log("Fetched cart data:", response.data.data.updatedCart);
    dispatch(updateCartItemSuccess(response.data.data.updatedCart));
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

// REMOVE THE ONE ITEM
export const removeCartItemRequest = (itemId) => ({
  type: types.REMOVE_CART_ITEM_REQUEST,
  payload: itemId,
});

export const removeCartItemSuccess = () => ({
  type: types.REMOVE_CART_ITEM_SUCCESS,
});

export const removeCartItemFailure = (error) => ({
  type: types.REMOVE_CART_ITEM_FAILURE,
  payload: error,
});

export const removeCartItem = (username, itemId) => async (dispatch) => {
  dispatch(removeCartItemRequest(itemId));
  try {
    await axios.delete(
      `https://zepto-backend-qvno.onrender.com/cart/${username}/${itemId}`
    );
    dispatch(removeCartItemSuccess());
  } catch (error) {
    dispatch(removeCartItemFailure(error.message));
  }
};

// Add to Cart
export const addToCartRequest = (newCartItem) => ({
  type: types.ADD_TO_CART_REQUEST,
  payload: newCartItem,
});

export const addToCartSuccess = () => ({
  type: types.ADD_TO_CART_SUCCESS,
});

export const addToCartFailure = (error) => ({
  type: types.ADD_TO_CART_FAILURE,
  payload: error,
});

export const addToCart = (username, newCartItem) => async (dispatch) => {
  dispatch(addToCartRequest(newCartItem));

  try {
    await axios.post(
      `https://zepto-backend-qvno.onrender.com/cart/${username}`,
      { ...newCartItem, token: 54321 }
    );
    dispatch(addToCartSuccess());
  } catch (error) {
    dispatch(addToCartFailure(error.message));
  }
};


export const initiatePayment = () => {
  return async (dispatch) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Dispatch an action to update the state
    dispatch({ type: types.INITIATE_PAYMENT });

    // Return a response (simulated)
    return { success: true };
  };
};

export const verifyOTP = (otp) => {
  return async (dispatch) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if the provided OTP is fixed (e.g., 1234)
    const isOTPValid = otp === "1234";

    if (isOTPValid) {
      dispatch({ type: types.VERIFY_OTP, payload: { success: true } });
    } else {
      dispatch({ type: types.VERIFY_OTP, payload: { success: false } });
    }
  };
};