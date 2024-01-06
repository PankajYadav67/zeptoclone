import React from 'react';
import { Provider } from 'react-redux';
import {store} from '../Redux/store';
import { ConnectedCart  ,mapStateToProps} from '../Components/Cart/Cart';


export const CartPage = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Quick Commerce Site</h1>
        <ConnectedCart />
      </div>
    </Provider>
  );
};