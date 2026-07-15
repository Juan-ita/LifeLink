import { Button } from "../ui/button"
import { Plus, Users, Calendar } from "lucide-react"

function QuickActions() {
  return (
    <div className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold">
        Quick Actions
      </h2>
       {/* Create Blood Request */}
      <div className="flex flex-wrap gap-4">
        <Button className="flex items-center gap-2 bg-red-600 hover:bg-red-700">
            <Plus size={18}/>
            Creat Blood Request
        </Button>

        {/* View Doners */}
        <Button variant="outline" className="flex items-center gap-2"> 
            <Users size={18}/>
            View Donors
        </Button>

        {/* View Appointments */}
        <Button variant="outline" className="flex items-center gap-2">
            <Calendar size={18}/>
            View Appointments
        </Button>
      </div>
    </div>
  )
}

export default QuickActions
