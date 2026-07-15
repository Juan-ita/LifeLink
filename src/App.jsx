import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Hospitaldashboard from './pages/Hospitaldashboard'
import CreateRequest from './components/hospital/CreateRequest'

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/hospital/dashboard' element={<Hospitaldashboard/>}/>
          <Route path='/hospital/create-request' element={<CreateRequest/>}/>
        </Routes>
    
    </>
  )
}

export default App
