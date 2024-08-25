import { useState, useEffect } from 'react'

type ClassificationResult = {
    label: string
    percentage: number
}

export default function ClassificationResults() {
    const [results, setResults] = useState<ClassificationResult[]>([
        { label: "Positive", percentage: 65 },
        { label: "Neutral", percentage: 20 },
        { label: "Negative", percentage: 15 }
    ])

    useEffect(() => {
        // Sort results by percentage in descending order
        const sortedResults = [...results].sort((a, b) => b.percentage - a.percentage)
        setResults(sortedResults)
    }, [])

    return (
        <div className="w-full max-w-md p-4 bg-background rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Classification Results</h2>
            <div className="space-y-3">
                {results.map((result, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-foreground">{result.label}</span>
                            <span className="text-sm font-medium text-foreground">{result.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                            <div
                                className="bg-primary h-2.5 rounded-full"
                                style={{ width: `${result.percentage}%` }}
                                role="progressbar"
                                aria-valuenow={result.percentage}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}