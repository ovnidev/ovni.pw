import { getStorage, setStorage } from "@logic/storage"
import { generateId } from "@logic/utils"
import { IPassword } from "@interfaces/index"

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

export const getPasswordList = (fid: string): any => {

    const passwords = getStorage('passwords')

    if(!passwords) return []

    const folderPasswords = [] as IPassword[]

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

    if(!passwords) passwords = [] as IPassword[]

    const newPassword: IPassword = {
        pid: generateId(),
        name: name,
        identifier: identifier,
        alphabet: alphabet,
        length: length,
        folder: folder,
        version: 1
    }

    passwords.push(newPassword)

    setStorage('passwords', passwords)
    
}

export const updatePassword = (id: string, name: string, identifier: string, alphabet: string, length: number, folder: string, version: number) => {

    const passwords = getStorage('passwords')

    for (let index = 0; index < passwords.length; index++) {
        if(passwords[index].pid === id) {
            passwords[index].name = name
            passwords[index].identifier = identifier
            passwords[index].alphabet = alphabet
            passwords[index].length = length
            passwords[index].folder = folder
            passwords[index].version = version
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

export const updatePasswordSort = (passwords: IPassword[], folder: string) => {

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