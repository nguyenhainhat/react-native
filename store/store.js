import { configureStore } from "@reduxjs/toolkit";
import datasReducer from "../redux/data";
import basketReducer from "../redux/basketSlice";
import restaurantReducer from "../redux/restaurantSlice";

export const store = configureStore({
  reducer: {
    datas: datasReducer,
    basket: basketReducer,
    restaurant: restaurantReducer
  },
});
