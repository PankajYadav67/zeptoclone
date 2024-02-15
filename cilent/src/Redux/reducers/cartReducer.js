import * as types from "../actions/cartActionTypes";

export const initialState = {
  cartItems: [], // Ensure this is set appropriately
  error: null,
  status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  paymentStatus: null,
  otpVerificationStatus: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CART_REQUEST:
    case types.UPDATE_CART_ITEM_REQUEST:
    case types.EMPTY_CART_REQUEST:
    case types.REMOVE_CART_ITEM_REQUEST:
    case types.ADD_TO_CART_REQUEST:
      return {
        ...state,
        status: "loading",
      };

    case types.FETCH_CART_FAILURE:
    case types.UPDATE_CART_ITEM_FAILURE:
    case types.EMPTY_CART_FAILURE:
    case types.ADD_TO_CART_FAILURE:
    case types.REMOVE_CART_ITEM_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.payload,
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
        cartItems: state.cartItems.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
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

    case types.REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        error: null,
      };

    case types.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        error: null,
      };
    case types.INITIATE_PAYMENT:
      return {
        ...state,
        paymentStatus: "initiated",
      };
    case types.VERIFY_OTP:
      return {
        ...state,
        otpVerificationStatus: action.payload.success ? "success" : "failure",
      };

    default:
      return state;
  }
};
