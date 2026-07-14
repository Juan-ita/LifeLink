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
    <div>
      
    </div>
  )
}

export default Login
