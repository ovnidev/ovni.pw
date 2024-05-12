import { getStorage, setStorage } from "@logic/storage"

export const getPasswordCount = () => getStorage('passwords').length

export const getPasswordList = (fid: string) => {

    const passwords = getStorage('passwords')

    if(!passwords) return []

    const folderPasswords = []

    for (let index = 0; index < passwords.length; index++) {
        if(passwords[index].folder === fid) {
            folderPasswords.push(passwords[index])
        }
    }

    return folderPasswords
}

export const getPassword = (id: string) => {

    const passwords = getStorage('passwords')

    if(!passwords) return []

    for (let index = 0; index < passwords.length; index++) {
        if(passwords[index].pid === id) return passwords[index]
    }

}

export const createPassword = (name: string, identifier: string, alphabet: string, length: number, folder: string) => {

    let passwords = getStorage('passwords')

    if(!passwords) passwords = []

    const newPassword = {
        pid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        name: name,
        identifier: identifier,
        alphabet: alphabet,
        length: length,
        folder: folder
    }

    passwords.push(newPassword)

    setStorage('passwords', passwords)
    
}

export const updatePassword = (id: string, name: string, identifier: string, alphabet: string, length: number, folder: string) => {

    const passwords = getStorage('passwords')

    for (let index = 0; index < passwords.length; index++) {
        if(passwords[index].pid === id) {
            passwords[index].name = name
            passwords[index].identifier = identifier
            passwords[index].alphabet = alphabet
            passwords[index].length = length
            passwords[index].folder = folder
            break
        }
    }

    setStorage('passwords', passwords)
    
}

export const deletePassword = (id: string) => {

    const passwords = getStorage('passwords')

    for (let index = 0; index < passwords.length; index++) {
        if(passwords[index].pid === id) {
            passwords.splice(index, 1)
            break
        }
    }
    
    setStorage('passwords', passwords)

}