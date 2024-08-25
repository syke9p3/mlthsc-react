import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar"
import { useAuthStore } from "@/lib/store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";


const User = () => {

    const { user, logout } = useAuthStore();

    const navigate = useNavigate()

    const handleLogout = () => {
        logout();
        navigate('/login')
    }

    return (
        <div>
            {user ? (
                <div className="cursor-pointer">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center gap-2">
                                <p className="text-sm font-bold">{user.username}</p>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="overflow-hidden rounded-full"
                                >
                                    <Avatar>
                                        <AvatarImage
                                            src="https://avatars.githubusercontent.com/u/75114627?v=4&size=64"
                                            width={36}
                                            height={36}
                                            alt="Avatar"
                                            className="overflow-hidden rounded-full"
                                        />
                                        <AvatarFallback>DP</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleLogout()}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ) : (
                <Link to='/login'>
                    <Button variant={'secondary'}>
                        Login
                    </Button>
                </Link>
            )

            }

        </div>
    )
}

export default User