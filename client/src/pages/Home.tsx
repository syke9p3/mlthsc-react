import ClassificationResults from "@/components/ClassificationResults"
import Header from "@/components/Header"
import PostInput from "@/components/PostInput"
import Posts from "@/components/Posts"
import ResultCard from "@/components/ResultCard"
import SideNav from "@/components/SideNav"
import { Card, CardContent } from "@/components/ui/card"


const Home = () => {

    return (
        <div>
            <SideNav />
            <Header />
            <div className="pl-0 sm:pl-12 md:pl-8 ">
                <div className="bg-red mx-auto max-w-[1366px] sm:px-4 md:px-8">
                    <div>
                        {/* <h1 className="text-4xl font-bold">Multilabel Hate Speech Classifier</h1> */}
                    </div>
                    <div className="px-4">
                        <Card >
                            <CardContent className="py-8 grid lg:grid-cols-2 px-4 gap-8">
                                <PostInput />
                                <ResultCard />
                            </CardContent>
                        </Card>

                    </div>
                    <Posts />
                    <ClassificationResults />
                </div>
            </div >
        </div >

    )
}

export default Home

