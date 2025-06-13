import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  
  name: 'counter',
  
  initialState: { value: 0, lastUpdated: new Date().toLocaleString()},
  
  reducers: {
    
    increment: (state) => {
      state.value += 1
      state.lastUpdated = new Date().toLocaleString()
    },

    decrement: (state) => {
      state.value -= 1
      state.lastUpdated = new Date().toLocaleString()
    }
  }
})

export default counterSlice