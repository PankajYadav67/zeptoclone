import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
// import { productReducer } from "./products/reducer";

export const rootReducers = combineReducers({ cartData: cartReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './slice/cartSlice';

// const store = configureStore({
//   reducer: {
//     cartData: cartReducer,
//   },
// });

// export default store;

// import { cartReducer } from "./reducers/cartReducer";
