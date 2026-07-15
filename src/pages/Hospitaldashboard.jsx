import DashboardCard from '@/components/hospital/DashboardCard'
import Sidebar from '@/components/hospital/Sidebar'
import { Calendar, Droplets, ClipboardList, Users } from 'lucide-react'
import QuickActions from '@/components/hospital/QuickActions'


function Hospitaldashboard() {
  return (
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
      <main className='flex-1 p-8'>
        <h1 className='text-3xl font-bold'>Hospital Dashboard</h1>
        <p className='text-gray-500 mt-2'>Welcome back, Nairobi Hospital</p>

        <div className='mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
          <DashboardCard 
          title="Registered Donors"
          value="125"
          icon={<Users size={28}/>}
          />

          <DashboardCard 
          title="Blood Requests"
          value="18"
          icon={<ClipboardList size={28}/>}
          />

          <DashboardCard 
          title="Blood Units"
          value="46"
          icon={<Droplets size={28}/>}
          />

          <DashboardCard 
          title="Appointments"
          value="12"
          icon={<Calendar size={28}/>}
          />
        </div>

        <QuickActions/>
      </main>
    </div>
  )
}

export default Hospitaldashboard
