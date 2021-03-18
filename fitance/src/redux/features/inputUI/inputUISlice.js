import { createSlice } from '@reduxjs/toolkit'

export const InputUISlice = createSlice({
  name: 'inputui',
  initialState: {
      completeCalculationData:false,
      inputStatus:0,
    },
  reducers: {
    setInputStatus: state => {
        state.completeCalculationData = !state.completeCalculationData 
    },
    setCompleteCalculationData: state => {
        state.completeCalculationData = !state.completeCalculationData
    }
  }
})

export const { setInputStatus, setCompleteCalculationData } = InputUISlice.actions

export const selectInputUI = state => state.inputui;

export default InputUISlice.reducer