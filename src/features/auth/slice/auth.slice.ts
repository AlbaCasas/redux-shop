import { createSlice } from "@reduxjs/toolkit";
import { User } from "../entities/user";

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: {
    email: "",
    name: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
