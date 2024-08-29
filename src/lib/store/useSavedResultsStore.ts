import { create } from 'zustand'
import { ClassificationResult } from '../types/types'

type SavedResults = {
    savedResults: ClassificationResult[],
    setResults: (results: ClassificationResult[]) => void
    saveResult: (newResult: ClassificationResult) => void
    deleteResult: (id: number) => void,
    clearSavedResults: () => void,
    isLoading: boolean,
    setLoading: (state: boolean) => void,
}

export const useSavedResultsStore = create<SavedResults>()((set) => ({
    savedResults: [],
    setResults: (results) => set({ savedResults: results }),
    clearSavedResults: () => set({ savedResults: [] }),
    saveResult: (newResult) => set((state) => {

        const newResults = state.savedResults;
        newResults.unshift(newResult)
        return { savedResults: newResults }

    }),
    deleteResult: (id) => set((state) => {

        const newResults = state.savedResults.filter((result) => (result.id !== id))
        return { savedResults: newResults }

    }),
    isLoading: false,
    setLoading: (state) => set({ isLoading: state }),
}))