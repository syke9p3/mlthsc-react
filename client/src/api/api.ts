import { SavedPostData } from "@/lib/types/types";
import axios from 'axios'
import { classify } from "./classifier";

const BASE_URL = "http://localhost:8000"


export const getSavedPosts = async (): Promise<SavedPostData[]> => {
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

