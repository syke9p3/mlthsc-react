import Banner from "@/components/Banner"
import ClassificationResults from "@/components/ClassificationResults"
import PostInput from "@/components/PostInput"
import Posts from "@/components/Posts"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { LayoutGrid, PlayCircle, Save, TriangleAlert } from "lucide-react"
import { FiGithub } from "react-icons/fi"


const Home = () => {

    return (
        <div className="grid lg:grid-cols-12 max-w-[1366px] mx-auto">
            <aside className="hidden lg:block lg:col-span-2 ">
                <div className="px-4 py-2">
                    <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
                        Discover
                    </h2>
                    <div className="space-y-1">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="w-full justify-start"
                        >
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Demo
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <LayoutGrid className="mr-2 h-4 w-4" />
                            Batch
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <Save className="mr-2 h-4 w-4" />
                            Saved Results
                        </Button>
                        <Button variant="ghost" size="sm" className="w-full justify-start">
                            <FiGithub className="mr-2 h-4 w-4" />
                            Source Code
                        </Button>
                    </div>
                </div>

            </aside>
            <main className="lg:col-span-10" >
                <div className="bg-red mx-auto max-w-[1366px] space-y-8">
                    <Banner />
                    <Card className="mx-4 my-4 bg-black text-white">
                        <CardHeader>
                            <CardTitle className="flex gap-2"><TriangleAlert /> Site under construction</CardTitle>
                            <CardDescription className="text-muted opacity-90">Features na hindi pa gumagana / idadagdag pa lang</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul>
                                <li>- sidebar nav</li>
                                <li>- saving</li>
                                <li>- charts / dashboard</li>
                                <li>- login (to save online)</li>
                                <li>- batch input</li>
                                <li>- faq</li>
                            </ul>

                        </CardContent>
                    </Card>

                    <div className="px-4">
                        <Card>
                            <CardContent className="py-8 px-8 grid md:grid-cols-2 gap-8 divide-y-2 md:divide-y-0 md:divide-x-2">
                                <PostInput />
                                <ClassificationResults />
                            </CardContent>
                        </Card>
                    </div>
                    <Posts />
                </div>
            </main >
        </div >

    )
}

export default Home

