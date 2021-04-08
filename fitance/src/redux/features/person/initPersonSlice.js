
import { createSlice } from '@reduxjs/toolkit'

export const initPersonSlice = createSlice({
  name: 'initPerson',
  initialState: {
    init:false,
    },
  reducers: {
    setInitPerson: (state) => {
        state.init = !state.init 
    }
  }
})

export const { setInitPerson } = initPersonSlice.actions;

export const selectInitPerson = state => state.initPerson;

export default initPersonSlice.reducer;