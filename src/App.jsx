import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'remixicon/fonts/remixicon.css'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App
