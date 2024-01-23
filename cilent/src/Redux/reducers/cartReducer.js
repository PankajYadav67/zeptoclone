import * as types from "../actions/cartActionTypes";

const initialState = {
  cartItems: [],
  loading: false,
  error: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_CART_REQUEST:
    case types.UPDATE_CART_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
        error: "",
      };

    case types.UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
      };

    case types.FETCH_CART_FAILURE:
    case types.UPDATE_CART_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


