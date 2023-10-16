import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state, _) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  clearCart,
  decreaseItemQty,
  deleteItem,
  increaseItemQty,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (s) => s.cart.cart;

export const getTotalCartPrice = (s) =>
  s.cart.cart.reduce((prev, pizza) => prev + pizza.totalPrice, 0);

export const getTotalCartQuantity = (s) =>
  s.cart.cart.reduce((prev, pizza) => prev + pizza.quantity, 0);

export const getCurrentQuantityById = (id) => (s) =>
  s.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
