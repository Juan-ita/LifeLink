import DashboardCard from '@/components/hospital/DashboardCard'
import Sidebar from '@/components/hospital/Sidebar'
import { Calendar, Droplets, ClipboardList, Users } from 'lucide-react'
import QuickActions from '@/components/hospital/QuickActions'
import RecentRequests from '@/components/hospital/RecentRequests'
import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/FirebaseConfig'

function Hospitaldashboard() {

  // Store dashboard statistics
  const [status, setStatus] = useState ({
    donors: 0,
    requests: 0,
    units: 0,
    appointments: 0,
  });

  //Run once when the dashboard loads
  useEffect(()=>{
    async function fetchStatus (){
      try{
        //get all blood requests
        const requestsSnapshot = await getDocs(
          collection(db, "bloodRequests")
        );
        //Get all blood inventory
        const inventorySnapshot = await getDocs(
          collection(db, "bloodInventory")
        );
        //variable to store total blood units
        let totalUnits = 0;

        //loop through every inventory document
        inventorySnapshot.forEach((doc) => {

          //Add the units from each document
          totalUnits += Number(doc.data().units|| 0);
        })

        //update the dashboard cards
        setStatus({
          donors: 0,

          //Number of vlood requests
          requests: requestsSnapshot.size,

          //total blood units available
          units: totalUnits,

          appointments: 0,
        })
      } catch(error){
        console.error(error);
      }
    }
    //call the function
    fetchStatus()
  }, [])
  return (
    
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
      <main className='flex-1 p-8'>
        <h1 className='text-3xl font-bold'>Hospital Dashboard</h1>
        <p className='text-gray-500 mt-2'>Welcome back, Nairobi Hospital</p>

        <div className='mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
          <DashboardCard 
          title="Registered Donors"
          value={status.donors}
          icon={<Users size={28}/>}
          />

          <DashboardCard 
          title="Blood Requests"
          value={status.requests}
          icon={<ClipboardList size={28}/>}
          />

          <DashboardCard 
          title="Blood Units"
          value={status.units}
          icon={<Droplets size={28}/>}
          />

          <DashboardCard 
          title="Appointments"
          value={status.appointments}
          icon={<Calendar size={28}/>}
          />
        </div>

        <QuickActions/>
        <RecentRequests/>
      </main>
    </div>
  )
}

export default Hospitaldashboard
