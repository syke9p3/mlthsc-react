import { useEffect, useState } from 'react'
import { Textarea } from './ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from './ui/button'
import { Eraser, SendHorizonal } from 'lucide-react'

import { SavedPostData } from '@/lib/types/types'
import { hateSpeechExamples } from '@/lib/data/examples'
import { getClassification } from '@/api/api'
import { useResultStore } from '@/lib/store/useResultStore'
import { cn, isValidWordCount } from '@/lib/utils'

const generateResult = async (input: string): Promise<SavedPostData> => {
    return {
        "id": Date.now(),
        "input": input,
        "output": await getClassification(input)
    }
}

const PostInput = () => {

    const [input, setInput] = useState("");
    const [charCount, setCharCount] = useState(0);
    const [validCount, setValidCount] = useState(false);

    const updateResult = useResultStore((state) => state.updateResult)
    const setLoading = useResultStore((state) => state.setLoading)
    const isLoading = useResultStore((state) => state.isLoading)

    useEffect(() => {
        setCharCount(input.length)
    }, [input])

    useEffect(() => {
        setValidCount(isValidWordCount(3, 280, charCount))
    }, [charCount])


    const handleSubmit = async (input: string) => {

        try {
            setLoading(true);
            updateResult(await generateResult(input));
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log("post input error: ", e)
        }
    }

    const handleClearBtnClick = (e: any) => {
        e.preventDefault();
        setInput("");
    }

    return (
        <div className='flex flex-col space-y-2 p-4'>
            <Textarea
                placeholder='Enter hate speech'
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <div className='flex items-center'>
                <ExampleSelector setInput={setInput} />
                <span className={cn('ml-auto', {
                    'hidden': charCount === 0,
                    'text-gray-800': validCount,
                    'text-red-500': !validCount,
                })}>{charCount} / 280</span>
            </div>

            <div className='grid-cols-3 space-x-2 py-4'>
                <Button
                    className='col-span-2 disabled:opacity-10'
                    disabled={isLoading}
                    onClick={() => handleSubmit(input)}
                >
                    <SendHorizonal className="mr-2 h-4 w-4" /> Classify
                </Button>
                <Button variant={"secondary"} onClick={(e) => handleClearBtnClick(e)}>
                    <Eraser className="mr-2 h-4 w-4" /> Clear
                </Button>
            </div>
        </div>
    )
}

const ExampleSelector = ({ setInput }: { setInput: (input: string) => void }) => {

    // TODO: move to separate file (data folder)

    return (
        <Select onValueChange={(choice) => setInput(choice)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an example" />
            </SelectTrigger>
            <SelectContent>
                {hateSpeechExamples.map((example, i) => (
                    <SelectItem key={example} value={example}>Example {i + 1}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default PostInput