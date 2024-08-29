import { Card, CardContent } from "./ui/card"
import LabelBadge from "./LabelBadge"

const labels = ["Age", "Gender", "Race", "Physical", "Religion", "Others"]


const Banner = () => {
    return (
        <div className="md:mx-4 space-y-8">
            <Card className="bg-[#1E1E2E] overflow-hidden relative   text-[#EFF1F5] border-none rounded-none md:rounded-md shadow-sm flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <CardContent className="grid gap-4 z-10">
                    <div className="col-span-1 space-y-3">
                        <h1 className="text-2xl font-bold">Multilabel Tagalog Hate Speech Classifier </h1>
                        <div className="flex gap-2 items-center">
                            <div className="w-6 h-6 border-2 border-sky-400 rounded-full grid place-items-center"><img src="/assets/ph.png" alt="" className="w-4 h-4" /></div>
                            <p className="text-sm text-sky-400 ">Tagalog</p>
                        </div>
                    </div>
                    <div className="col-span-3 space-y-4">
                        <p className="text-sm leading-relaxed max-w-xl opacity-90">Input Tagalog hate speech text in the textbox below. The classifier accepts a text input from 15 characters up to 280 characters. Classify hate speech according to the following categories: </p>
                        <div className="flex flex-wrap gap-1">
                            {labels.map((label, i) => (
                                <LabelBadge key={i} name={label} />
                            ))}
                        </div>
                    </div>
                </CardContent>
                <div className="absolute opacity-[5%] bottom-0 right-0">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/012/300/958/small/philippines-flag-free-png.png" alt="" />
                </div>

            </Card>
        </div>
    )
}


export default Banner