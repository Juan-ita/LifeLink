import { Link } from 'react-router-dom'
import { LayoutDashboard, Droplets, Calendar, User, LogOut } from 'lucide-react'

function DonorSidebar() {
  return (
    <aside className='w-64 min-h-screen bg-red-700 p-5 text-white'>
      <h2 className="mb-10 text-2xl font-bold">
        LifeLink
      </h2>

      <nav className='space-y-5'>
        <Link to="/donor/dashboard"
        className='flex items-center gap-3 rounded p-3 hover:bg-red-800'>
            <LayoutDashboard/>
            Dashboard
        </Link>

        <Link to="/donor/requests"
        className='flex items-center gap-3 rounded p-3 hover:bg-red-800'>
            <Droplets/>
            Blood Requests
        </Link>
        <Link to="/donor/appointments"
        className='flex items-center gap-3 rounded p-3 hover:bg-red-800'>
            <Calendar/>
            My Appointments
        </Link>
        <Link to="/donor/profile"
        className='flex items-center gap-3 rounded p-3 hover:bg-red-800'>
            <User/>
            Profile
        </Link>

        <button className='flex items-center w-full gap-3 rounded p-3 hover:bg-red-800'>
            <LogOut/>
            Logout
        </button>
      </nav>
    </aside>
  )
}

export default DonorSidebar
