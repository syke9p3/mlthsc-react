export const getLocalStorage = (key: string): string => {
    return localStorage.getItem(key) || '';
}

export const setLocalStorage = ({ key, value }: { key: string, value: string }) => {
    localStorage.setItem(key, value);
}

