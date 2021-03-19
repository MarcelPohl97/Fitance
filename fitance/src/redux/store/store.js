import { configureStore } from '@reduxjs/toolkit'
import vitalReducer from '../features/vitals/vitalSlice';
import inputUIReducer from '../features/inputUI/inputUISlice';
import mapReducer from '../features/map/mapSlice';

export default configureStore({
  reducer: {
    vital: vitalReducer,
    inputUI: inputUIReducer,
    map: mapReducer,
  }
})