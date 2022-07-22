import { configureStore } from "@reduxjs/toolkit";
import datasReducer from "../redux/data";

export const store = configureStore({
  reducer: {
    datas: datasReducer,
  },
});
