

// import {
//     Search,
// } from "lucide-react"

// import { Input } from "./ui/input"
import navItems from "@/lib/constants/navItems"
// import User from "./User"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

const Header = () => {
    return (
        <header className="bg-white border-b-2 flex flex-col sm:gap-4 sm:py-4 sticky top-0 z-50">
            <nav className="sticky top-0 z-30 flex justify-between w-full h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                <Link to="/" className="flex gap-3">
                    <img src="/assets/mlthsc.png" className="w-8" />
                    <h1 className="font-bold hidden sm:block text-xl lg:text-2xl">mlthsc.</h1>
                </Link>
                <div className="relative ml-auto flex-1 md:grow-0 gap-2 hidden md:flex ">
                    {
                        navItems.map((item) => (
                            <Link to={item.link} key={item.name} target={item.link.substring(0, 1) != "/" ? '_blank' : ''}>
                                <Button
                                    variant={"ghost"}
                                    size="sm"
                                    className={cn("w-full justify-start bg-transparent", {
                                        'hover:bg-slate-200 ': location.pathname !== item.link,
                                        'text-blue-500 hover:text-blue-500': location.pathname === item.link
                                    })}
                                >
                                    {item.icon}
                                    {item.name}
                                </Button>
                            </Link>
                        ))
                    }

                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <nav className="grid gap-6 text-lg font-medium">

                            <Link
                                to="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <img src="/assets/mlthsc.png" className="w-8" />

                                <span className="sr-only">mlthsc</span>
                            </Link>
                            {
                                navItems.map((item) => (
                                    <Link
                                        to={item.link}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </nav>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}

export default Header