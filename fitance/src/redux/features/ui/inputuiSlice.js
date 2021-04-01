import { createSlice } from '@reduxjs/toolkit'

export const inputuiSlice = createSlice({
  name: 'inputui',
  initialState: {
    formStatus: false,
    completeCalculation:false,
    },
  reducers: {
    setFormStatus: state => {
        state.formStatus = !state.formStatus
    },
    setCompleteCalculation: state => {
      state.completeCalculation = !state.completeCalculation
    }
  }
})

export const { SetFormValues } = vitalSlice.actions

export const selectFormValues = state => state.vital

export default vitalSlice.reducer