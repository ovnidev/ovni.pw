const storage = window.localStorage

export const setStorage = (key: string, value: any): void => {
    if(typeof value === "object") value = JSON.stringify(value)
    storage.setItem(key, value)
}

export const getStorage = (key: string) => {
    const data: any = storage.getItem(key)
    if(/^\s*{\s*"/.test(data) || /^\s*\[/.test(data)) return JSON.parse(data)
    return data
}

export const removeStorage = (key: string): void => {
    storage.removeItem(key)
}