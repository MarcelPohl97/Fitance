import { createSlice } from '@reduxjs/toolkit'

export const InputUISlice = createSlice({
  name: 'inputui',
  initialState: {
      completeCalculationData:false,
      inputStatus:false,
    },
  reducers: {
    setInputStatus: state => {
        state.inputStatus = !state.inputStatus 
    },
    setCompleteCalculationData: state => {
        state.completeCalculationData = !state.completeCalculationData
    }
  }
})

export const { setInputStatus, setCompleteCalculationData } = InputUISlice.actions

export const selectInputUI = state => state.inputui.inputStatus;

export default InputUISlice.reducer