import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

function Login() {
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(event){
        setError("");

        if(email.trim() === ""){
            setError("Email required.")
        }
    }
  return (
    <main className="flex min-h-screen items-center justify-center bg-red-50 p-6">
      
      <Card className='w-full max-w-md'>
        <CardHeader>
            <CardTitle>
                Welcome Back
            </CardTitle>

            <CardDescription>
                Sign in to continue to LifeLink
            </CardDescription>
         </CardHeader>

            <CardContent>
                {error && (
                    <p className="mb-4 rounded-md bg-red-100 p-3 text-sm text-red-600">
                        {error}
                    </p>
                )}
               
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
              placeholder="Create a Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}/>
          </div>
             
             <Button type="submit" className="w-full mt-3">
                Login
             </Button>

             <div className="mt-4 text-center">
                <p>Don't have an account?
                    <Link to="/register" className="ml-1 font-semibold text-red-600 hover:underline">
                    Register
                    </Link>
                </p>
             </div>
            </CardContent>
      
      </Card>
    </main>
  )
}

export default Login
