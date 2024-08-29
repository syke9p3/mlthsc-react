import { Button } from "@/components/ui/button"
import navItems from "@/lib/constants/navItems";
import { cn } from "@/lib/utils"

import { Link, useLocation } from "react-router-dom"



export default function SideNav() {

    const location = useLocation();

    return (
        <aside className="self-start hidden lg:block lg:col-span-2 sticky top-[6rem] place-items-start">
            <div className="px-4 py-2">
                <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                    Discover
                </h2>
                <div className="space-y-1">
                    {
                        navItems.map((item) => (
                            <Link to={item.link} key={item.name} target={item.link.substring(0, 1) != "/" ? '_blank' : ''}>
                                <Button
                                    variant={location.pathname === item.link ? "default" : "secondary"}
                                    size="sm"
                                    className={cn("w-full justify-start ", {
                                        'hover:bg-slate-200': location.pathname !== item.link
                                    })}
                                >
                                    {item.icon}
                                    {item.name}
                                </Button>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </aside>
    )
}

