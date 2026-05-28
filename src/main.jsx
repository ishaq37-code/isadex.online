import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/cartContext.jsx'

import WhishlistProvider from '../src/context/WhishlistContext.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    
<WhishlistProvider>


<CartProvider>
    <BrowserRouter>
    <App />
   </BrowserRouter>
</CartProvider>
</WhishlistProvider>


   
  </StrictMode>,
)
