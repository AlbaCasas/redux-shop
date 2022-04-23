import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../../features/shop/slice/shop.slice";

export const store = configureStore({
  reducer: { shop: shopReducer },
});
