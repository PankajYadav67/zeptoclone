import * as types from "./actionType";
import  { Axios }  from "axios";

export const FetchDataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};
export const FetchDataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};
export const FetchDataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};

//main function for products
export const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(FetchDataRequest());
    Axios.get("/products")
      .then((res) => dispatch(FetchDataSuccess(res.data)))
      .catch((err) => dispatch(FetchDataFailure(err.data)));
  };
};

// for single product
export const GetSingleProductRequest = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};
export const GetSingleProductSuccess = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};
export const GetSingleProductFailure = (payload) => {
  return {
    type: types.GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};

//Fetch function for each product
export const getSingleProduct = (id) => (dispatch) => {
  dispatch(GetSingleProductRequest());
  Axios.get(`/product/${id}`)
    .then((res) => dispatch(GetSingleProductSuccess(res.data)))
    .catch((err) => dispatch(GetSingleProductFailure(err.data)));
};

