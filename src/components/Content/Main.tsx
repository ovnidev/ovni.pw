import { useState } from "react"

import Home from "@component/Content/Home"

import Folder from "@component/Content/Folder"
import Alphabet from "@component/Content/Alphabet"

export default function Main(props: { page: string, folder: string, onMasterPassword: Function, onFolderUpdate: Function, onFolderDelete: Function }) {

    const { page, folder, onMasterPassword, onFolderUpdate, onFolderDelete } = props

    const [ masterPassword, setMasterPassword ] = useState('')

    const updateMasterPassword = (master: string) => {
        setMasterPassword(master)
        onMasterPassword(master)
    }

    return (
        <div className="page">

            { page === 'home' && (<Home masterPassword={ masterPassword } onMasterPassword={ updateMasterPassword } />)}

            { page === 'folder' && (<Folder masterPassword={ masterPassword } folderId={ folder } onFolderUpdate={ onFolderUpdate } onFolderDelete={ onFolderDelete } />)}

            { page === 'alphabet' && (<Alphabet />)}

        </div>
    )
}