import { LOCALSTORAGE_KEY } from "@/lib/constants/constants";
import { ClassificationResult } from "@/lib/types/types";

export const getLocalStorage = (key: string): string => {
    return localStorage.getItem(key) || '';
}

export const setLocalStorage = ({ key, value }: { key: string, value: string }) => {
    localStorage.setItem(key, value);
}

export const getSavedResults_LS = (): ClassificationResult[] => {
    return JSON.parse(getLocalStorage(LOCALSTORAGE_KEY) || '[]')
}

export const setSavedResults_LS = (newSavedResults: ClassificationResult[]) => {
    setLocalStorage({ key: LOCALSTORAGE_KEY, value: JSON.stringify(newSavedResults) })
}