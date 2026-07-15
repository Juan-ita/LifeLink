import { useState } from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

function CreateRequest() {
    const[county, setCounty] = useState("")
    const[deadline, setDedline] = useState("")
    const [patientName, setPatientName] = useState("")
    const[bloodGroup, setBloodGroup] = useState("")
    const[units, setUnits] = useState("")
    const[urgency, setUrgency] = useState("")

    function handleSubmit(event){
    event.preventDefault();
    console.log({
        patientName,
        bloodGroup,
        units,
        urgency,
        county,
        deadline,
    })
}
  return (
    <main className='p-8'>
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
            <CardTitle>
                Create Blood Request
            </CardTitle>
        </CardHeader>

        <CardContent>
            <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                    <Label>Patient</Label>

                    <Input 
                    value={patientName}
                    onCange={(event) => setPatientName(event.target.value)}
                    placeholder="Enter patient name"
                    />
                </div>

                <div>
                    <Label>Blood Group</Label>

                    <Input 
                    value={bloodGroup}
                    onCange={(event) => setBloodGroup(event.target.value)}
                    placeholder="Example: A+"
                    />
                </div>
                <div>
                    <Label>Units Needed</Label>

                    <Input 
                    value={units}
                    onCange={(event) => setUnits(event.target.value)}
                    placeholder="2"
                    />
                </div>
                <div>
                    <Label>Urgency</Label>

                    <Input 
                    value={urgency}
                    onCange={(event) => setUrgency(event.target.value)}
                    placeholder="Urgent"
                    />
                </div>
                <div>
                    <Label>County</Label>

                    <Input 
                    value={county}
                    onCange={(event) => setCounty(event.target.value)}
                    placeholder="Nairobi"
                    />
                </div>
                <div>
                    <Label>Deadline</Label>

                    <Input 
                    value={deadline}
                    onCange={(event) => setDedline(event.target.value)}
                    />
                </div>

                <Button type="submit" className="w-full">
                    Create Request
                </Button>
            </form>
        </CardContent>
      </Card>
    </main>
  )
}

export default CreateRequest
