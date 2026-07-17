import DonorLayout from '@/components/donor/DonorLayout'
import { Heart, Calendar, Droplets, Bell } from 'lucide-react'
import DonorCards from '@/components/donor/DonorCards'

function DonorDashboard() {
  return (
    <DonorLayout>
     <h1 className='text-3xl font-bold'>
        Donor Dashboard
    </h1> 
    <p className='mt-2 text-gray-500'>
        Welcome back, Donor
    </p>

    <div className='mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
        <DonorCards
        title="Blood Group"
        value="O+"
        icon={<Heart size={28}/>}
        />

        <DonorCards
        title="Total Donations"
        value="3"
        icon={<Droplets size={28}/>}
        />
        <DonorCards
        title="Appointments"
        value="1"
        icon={<Calendar  size={28}/>}
        />
        <DonorCards
        title="Urdent Reruests"
        value="5"
        icon={<Bell size={28}/>}
        />
    </div>
    </DonorLayout>
  )
}

export default DonorDashboard
