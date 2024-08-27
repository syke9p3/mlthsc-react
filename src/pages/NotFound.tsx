import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Link, ScrollRestoration } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="bg-slate-100 min-h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center p-4  min-h-[80dvh]">
                <div className="max-w-md w-full space-y-6 text-center ">
                    {/* <img
                    src="/placeholder.svg"
                    width={320}
                    height={240}
                    alt="404 Illustration"
                    className="mx-auto aspect-video rounded-lg object-cover"
                /> */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold">Oops! Page not found.</h1>
                        <p className="text-gray-400">The page you're looking for doesn't exist or has been moved.</p>
                    </div>
                    <div>
                        <Link
                            to="/"
                        >
                            <Button>Go back home</Button>
                        </Link>
                    </div>
                </div>
                <ScrollRestoration />
            </div>
        </div>
    )
}




export default NotFound

