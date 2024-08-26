import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useAuthStore } from "@/lib/store/useAuthStore"
import { User } from "@/lib/types/types"
import { useNavigate } from "react-router"

const Login = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: '',
        email: ''
    })

    const handleChangeValue = (value: string, field: string) => {
        setForm((prevForm) => ({
            ...prevForm,
            [field]: value
        }))
    }

    const { login } = useAuthStore();

    const handleSubmitLogin = (form: User) => {
        /* verify form inputs */
        console.log('Login Form: ', form)
        login(form)
        navigate('/')
    }

    return (
        <div className="min-h-[80vh] grid place-items-center">
            <Card className="mx-auto max-w-sm">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription>Enter your email and password to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Username</Label>
                            <Input
                                onChange={(e) => handleChangeValue(e.target.value, 'username')}
                                id="name" type="text" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                onChange={(e) => handleChangeValue(`${e.target.value} + @gmail.com`, 'email')}
                                id="email" type="email" placeholder="m@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <Button type="submit"
                            onClick={() => handleSubmitLogin(form)}
                            className="w-full">
                            Login
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login



