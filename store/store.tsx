import { configureStore } from "@reduxjs/toolkit";
import datasReducer from "../redux/data";
import basketReducer from "../redux/basketSlice";
import restaurantReducer from "../redux/restaurantSlice";

export const store = configureStore({
  reducer: {
    datas: datasReducer,
    restaurant: restaurantReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

