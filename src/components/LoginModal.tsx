import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useAuthStore } from "@/lib/store/useAuthStore"
import { User } from "@/lib/types/types"
import { useNavigate } from "react-router"
import { FcGoogle } from "react-icons/fc";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import * as DialogPrimitive from "@radix-ui/react-dialog";

const LoginModal = () => {

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

    const handleSignUpClick = () => {
        navigate('/login');
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Login</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Login to your account</DialogTitle>
                    <DialogDescription>Enter your email and password to save your classifications</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name">Username</Label>
                        <Input
                            className="col-span-3"
                            onChange={(e) => handleChangeValue(e.target.value, 'username')}
                            id="name" type="text" placeholder="John Doe" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            className="col-span-3"
                            onChange={(e) => handleChangeValue(`${e.target.value} + @gmail.com`, 'email')}
                            id="email" type="email" placeholder="m@example.com" required />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            className="col-span-3"
                            placeholder="********"
                            id="password" type="password" required />
                    </div>
                    <div className="px-4 text-right">
                        <p className="text-sm opacity-50 hover:underline cursor-pointer">Forgot Password?</p>
                    </div>
                    <div className="grid gap-2">
                        <Button type="submit"
                            onClick={() => handleSubmitLogin(form)}
                            className="w-full">
                            Continue
                        </Button>
                        <Button type="submit"
                            onClick={() => handleSubmitLogin(form)}
                            variant={'outline'}
                            className="w-full flex items-center gap-2">
                            <FcGoogle />
                            Continue with Google
                        </Button>
                        <div className="pt-2 px-4 text-center">
                            <p className="text-sm">Don't have an account?
                                <DialogPrimitive.Close asChild>
                                    <span
                                        onClick={handleSignUpClick}
                                        className="cursor-pointer hover:underline text-blue-500 font-bold pl-1"
                                    >
                                        Sign Up
                                    </span>
                                </DialogPrimitive.Close>
                            </p>
                        </div>
                    </div>
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default LoginModal;



