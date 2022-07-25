import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCategories = createAsyncThunk('data/getCategories', async () => {
  return fetch('https://zezx3haz.api.sanity.io/v2021-10-21/data/query/production?query=%20%20%20*%5B_type%20%3D%3D%20%22category%22%5D%20%20%20%20', { mode: 'no-cors' })
          .then(res => res.json())
})
export const getRestaurant = createAsyncThunk('data/getRestaurant', async () => {
  return fetch('https://zezx3haz.api.sanity.io/v2021-10-21/data/query/production?query=%20%20%20*%5B_type%20%3D%3D%20%22featured%22%5D%20%7B%0A%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20restaurants%5B%5D%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20...%2C%0A%20%20%20%20%20%20%20%20%20%20dishes%5B%5D%20-%3E%20%2C%0A%20%20%20%20%20%20%20%20%20%20type%20-%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20')
          .then(res => res.json())
})

const initialState = {
  categories: [],
  restaurant:[]
}

export const datasSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getCategories.fulfilled.toString()]: (state, action) => {
        state.categories = action.payload
    },
    [getRestaurant.fulfilled.toString()]: (state, action) => {
      state.restaurant = action.payload
  }
}
})


export default datasSlice.reducer