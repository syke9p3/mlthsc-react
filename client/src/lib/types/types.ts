export type Label = {
    label: validLabel,
    score: number
}

export type ClassificationResult = {
    id: number,
    input: string,
    output: Label[]
}

export type validLabel =
    "Age" |
    "Gender" |
    "Physical" |
    "Race" |
    "Religion" |
    "Others"


export type User = {
    username: string,
    email: string,
}
