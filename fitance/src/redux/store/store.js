import { configureStore } from '@reduxjs/toolkit'
import vitalReducer from '../features/vitals/vitalSlice';
import uiReducer from '../features/ui/uiSlice';

export default configureStore({
  reducer: {
    vital: vitalReducer,
    ui:uiReducer,
  }
})