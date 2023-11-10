import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
// import 'react-toastify/dist/react-toastify'
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../src/context/auth'
import { CartProvider } from './context/cart.jsx';
import { SearchProvider } from './context/search.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>,
)
