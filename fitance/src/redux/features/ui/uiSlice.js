
import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    inputUI:false,
    },
  reducers: {
    toggleInputUI: (state) => {
        state.inputUI = !state.inputUI
    }
  }
})

export const { toggleInputUI } = uiSlice.actions

export const selectUIValues = state => state.ui.inputUI

export default uiSlice.reducer;