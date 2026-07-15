import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Hospitaldashboard from './pages/Hospitaldashboard'
import CreateRequest from './components/hospital/CreateRequest'
import RequestDetails from './components/hospital/RequestDetails'
import EditRequest from './pages/EditRequest'

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
          <Route path='/hospital/request/:id' element={<RequestDetails/>}/>
          <Route path='/hospital/request/edit/:id' element={<EditRequest/>}/>
        </Routes>
    
    </>
  )
}

export default App
