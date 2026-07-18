import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/FirebaseConfig'
import { useNavigate, useParams } from 'react-router-dom'
import DonorLayout from '@/components/donor/DonorLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { auth } from '@/firebase/FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

function BookAppointment() {
    //gets the request ID from the URL
    const {id} = useParams();
    const navigate = useNavigate()

    //store the appointment date
    const [date, setDate] = useState("")
    //store the appointment time
    const [time, setTime] = useState("")
    
    const donor = JSON.parse(localStorage.getItem("user"))

    async function handleSubmit(event){
        event.preventDefault();

        //check if the data is empty
        if(date.trim() === ""){
            alert("Please select a date.")
            return;
        }
        if(time.trim() === ""){
            alert("Please select a time.")
            return;
        }
        try{
            
        const requestRef = doc(db, "bloodRequests", id);
        const requestSnap = await getDoc(requestRef);

        if (!requestSnap.exists()){
            alert("Blood request not found.")
            return;
        }
        //store blood data
        const request = requestSnap.data()

        console.log(donor);
        console.log(request)
            //Save the appointment in firebase
            await addDoc(collection(db, "appointments"), {
                //blood request
                requestId: id,
                patientName: request.patientName,
                bloodGroup: request.bloodGroup,
                county: request.county,

                //donor details
               donorId: auth.currentUser.uid,
               donorName: donor.fullName,
               donorEmail: auth.currentUser.email,
               donorBloodGroup: donor.bloodGroup,
               donorCounty: donor.county,
               donorPhone: donor.phoneNumber,

                //Appointment details
                appointmentDate : date,
                appointmentTime: time,

                //Default appointment status
                status: "Pending",

                //Date created
                createAt: new Date(),
            });
            //Let the donor know it worked
            alert("Appointment booked successfully!")
            navigate("/donor/dashboard")
        } catch(error){
            console.error(error);
            alert("Failed to book appointment.")
        }

        await addDoc(collection(db, "notifications"), {
            message: `${donor.fullName} booked a donation appointment.`,
            createdAt: new Date()
        })

    }
  return (
    <DonorLayout>
      <Card className="mx-auto max-w-lg">
        <CardHeader>
            <CardTitle>
                Book Donation Appointment
            </CardTitle>
        </CardHeader>

        <CardContent>
            <form 
            onSubmit={handleSubmit}
            className='space-y-5'>
                <div>
                    <Label>Date</Label>
                    <Input 
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    />
                </div>

                <div>
                    <Label>Time</Label>

                    <Input 
                    type="time"
                    value={time}
                    onChange={(event)=> setTime(event.target.value)}
                    />
                </div>

                <Button
                type="submit"
                className="w-full">
                    Book Appointment
                </Button>
            </form>
        </CardContent>
      </Card>
    </DonorLayout>
  )
}

export default BookAppointment
