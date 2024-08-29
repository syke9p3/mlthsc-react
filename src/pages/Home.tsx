import Banner from "@/components/Banner"
import ClassificationResults from "@/components/ClassificationResults"
import PostInput from "@/components/PostInput"
import SavedResults from "@/components/SavedResults"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatePresence } from "framer-motion"


const Home = () => {

    return (
        <div className="space-y-8">
            <Banner />
            {/* <Card className="mx-4 my-4 bg-black text-white">
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
            </Card> */}

            <div className="md:px-4">
                <Card>
                    <CardContent className="py-8 md:px-8 grid md:grid-cols-2 gap-8 divide-y-2 md:divide-y-0 md:divide-x-2">
                        <PostInput />
                        <ClassificationResults />
                    </CardContent>
                </Card>
            </div>
            <AnimatePresence>
                <SavedResults />
            </AnimatePresence>
        </div>

    )
}

export default Home

