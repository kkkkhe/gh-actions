import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

export const counterFactory = () => {
  type InitialState = {
    counter: number
  }
  const baseName = 'feature/counter'
  const slice = createSlice({
    name: baseName,
    initialState: {
      counter: 1
    },
    reducers: {
      increase: (state, {payload}: PayloadAction<number>) => {
        state.counter += payload
      },
      decrease: (state, {payload}: PayloadAction<number>) => {
        state.counter -= payload
      }
    }
  })
  const selectModel = (state: InitialState) => state
  const counter = createSelector(selectModel, state => state.counter)
  const selector = {
    counter
  }

  const actions = {
    increase: slice.actions.increase,
    decrease: slice.actions.decrease
  }

  const reducer = {[slice.name]: slice.reducer}

  return {
    selector,
    actions,
    reducer,
    name: baseName,
  }
}

console.log(1)