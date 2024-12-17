import { createSlice } from '@reduxjs/toolkit'

const initialProductsState = [
  {
    id: 1,
    description: "Swansea City Shirt",
    price: 55.99,
    likes: 0
  },
  {
    id: 2,
    description: "Cardiff City Shirt",
    price: 1.99,
    likes: 0
  },
  {
    id: 3,
    description: "Bugatti Divo",
    price: 4000000,
    likes: 0
  }
]

let nextId = 4;

const productsSlice = createSlice({
  
  name: 'products',
  
  initialState: initialProductsState,
  
  reducers: {
    
    addProduct: (state, action) => {
      // Note: action.payload is an object with properties {description, price}.
      state.push({
        id: nextId++,
        description: action.payload.description,
        price: action.payload.price,
        likes: 0
      })
    },

    likeProduct: (state, action) => {
      // Note: action.payload is just the id of the product to "like".
      const product = state.find(p => p.id === action.payload)
      if (product) {
        product.likes++
      }
    },

    removeProduct: (state, action) => {
      // Note: action.payload is just the id of the product to "remove".
      const productIndex = state.findIndex(p => p.id === action.payload)
      if (productIndex !== -1) {
        state.splice(productIndex, 1)
      }
    }
  }
})

export default productsSlice