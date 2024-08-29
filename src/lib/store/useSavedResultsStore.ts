import { create } from 'zustand'
import { ClassificationResult } from '../types/types'
import { getSavedResults_LS, setSavedResults_LS } from '@/api/localstorage'

type SavedResults = {
    savedResults: ClassificationResult[],
    setResults: (results: ClassificationResult[]) => void
    saveResult: (newResult: ClassificationResult) => void
    deleteResult: (id: number) => void,
    clearSavedResults: () => void,
    isLoading: boolean,
    setLoading: (state: boolean) => void,
}

const initialResults = getSavedResults_LS()

export const useSavedResultsStore = create<SavedResults>()((set) => ({
    savedResults: initialResults,
    setResults: (results) => {

        setSavedResults_LS(results)
        return set({ savedResults: results })
    },
    clearSavedResults: () => set({ savedResults: [] }),
    saveResult: (newResult) => set((state) => {

        const newResults = state.savedResults;
        newResults.unshift(newResult)

        setSavedResults_LS(newResults)
        return { savedResults: newResults }

    }),
    deleteResult: (id) => set((state) => {

        const newResults = state.savedResults.filter((result) => (result.id !== id))

        setSavedResults_LS(newResults)
        return { savedResults: newResults }

    }),
    isLoading: false,
    setLoading: (state) => set({ isLoading: state }),
}))