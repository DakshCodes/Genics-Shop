import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'remixicon/fonts/remixicon.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Checkout from './pages/Checkout'
import Details from './pages/Details'
import Footer from './components/footer/footer'
import Products from './components/Products/Products'
import Register from './pages/Register'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import Private from './Route/Private'
import AdminDashBoard from './pages/Admin/AdminDashBoard'
import AdminRoute from './Route/AdminRoute'
import DashBoard from './pages/User/DashBoard'
import CreateCategoriy from './pages/Admin/CreateCategoriy'
import CreateProduct from './pages/Admin/CreateProduct'
import User from './pages/Admin/User'
import AllProducts from './pages/Admin/AllProducts'
import UpdateProduct from './pages/Admin/UpdateProduct'
import Search from './pages/Search/Search'
import AdminProfile from './pages/Admin/AdminProfile'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route element={<Private />} >
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/detail/:slug' element={<Details />} />
          <Route exact path='/allproducts' element={<Products />} />
        </Route>
        {/* user*/}
        <Route  path='/dashboard' element={<Private />} >
          <Route  path='user' element={<DashBoard />} >
            <Route exact path='create-product' element={<CreateProduct />} />
            <Route exact path='products' element={<AllProducts />} />
            <Route exact path='product/:slug' element={<UpdateProduct />} />
          </Route>
        </Route>
        {/* admin */}
        <Route path='/dashboard' element={<AdminRoute />} >
          <Route path='admin' element={<AdminDashBoard />} >
            <Route path='users' element={<User />} />
            <Route path='profile' element={<AdminProfile />} />
            <Route path='create-category' element={<CreateCategoriy />} />
            <Route exact path='products' element={<AllProducts />} />
            <Route exact path='create-product' element={<CreateProduct />} />
            <Route exact path='product/:slug' element={<UpdateProduct />} />
            <Route exact path='users' element={<User />} />
          </Route>
        </Route>

        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </>
  )
}

export default App
