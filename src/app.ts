import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import { counterModel } from "./pages/home.model";
const slice = createSlice({
  name: 's',
  initialState: 0,
  reducers: {
    increase: (state) => {
      state += 1
    }
  }
})
const reducer = combineReducers({
})
export const store = configureStore(
  { 
    reducer: {
      's': slice.reducer
    },
})