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
import { LoadingProvider } from './context/Loading.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
          <LoadingProvider>
            <BrowserRouter>
              <App />
              <Toaster />
            </BrowserRouter>
          </LoadingProvider>
        </CartProvider>
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>,
)
