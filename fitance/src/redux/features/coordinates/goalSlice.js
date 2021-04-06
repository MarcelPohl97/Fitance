
import { createSlice } from '@reduxjs/toolkit'

export const goalSlice = createSlice({
  name: 'goalCoords',
  initialState: {
    lat:'',
    lng:'',
    },
  reducers: {
    setGoalCoords: (state, action) => {
        state.lat = action.payload.lat
        state.lng = action.payload.lng
    }
  }
})

export const { setGoalCoords } = goalSlice.actions;

export const selectGoalCoords = state => state.goalCoords;

export default goalSlice.reducer;