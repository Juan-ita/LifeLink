import Sidebar from '@/hospital dashboard/Sidebar'

function Hospitaldashboard() {
  return (
    <div className='flex min-h-screen bg-gray-100'>
        <Sidebar/>
      <main className='flex-1 p-8'>
        <h1 className='text-3xl font-bold'>Hospital Dashboard</h1>
        <p className='text-gray-500 mt-2'>Welcome Nairobi Hospital</p>
      </main>
    </div>
  )
}

export default Hospitaldashboard
