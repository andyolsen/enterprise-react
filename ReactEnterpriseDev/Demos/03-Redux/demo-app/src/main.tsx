import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import counterSlice from './counterSlice';
import productsSlice from './productsSlice';
import App from './App.tsx'
import './index.css'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    products: productsSlice.reducer
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)