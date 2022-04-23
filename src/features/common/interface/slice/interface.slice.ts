import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "../entities/toast";

export interface InterfaceState {
  toast: Toast | null;
}

const initialState: InterfaceState = {
  toast: null,
};

export const interfaceSlice = createSlice({
  name: "interface",
  initialState,
  reducers: {
    addToast: (state, { payload }) => {
      const { title, type } = payload;
      return {
        ...state,
        toast: {
          title,
          type,
        },
      };
    },
  },
});

export const actions = interfaceSlice.actions;

export default interfaceSlice.reducer;
