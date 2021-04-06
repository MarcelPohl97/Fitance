import { configureStore } from '@reduxjs/toolkit'
import vitalReducer from '../features/vitals/vitalSlice';
import uiReducer from '../features/ui/uiSlice';
import yourCoordsReducer from '../features/coordinates/yourSlice';
import goalCoordsReducer from '../features/coordinates/goalSlice';
import startCoordsReducer from '../features/coordinates/startSlice';

export default configureStore({
  reducer: {
    vital: vitalReducer,
    ui: uiReducer,
    yourCoords: yourCoordsReducer,
    goalCoords: goalCoordsReducer,
    startCoords: startCoordsReducer,
  }
})