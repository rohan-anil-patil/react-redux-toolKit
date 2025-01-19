import { createSlice } from "@reduxjs/toolkit";
import product from "../Data.json";

const initialState = {
  value: product,
  cart: [],
  totalPrice: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProduct: (state) => {
      return state;
    },
    addProduct: (state, action) => {
      const item = action.payload;
      const productIncart = state.cart.find(
        (product) => product.id === item.id
      );
      if (!productIncart) {
        state.cart.push({ ...item, quantity: 1 });
      }
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    incrementQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    decrementQuantity: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload);
      if (product) {
        product.quantity -= 1;
        if (product.quantity <= 0) {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
        }
      }
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
});

export const {
  getProduct,
  addProduct,
  incrementQuantity,
  decrementQuantity,
  calculateTotalPrice,
} = productSlice.actions;
export default productSlice.reducer;
