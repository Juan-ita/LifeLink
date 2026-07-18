import { Link } from 'react-router-dom'
import { LayoutDashboard, Droplets, Calendar, User, LogOut } from 'lucide-react'
import { db, auth } from '@/firebase/FirebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

function DonorSidebar() {

  const [notificationCount, setNotificationCount] = useState(0)

  useEffect (() => {
    async function loadNotifications(){
      //get all appointments
      const querySnapshot = await getDocs(collection(db, "appointments")
    );

    //Keep only this donor's appointments
    const myAppointments = querySnapshot.docs.filter((doc) => {
      const data = doc.data();

      return(
        data.donorId === auth.currentUser.uid &&
        data.status !== "Pending"
      )
    })

    //Save notification count
    setNotificationCount(myAppointments.length)
    }
    loadNotifications()
  }, [])
  return (
    <aside className='w-64 min-h-screen bg-red-700 p-5 text-white'>
      <h2 className="mb-10 text-2xl font-bold">
        LifeLink
      </h2>

      <nav className='space-y-5'>
        {/* Dashbosrd */}
        <Link to="/donor/dashboard"
        className='flex items-center gap-3 rounded p-3 hover:bg-red-800'>
            <LayoutDashboard/>
            Dashboard
        </Link>

        {/* Blood requests */}
        <Link to="/donor/requests"
        className='flex items-center gap-3 rounded p-3 hover:bg-red-800'>
            <Droplets/>
            Blood Requests
        </Link>

        {/* My Appointment */}
        <Link to="/donor/appointments"
        className='flex items-center gap-3 rounded p-3 hover:bg-red-800'>
           <div className='flex items-center gap-3'>
             <Calendar/>
              <span>My Appointments</span>
           </div>

           {/* Notification badge */}
           {notificationCount > 0 && (
            <span className='rounded-full bg-white px-2 py-1 text-xs font-bold text-red-600'>
              {notificationCount}
            </span>
           )}
        </Link>

        {/* Profile */}
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
