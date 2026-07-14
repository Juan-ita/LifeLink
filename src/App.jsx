import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Hospitaldashboard from './pages/Hospitaldashboard'

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/hospital/dashboard' element={<Hospitaldashboard/>}/>
        </Routes>
    
    </>
  )
}

export default App
