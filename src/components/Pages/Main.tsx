import { useState } from "react"

import Home from "@component/Pages/Home"

import Folder from "@component/Pages/Folder/Main"
import Alphabet from "@component/Pages/Alphabet/Main"
import Settings from "@component/Pages/Settings/Main"

export default function Main(props: {
    page: string,
    folder: string,
    onMasterPassword: Function,
    onFolderUpdate: Function,
    onFolderDelete: Function,
    onImportData: Function,
    onResetData: Function
}) {

    const { page, folder, onMasterPassword, onFolderUpdate, onFolderDelete, onImportData, onResetData } = props

    const [ masterPassword, setMasterPassword ] = useState('')

    const updateMasterPassword = (master: string) => {
        setMasterPassword(master)
        onMasterPassword(master)
    }

    return (
        <div className="page no-scrollbar">

            { page === 'home' && (
                <Home
                    masterPassword={ masterPassword }
                    onMasterPassword={ updateMasterPassword }
                />
            )}

            { page === 'folder' && (
                <Folder
                    masterPassword={ masterPassword }
                    folderId={ folder }
                    onFolderUpdate={ onFolderUpdate }
                    onFolderDelete={ onFolderDelete }
                />
            )}

            { page === 'alphabet' && (
                <Alphabet />
            )}

            { page === 'settings' && (
                <Settings
                    masterPassword={ masterPassword }
                    onImportData={ onImportData }
                    onResetData={ onResetData }
                />
            )}

        </div>
    )
}