import {
  FETCH_DATA_FAIL,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "./actionType";

const initialState = {
  product: [],
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.types) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        error: false,
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: true,
      };

    default:
      return {
        ...state,
      };
  }
};
