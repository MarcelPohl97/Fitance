import { configureStore } from '@reduxjs/toolkit'
import vitalReducer from '../features/vitals/vitalSlice';
import mapReducer from '../features/map/mapSlice';

export default configureStore({
  reducer: {
    vital: vitalReducer,
    map: mapReducer,
  }
})