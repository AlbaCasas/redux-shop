import { createSlice } from "@reduxjs/toolkit";

export interface ShopState {
  counter: number;
}

const initialState: ShopState = {
  counter: 0,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export const actions = shopSlice.actions;

export default shopSlice.reducer;
