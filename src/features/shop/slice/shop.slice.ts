import { createSlice } from "@reduxjs/toolkit";

export interface ShopState {}

const initialState: ShopState = {};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
});

export default shopSlice.reducer;
