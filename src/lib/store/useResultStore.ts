import { create } from 'zustand'
import { ClassificationResult } from '../types/types'

type ResultStore = {
    result: ClassificationResult
    updateResult: (newResult: ClassificationResult) => void,
    resetResult: () => void
    isLoading: boolean,
    setLoading: (state: boolean) => void,
}

export const initialResult: ClassificationResult = {
    id: 0,
    input: "-",
    output: [{
        label: "Age",
        score: 0
    },
    {
        label: "Gender",
        score: 0
    },
    {
        label: "Physical",
        score: 0
    },
    {
        label: "Race",
        score: 0
    },
    {
        label: "Religion",
        score: 0
    },
    {
        label: "Others",
        score: 0
    }]

}

export const useResultStore = create<ResultStore>()((set) => ({
    result: initialResult,
    updateResult: (newResult) => set({ result: newResult }),
    resetResult: () => set({ result: initialResult }),
    isLoading: false,
    setLoading: (state) => set({ isLoading: state }),

}))
