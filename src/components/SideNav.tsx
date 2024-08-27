import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LayoutGrid, PlayCircle, Save } from "lucide-react"
import { FiGithub } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom"

const navItems = [
    {
        name: 'Demo',
        icon: <PlayCircle className="mr-2 h-4 w-4" />,
        link: '/'
    },
    {
        name: 'Batch',
        icon: <LayoutGrid className="mr-2 h-4 w-4" />,
        link: '/batch'
    },
    {
        name: 'Saved Results',
        icon: <Save className="mr-2 h-4 w-4" />,
        link: '/saved'
    },
    {
        name: 'Source Code',
        icon: <FiGithub className="mr-2 h-4 w-4" />,
        link: 'https://github.com/syke9p3/mlthsc-thesis'
    },
]


export default function SideNav() {

    const location = useLocation();

    return (
        <aside className="hidden lg:block lg:col-span-2 ">
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

