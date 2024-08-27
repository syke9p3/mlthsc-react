

import {
    Search,
} from "lucide-react"

import { Input } from "./ui/input"
import User from "./User"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="bg-white border-b-2 flex flex-col sm:gap-4 sm:py-4 sticky">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Link to="/" className="flex gap-3">
                    <img src="/assets/mlthsc.png" className="w-8" />
                    <h1 className="font-bold hidden sm:block text-xl lg:text-2xl">mlthsc.</h1>
                </Link>
                <div className="relative ml-auto flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                    />
                </div>
                <User />
            </header>
        </div>
    )
}

export default Header