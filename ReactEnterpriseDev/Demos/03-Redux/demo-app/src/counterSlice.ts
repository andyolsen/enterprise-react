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
    },

    incrementByAmount: (state, action) => {
      console.log(`In incrementByAmount(), action.payload is ${action.payload}`)
      state.value += action.payload
      state.lastUpdated = new Date().toLocaleString()
    }
  }
})

export default counterSlice