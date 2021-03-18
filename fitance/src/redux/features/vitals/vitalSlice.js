import { createSlice } from '@reduxjs/toolkit'

export const vitalSlice = createSlice({
  name: 'vital',
  initialState: {
    age: 0,
    height:0,
    test:false
    },
  reducers: {
    SetFormValues: (state, action) => {
        state.age = action.payload.age
        state.height = action.payload.height
    }
  }
})

export const { SetFormValues } = vitalSlice.actions

export const selectFormValues = state => state.vital.test

export default vitalSlice.reducer