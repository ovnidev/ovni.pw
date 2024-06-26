import { getStorage, setStorage } from "@logic/storage"
import { generateId } from "@logic/utils"

export const importFolders = (data: any) => {
    setStorage('folders', data)
}

export const createDefaultFolder = () => {

    const folders = getStorage('folders')

    if(folders && (folders.length > 0 || folders.length === 0)) return

    const defaultFolder = [
        {
            fid: generateId(),
            name: 'Default',
            icon: 'folder-filled'
        }
    ]

    setStorage('folders', defaultFolder)

}

export const getFolderCount = () => {
    const folders = getStorage('folders')
    if(!folders || folders.length === 0) return 0
    return folders.length
}

export const getFolderList = () => {
    const folders = getStorage('folders')
    if(!folders || folders.length === 0) return []
    return folders
}

export const getFolder = (id: string) => {

    const folders = getFolderList()

    for (let index = 0; index < folders.length; index++) {
        if(folders[index].fid === id) return folders[index]
    }

}

export const createFolder = (name: string, icon: string) => {

    const folders = getFolderList()

    const newFolder = {
        fid: generateId(),
        name: name,
        icon: icon
    }

    folders.push(newFolder)

    setStorage('folders', folders)
    
}

export const updateFolder = (id: string, name: string, icon: string) => {

    const folders = getFolderList()

    for (let index = 0; index < folders.length; index++) {
        if(folders[index].fid === id) {
            folders[index].name = name
            folders[index].icon = icon
            break
        }
    }

    setStorage('folders', folders)
    
}

export const deleteFolder = (id: string) => {

    const folders = getFolderList()

    for (let i = 0; i < folders.length; i++) {
        if(folders[i].fid === id) {
            folders.splice(i, 1)
            break
        }
    }

    setStorage('folders', folders)

    let passwords = getStorage('passwords')
    if(!passwords || passwords.length === 0) return

    for (let i = 0; i < passwords.length; i++) {
        passwords = passwords.filter((password: any) => password.folder !== id)
    }

    setStorage('passwords', passwords)
    
}

export const updateFolderSort = (folders: any) => {
    setStorage('folders', folders)
}