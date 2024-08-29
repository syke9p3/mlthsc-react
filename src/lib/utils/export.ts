import { ClassificationResult } from "../types/types";

const generateID = () => {
    /* Temporary */
    const id = Date.now().toString()
    return id;
}


export default function exportResults({ filetype, filename, results }: { filetype: string, filename?: string, results: ClassificationResult[] }) {

    if (results.length === 0) {
        alert('No posts to save.')
        throw new Error('No posts to save.');
    }

    let fileContent, mimeType;

    /* Allow only json and csv */
    if (filetype === 'json') {
        fileContent = JSON.stringify(results, null, 2);
        mimeType = 'application/json';
    } else if (filetype === 'csv') {
        fileContent = convertToCSV(results);
        mimeType = 'text/csv';
    } else {
        throw new Error('Invalid format. Should be json or csv.')
    }

    /* Give default file name if no filenameis provided */
    if (!filename) {
        filename = 'report_' + generateID()
    }

    const blob = new Blob([fileContent], {
        type: mimeType,
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = `${filename}.${filetype}`;
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}



export const convertToCSV = (results: ClassificationResult[]) => {
    const headers = ["ID", "Input", "Age", "Gender", "Physical", "Race", "Religion", "Others"];
    const csvRows = [];

    // Add headers row
    csvRows.push(headers.join(","));

    // Add data rows
    results.forEach(post => {
        const row = [
            post.id,
            `"${post.input.replace(/"/g, '""')}"`, // Escape double quotes in input
            post.output.find(label => label.label === "Age")?.score || 0,
            post.output.find(label => label.label === "Gender")?.score || 0,
            post.output.find(label => label.label === "Physical")?.score || 0,
            post.output.find(label => label.label === "Race")?.score || 0,
            post.output.find(label => label.label === "Religion")?.score || 0,
            post.output.find(label => label.label === "Others")?.score || 0
        ];
        csvRows.push(row.join(","));
    });

    return csvRows.join("\n");
}