import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

function Register() {
    // store the user's full name
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    
    function handleSubmit(event){
      event.preventDefault();
      setError("");

      if(fullName.trim() === ""){
        setError("Full name required.")
        return;
      }
      if(email.trim() === ""){
        setError("Email is required.")
        return;
      }
      if(password.length < 8){
        setError("Password must be atleast 8 characters.")
        return;
      }
      if(password !== confirmPassword){
        setError("Passwords do not match.")
        return;
      }
      //display the user's information in the console
      console.log("Registration seccessfull!")
      console.log("Full Name", fullName)
      console.log("Email", email)
      console.log("Password", password)
      console.log("Confirm Password", confirmPassword)
    }
  return (
    <main className='flex min-h-screen items-center justify-center bg-red-50 p-6'>
      <Card className="w-full max-w-md">
        <CardHeader>

          <CardTitle>
            Create Your Account
          </CardTitle>

          <CardDescription className="text-sm">
            Join LifeLink and become a blood donor.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {error && (
            <p className='mb-4 rounded-md bg-red-100 p-3 text-sm text-red-600'>{error}</p>
          )}
          <form onSubmit={handleSubmit} className='space-y-5'>

            {/* Name */}
            <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
            className="mt-2"
             id="fullName"
             type="text"
             placeholder="Enter your full name"
             value={fullName}
             onChange={(event) => setFullName(event.target.value)}/>
          </div>

          {/* Email */}
            <div>
            <Label htmlFor="email"> Email</Label>
            <Input
            className="mt-2"
             id="email"
             type="email"
             placeholder="@gmail.com"
             value={email}
             onChange={(event) => setEmail(event.target.value)}/>
          </div>

          {/* Password */}
            <div>
            <Label htmlFor="password"> Password</Label>
            <Input
            className="mt-2"
             id="password"
             type="password"
             placeholder="Creat a Password"
             value={password}
             onChange={(event) => setPassword(event.target.value)}/>
          </div>

          {/* confirm password */}
            <div>
            <Label htmlFor="confirmPassword"> confirm Password</Label>
            <Input
            className="mt-2"
             id="confirmPassword"
             type="password"
             placeholder="*****"
             value={confirmPassword}
             onChange={(event) => setConfirmPassword(event.target.value)}/>
          </div>

          <Button type="submit" className="w-full" asChild>
            Register            
            </Button>

          <div className='mt-4 text-center'> 
            <p className='text-sm text-gray-600'>
              Already have an account?
              <Link to="/login" className="ml-1 font-semibold text-red-600 hover:underline">
              Login
              </Link>
            </p>
          </div>
          </form>
          
        </CardContent>
      </Card>
      
    </main>
  )
}

export default Register
