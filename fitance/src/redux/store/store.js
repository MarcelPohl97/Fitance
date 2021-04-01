import { configureStore } from '@reduxjs/toolkit'
import vitalReducer from '../features/vitals/vitalSlice';
import inputUIReducer from '../features/inputUI/inputUISlice';

export default configureStore({
  reducer: {
    vital: vitalReducer,
    inputUI: inputUIReducer,
  }
})