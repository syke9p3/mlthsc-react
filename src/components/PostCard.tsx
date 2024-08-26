import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"
import { ClassificationResult } from "@/lib/types/types";
import { cn } from "@/lib/utils";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const THRESHOLD = 30;

const PostCard = ({ post, isLoading }: { post: ClassificationResult, isLoading?: boolean }) => {

    console.log(post)

    return (
        <Card className="overflow-hidden" >
            <div className="flex items-center bg-[#1E1E2E] text-[#EFF1F5] px-4 py-2" >
                <CardTitle className="text-sm">{!isLoading ? post?.id : 'Loading...'}</CardTitle>
                <button className="ml-auto">
                    <HiOutlineDotsHorizontal />
                </button>
            </div>
            <CardContent className="">
                <CardDescription className="pb-4 border-b my-4">{!isLoading ? post.input : ''}</CardDescription>

                {post.output?.sort((a, b) => (b.score - a.score)).map((label, i) => (
                    <LabelBar key={i} name={label.label.toLowerCase()} score={label.score * 100} />
                ))}

            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}

type LabelBarProps = {
    name: string,
    score: number
}

const LabelBar = ({ name, score }: LabelBarProps) => {

    const isAboveThreshold = score > THRESHOLD;
    const style = {
        "--label-length": `${isAboveThreshold ? score : 10}%`,
        "--label-color": `var(--out-${name})`
    } as React.CSSProperties;


    return (
        <div className={cn("flex items-center hover:scale-105 p-1 hover:px-4 rounded-full",
            {
                "opacity-100 hover:bg-gray-200 ": isAboveThreshold,
                "opacity-30 hover:bg-gray-300 ": !isAboveThreshold,
            }
        )}>

            <div className="opacity-80 text-sm bg-gray-200 px-2 py-1 rounded-full">({`${score.toFixed(2)}%`})</div>
            <div
                style={style}
                className={cn(`w-[var(--label-length)]`)}
            // style={{ width: `${labelScore}%` }}
            // style={{ width: isAboveThreshold ? labelScore + '%' : "10px" }}
            >
                <div className='h-[9px] ml-1 mr-2  rounded-sm bg-[var(--label-color)] label-${labelName} ${labelScore}'></div>
            </div>
            <b className='capitalize text-sm ml-auto min-w-12 text-right'>{name}</b>
        </div>
    )
}

export default PostCard