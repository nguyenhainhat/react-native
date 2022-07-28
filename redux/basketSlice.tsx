import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { BasketState } from "../type.d";

type initialStateType = {
  basketList: BasketState[];
};

interface BasketInitialState {
  items: Array<initialStateType>
}

const initialStates: BasketInitialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: initialStates,
  reducers: {
    addToBasket: (state: RootState, action: PayloadAction<initialStateType>) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state: RootState, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex(
        (item: any) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in basket`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state: RootState) => state?.basket?.items;
export const selectBasketItemsWithId = (state: RootState, id: String) =>
  state?.basket?.items.filter((item: any) => item.id === id);
export const selectBasketTotal = (state: RootState) =>
  state?.basket?.items.reduce((total: Number, item: any) => (total += item.price), 0);

export default basketSlice.reducer;
