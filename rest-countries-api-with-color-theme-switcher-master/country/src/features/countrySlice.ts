import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface countryState {
  value: number
}

const initialState: countryState = {
  value: 0,
}

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = countrySlice.actions

export default countrySlice.reducer