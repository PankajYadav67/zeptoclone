import * as types from "./actionType";

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
export const FetchDataFail = (payload) => {
  return {
    type: types.FETCH_DATA_FAIL,
    payload,
  };
};
