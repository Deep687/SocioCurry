import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    elements: [], // Initialize items as an array
  },
  reducers: {
    addItem: (state, action) => {
      state.elements.push(action.payload); // Use push to add new item to items array
    },
    removeItem: (state, action) => {
      // Filter out the item with the specified id
      state.elements = state.elements.filter(
        (element) => element.card.info.id !== action.payload.id,
      );
    },
    clearItems: (state) => {
      state.elements.length = 0; // Clear all items by setting the length to 0
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions; // Export the actions
export default cartSlice.reducer;
