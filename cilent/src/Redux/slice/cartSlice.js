// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchCart = createAsyncThunk(
//   "cart/fetchCart",
//    (username) => (dispatch)=> {
//     try {
//       dispatch(fetchCartRequest());
//       const response =  axios.get(
//         `https://zepto-backend-qvno.onrender.com/cart/${username}`
//       );
//       dispatch(fetchCartSuccess(response.data.carts));
//       return response.data.carts;
//     } catch (error) {
//       // Handle the error here

//       console.error("Error fetching cart:", error);
//       dispatch(fetchCartFailure(error.message));
//       throw error; // This will cause the promise to be rejected
//     }
//   }
// );

// export const updateCartItem = createAsyncThunk(
//   "cart/updateCartItem",
//   async (updatedCartItem) => {
//     try {
//       await axios.patch(
//         `https://zepto-backend-qvno.onrender.com/cart/${updatedCartItem.username}`,
//         updatedCartItem
//       );
//       return updatedCartItem;
//     } catch (error) {
//       // Handle the error here
//       console.error("Error updating cart item:", error);
//       throw error; // This will cause the promise to be rejected
//     }
//   }
// );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartItems: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     fetchCartRequest: (state) => {
//       state.status = "loading";
//     },
//     fetchCartSuccess: (state, action) => {
//       state.status = "succeeded";
//       state.cartItems = action.payload;
//     },
//     fetchCartFailure: (state, action) => {
//       state.status = "failed";
//       state.error = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCart.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCart.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.cartItems = action.payload;
//       })
//       .addCase(fetchCart.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(updateCartItem.fulfilled, (state, action) => {
//         // Handle successful update if needed
//       });
//   },
// });

// export const {
//   fetchCartRequest,
//   fetchCartSuccess,
//   fetchCartFailure,
//   // ... other exported actions
// } = cartSlice.actions;

// export default cartSlice.reducer;
