import * as types from "../actions/cartActionTypes";

const initialState = {
  cartItems: [], // Ensure this is set appropriately
  error: null,
  status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CART_REQUEST:
    case types.UPDATE_CART_ITEM_REQUEST:
    case types.EMPTY_CART_REQUEST:
      return {
        ...state,
        status: "loading",
      };

    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        status: "succeeded",
        error: null,
      };

    case types.UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        error: null,
      };

    case types.EMPTY_CART_SUCCESS:
      return {
        ...state,
        cartItems: [],
        status: "succeeded",
        error: null,
      };

    case types.FETCH_CART_FAILURE:
    case types.UPDATE_CART_ITEM_FAILURE:
    case types.EMPTY_CART_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload,
      };

    case types.REMOVE_CART_ITEM_REQUEST:
      return {
        ...state,
        status: "loading",
      };

    case types.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        error: null,
      };

    case types.REMOVE_CART_ITEM_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload,
      };

    default:
      return state;
  }
};
