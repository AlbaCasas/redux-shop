import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../entities/toast";

export interface interfaceState {
  toast: Toast | null;
}

const initialState: interfaceState = {
  toast: null,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {},
});

export default interfaceSlice.reducer;
