import { ClassificationResult } from "@/lib/types/types";
import axios from 'axios'
import { classify } from "./classifier";
// import { getLocalStorage, setLocalStorage } from "./localstorage";

const BASE_URL = "http://localhost:8000"
// const LOCAL_STORAGE_KEY = "saved-results"

export const getSavedPosts = async (): Promise<ClassificationResult[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/posts`)
        return response.data;
    } catch (error: any) {
        console.log("API error: ", error.message);
        throw error;
    }
}

export const getClassification = async (input: string) => {
    try {
        console.log("get classification submitted form")
        const output = await classify(input);
        console.log("output: ", output)
        return output;

    } catch (error: any) {
        console.log("client error: ", error.message)
    }

}

// export const saveResultsToLocalStorage = (result: ClassificationResult) => {

//     const localStorage = getLocalStorage(LOCAL_STORAGE_KEY) || '[]';
//     setLocalStorage({key: LOCAL_STORAGE_KEY, value: 's'});
// }



