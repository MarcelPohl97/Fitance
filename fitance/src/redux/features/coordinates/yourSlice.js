
import { createSlice } from '@reduxjs/toolkit'

export const yourSlice = createSlice({
  name: 'yourCoords',
  initialState: {
    lat:'',
    lng:'',
    },
  reducers: {
    setYourCoords: (state, action) => {
        state.lat = action.payload.lat
        state.lng = action.payload.lng
    }
  }
})

export const { setYourCoords } = yourSlice.actions;

export const selectYourCoords = state => state.yourCoords;

export default yourSlice.reducer;