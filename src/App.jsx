import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Hospitaldashboard from './pages/Hospitaldashboard'
import CreateRequest from './components/hospital/CreateRequest'
import RequestDetails from './components/hospital/RequestDetails'
import EditRequest from './pages/EditRequest'
import BloodInventory from './pages/BloodInventory'
import DonorDashboard from './pages/DonorDashboard'
import AvailableRequests from './pages/AvailableRequests'
import BookAppointment from './pages/BookAppointment'
import HospitalAppointments from './pages/HospitalAppointments'
import MyAppointments from './components/donor/MyAppointments'
import HospitalRegister from './pages/HospitalRegister'
import HospitalProfile from './components/hospital/HospitalProfile'
import HospitalDonors from './components/hospital/HospitalDonors'

function App() {
  const location = useLocation()
  const isHospitalPage = location.pathname.startsWith("/hospital/dashboard")
  return (
    <>
    {!isHospitalPage && <Navbar/>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/hospital/dashboard' element={<Hospitaldashboard/>}/>
          <Route path='/hospital/create-request' element={<CreateRequest/>}/>
          <Route path='/hospital/request/:id' element={<RequestDetails/>}/>
          <Route path='/hospital/request/edit/:id' element={<EditRequest/>}/>
          <Route path='/hospital/inventory' element={<BloodInventory/>}/>
          <Route path='/donor/dashboard' element={<DonorDashboard/>}/>
          <Route path='/donor/requests' element={<AvailableRequests/>}/>
          <Route path='/donor/book/:id' element={<BookAppointment/>}/>
          <Route path='/hospital/appointments' element={<HospitalAppointments/>}/>
          <Route path='/donor/appointments' element={<MyAppointments/>}/>
          <Route path='/hospitalregistration' element={<HospitalRegister/>}/>
          <Route path='/hospital/profile' element={<HospitalProfile/>}/>
          <Route path='/hospital/donors' element={<HospitalDonors/>}/>
        </Routes>
    
    </>
  )
}

export default App
