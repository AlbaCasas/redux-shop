import { configureStore } from "@reduxjs/toolkit";
import interfaceSlice, {
  InterfaceState,
} from "src/features/common/interface/slice/interface.slice";
import shopSlice, { ShopState } from "../../features/shop/slice/shop.slice";

export interface IRootState {
  shop: ShopState;
  interface: InterfaceState;
}

export const store = configureStore({
  reducer: { shop: shopSlice, interface: interfaceSlice },
});
