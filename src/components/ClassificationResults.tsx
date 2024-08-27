import { initialResult, useResultStore } from '@/lib/store/useResultStore'
import { Button } from './ui/button'
import { RotateCcw, Save } from 'lucide-react'
import { cn } from '@/lib/utils'
import Spinner from './Spinner'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

const THRESHOLD = 30;

export default function ClassificationResults() {

    const { result, resetResult, isLoading } = useResultStore()

    const disabledSave = JSON.stringify(initialResult) === JSON.stringify(result);

    const handleReset = () => {
        console.log("resetting result");
        resetResult();
    }

    return (
        <div className="py-8 md:py-4 px-8">
            <div className='mb-4 space-y-1'>
                <h2 className="text-xl font-semibold text-foreground">Classification Results</h2>
                {isLoading ? (
                    <p className='text-muted-foreground text-sm flex items-center'>
                        <Spinner className='text-muted-foreground' />
                        Classifying hate speech...
                    </p>
                ) : (
                    <p className='text-muted-foreground text-sm'>
                        A threshold of <span className="underline decoration-dotted">30%</span> will be used  to determine if a category exists in the hate speech or not.
                    </p>
                )}
            </div>
            <div className='grid gap-8'>
                <AnimatePresence>
                    <div className={cn("space-y-3", { 'animate-pulse': isLoading })}>
                        {result.output?.sort((a, b) => (b.score - a.score)).map((result) => (
                            <motion.div
                                key={result.label}
                                layout
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ ease: "anticipate", duration: 1 }}
                            >
                                <LabelResult label={result.label} score={result.score * 100} isLoading={isLoading} />
                            </motion.div>
                        ))}
                    </div>
                </AnimatePresence>
                <div className=''>
                    <div className='flex gap-2 '>
                        <Button className=""
                            disabled={disabledSave}
                        >
                            <Save className="mr-2 h-4 w-4" />
                            Save Result
                        </Button>
                        <Button
                            disabled={disabledSave}
                            className=''
                            onClick={() => handleReset()}
                            variant={'outline'}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const LabelResult = ({ label, score, isLoading }: { label: string, score: number, isLoading: boolean }) => {

    const isAboveThreshold = score > THRESHOLD;
    const style = {
        "--label-length": `${isAboveThreshold ? score : 10}%`,
        "--label-color": `var(--out-${label.toLowerCase()})`
    } as React.CSSProperties;


    return (
        <div className={cn("flex flex-col bg-background", {
            'opacity-50': !isAboveThreshold
        })}>
            <div className="flex justify-between mb-1">
                {/* <LabelBadge name={label} /> */}
                <span className="text-sm font-medium text-foreground">{label}</span>

                <span className={cn("text-sm font-medium text-foreground opacity-80")}>
                    <AnimatedNumber value={Number((score).toFixed(2))} />%
                </span>
            </div>
            <div className={cn("w-full bg-muted rounded-full h-2.5", {
                'bg-gray-500': isLoading
            })}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(score)}%` }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    style={style}
                    className={cn("h-2.5 rounded-full bg-[var(--label-color)]")}
                    // style={{ width: `${(score)}%` }}
                    role="progressbar"
                    aria-valuenow={score}
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></motion.div>
            </div>
        </div>
    )
}

import { useSpring, useTransform } from "framer-motion";

function AnimatedNumber({ value }: { value: number }) {
    let spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
    let display = useTransform(spring, (current) =>
        current.toFixed(2)
    );

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return <motion.span>{display}</motion.span>;
}
