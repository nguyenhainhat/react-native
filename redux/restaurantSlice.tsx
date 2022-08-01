import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store';
import { RestaurantState } from '../type.d';

type initialStateType = {
  restaurantList: RestaurantState[];
};

interface RestaurantInitialState {
  restaurant: Object
}

const initialStates: RestaurantInitialState = {
  restaurant: {}
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: initialStates,
  reducers: {
    setRestaurant: (state: typeof initialStates, action: PayloadAction<{}>) => {
        state.restaurant = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions

export const selectRestaurants = (state: RootState) => state.restaurant.restaurant


export default restaurantSlice.reducer