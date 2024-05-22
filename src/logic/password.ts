import { getStorage, setStorage } from "@logic/storage"
import { generateId } from "@logic/utils"

export const importPasswords = (data: any) => {
    setStorage('passwords', data)
}

export const getPasswordCount = () => {
    const passwords = getStorage('passwords')
    if(!passwords || passwords.length === 0) return 0
    return passwords.length
}

export const getAllPasswordList = () => {
    const passwords = getStorage('passwords')
    if(!passwords) return []
    return passwords
}

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
        pid: generateId(),
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

export const updatePasswordSort = (passwords, folder) => {

    const oldPasswordList = getStorage('passwords')

    const otherFolderPasswords = []

    for (let index = 0; index < oldPasswordList.length; index++) {
        if(oldPasswordList[index].folder !== folder) {
            otherFolderPasswords.push(oldPasswordList[index])
        }
    }

    const newPasswordList = [ ...otherFolderPasswords, ...passwords ]

    setStorage('passwords', newPasswordList)

}