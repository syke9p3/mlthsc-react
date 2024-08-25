import { initialResult, useResultStore } from '@/lib/store/useResultStore'
import PostCard from './PostCard'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { CircleX, RotateCcw, Save } from 'lucide-react'
import _ from 'lodash'

const ResultCard = () => {

    const result = useResultStore((state) => state.result)
    const resetResult = useResultStore((state) => state.resetResult)
    const isLoading = useResultStore((state) => state.isLoading)

    const disabledSave = (_.isEqual(initialResult, result))

    const handleReset = () => {
        console.log("resetting result");
        resetResult();
    }

    return (
        <Card className='p-2 border-none'>
            <CardHeader >
                <div className='flex items-center gap-2'>
                    <div className='space-y-2'>
                        <CardTitle>Classification</CardTitle>
                        {/* <CardDescription>The classifier has identified the following labels.</CardDescription> */}
                    </div>

                </div>
            </CardHeader>
            <CardContent className=' shadow-sm'>
                <PostCard post={result} isLoading={isLoading} />
            </CardContent>
            <CardFooter>
                <div className='flex gap-2'>
                    <Button className=""
                        disabled={disabledSave}
                    >
                        <Save className="mr-2 h-4 w-4" />
                        Save
                    </Button>
                    <Button
                        onClick={() => handleReset()}
                        variant={'secondary'}>
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Reset
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ResultCard