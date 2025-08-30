// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1, price: 1500 }); // สมมติราคา
      } else {
        existingItem.quantity++;
      }
    },// แก้ bug : เพิ่ม reducer removeItem
    removeItem(state, action) {
      const id = action.payload.id;
      const existingItem = state.items.find(item => item.id === id);
      if (!existingItem) return;

      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
