import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    cartIds: [5, 6] // Update the key name to 'cartIds' to match your usage
};

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            state.cartIds.push(action.payload); // Add the new item ID to the cartIds array
        },
        removeFromCart: (state, action) => {
            state.cartIds = state.cartIds.filter(id => id !== action.payload); // Filter out the removed item ID
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
