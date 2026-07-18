import React from 'react'
import { LayoutDashboard, Droplets, ClipboardList, User, Users, LogOut, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'

function Sidebar() {
  return (
    <aside className='w-64 bg-red-700 text-white min-h-screen p-5 rounded-lg'>
      <h2 className='text-2xl font-bold mb-10'>
        LifeLink
      </h2>

      <nav className='space-y-3'>
        <Link to="/hospital/dashboard" className='flex items-center gap-3 p-3 rounded hover:bg-red-800'>
        <LayoutDashboard size={20}/>
        Dashboard
        </Link>

        <Link to="/hospital/inventory" className='flex items-center gap-3 p-3 rounded hover:bg-red-800'>
        <Droplets size={20}/>
        Blood Inventory
        </Link>

        <Link to="/hospital/appointments"
        className='flex items-center gap-3 p-3 rounded hover:bg-red-800'>
          <Calendar size={20}/>
        Appointments
        </Link>

        <Link to="/hospital/create-request" className='flex items-center gap-3 p-3 rounded hover:bg-red-800'>
        <ClipboardList size={20}/>
        Request Blood
        </Link>

        <Link to="/hospital/notifications" className='flex items-center gap-3 p-3 rounded hover:bg-red-800'>
        <Bell size={20}/>
        Notifications
        </Link>

        <Link to="/hospital/donors" className='flex items-center gap-3 p-3 rounded hover:bg-red-800'>
        <Users/>
        Donors
        </Link>

        <Link to="/hospital/profile" className='flex items-center gap-3 p-3 rounded hover:bg-red-800'>
        <User/>
        Profile
        </Link>

        <button className='flex items-center gap-3 p-3 rounded hover:bg-red-800 w-full text-left'>
            <LogOut size={20}/>
            logout
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
