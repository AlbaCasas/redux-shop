import { configureStore } from "@reduxjs/toolkit";
import interfaceSlice from "src/features/interface/slice/interface.slice";
import shopSlice from "../../features/shop/slice/shop.slice";

export const store = configureStore({
  reducer: { shop: shopSlice, interface: interfaceSlice },
});
