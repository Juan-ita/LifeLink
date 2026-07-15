import { Button } from '../ui/button'

function RecentRequests() {
    const requests=[
        {
            id:1,
            patient: "Hannah Banks",
            bloodGroup: "O+",
            status: "Urgent"
        },
        {
            id: 2,
            patient: "John Kim",
            bloodGroup: "A+",
            status: "Pending"
        },
        {
            id: 3,
            patient: "Mary Anne",
            bloodGroup: "B-",
            status: "Approved"
        },
    ]
  return (
    <div className='mt-10 rounded-xl bg-white p-6 shadow-md'>
      <h2 className='mb-6 text-2xl font-semibold'>
        Recent Blood Requests
      </h2>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='border-b'>
            <th className='py-3 text-left'>
                Patient
            </th>

            <th className='py-3 text-left'>
                Blood Group
            </th>

            <th className='py-3 text-left'>
                Status
            </th>

            <th className='py-3 text-left'>
                Action
            </th>
        </tr>  
        </thead>

        <tbody>
            {requests.map((request) => (
                <tr 
                key={request.id}
                className='border-b'>

                    <td className='py-4'>
                        {request.patient}
                    </td>

                    <td>
                        {request.bloodGroup}
                    </td>

                    <td>
                       <span className='rounded-full bg-red-100 px-3 py-1 text-sm text-red-700'>
                        {request.status}
                    </span>  
                    </td>

                    <td>
                        <Button variant='outline' size='sm' className="cursor-pointer">
                            view
                        </Button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentRequests
