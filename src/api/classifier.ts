import { pipeline } from '@xenova/transformers';

let classifier: any;
export let modelStatus = "loading";

/**
 * sets the ready status of the classifier model
 * @param {string} status 
 */
const setModelStatus = (status: string) => {
    modelStatus = status;
}

const initializeClassifier = async () => {
    try {
        setModelStatus("loading");
        classifier = await pipeline(
            'text-classification', // task
            'syke9p3/bert-multilabel-tagalog-hate-speech-classifier' // model
        );
        setModelStatus("ready");
    } catch (error) {
        setModelStatus("error");
        console.error('Error initializing classifier:', error);
        throw error;
    }
}

/**
 * Classifies input text using the model
 * @param {string} inputText - The text to classify
 * @returns {Promise} - A promise that resolves with the classification result
 */
export const classify = async (inputText: string): Promise<any> => {
    if (!classifier) {
        await initializeClassifier()
    }

    try {
        // const startTime = performance.now();

        // Your code here
        // console.log('Before function call');
        const output = await classifier(inputText, { topk: 6 });
        // console.log(output);
        // console.log('After function call');

        // const endTime = performance.now();
        // console.log(`Total time taken: ${endTime - startTime}ms`);
        return output;
    } catch (error) {
        console.error('Error during classification:', error);
        throw error;
    }


}

