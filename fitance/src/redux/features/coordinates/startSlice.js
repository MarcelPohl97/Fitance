
import { createSlice } from '@reduxjs/toolkit'

export const startSlice = createSlice({
  name: 'startCoords',
  initialState: {
    lat:'',
    lng:'',
    },
  reducers: {
    setStartCoords: (state, action) => {
        state.lat = action.payload.lat
        state.lng = action.payload.lng
    }
  }
})

export const { setStartCoords } = startSlice.actions;

export const selectStartCoords = state => state.startCoords;

export default startSlice.reducer;