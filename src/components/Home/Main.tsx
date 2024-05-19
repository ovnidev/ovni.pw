import { useState, useEffect } from 'react'

import { createDefaultSettings } from '@logic/settings'
import { createDefaultFolder, getFolderList } from '@logic/folder'
import { createDefaultAlphabet } from '@logic/alphabet'

import Sidebar from '@component/Sidebar/Main'
import Content from '@component/Content/Main'
import Footer from '@component/Home/Footer'

export default function Main() {

    const [ page, setPage ] = useState('home')
    const [ folder, setFolder ] = useState('')


    const [ folderList, setFolderList ] = useState([])
    const [ folderUpdated, setFolderUpdated ] = useState(null)
    const [ folderDeleted, setFolderDeleted ] = useState('')

    const [ masterPassword, setMasterPassword ] = useState('')

    const deletedFolder = (folder: string) => {
        setFolderDeleted(folder)
        setFolder('')
    }

    const updateFolderList = () => {
        setFolderList(getFolderList())
    }

    useEffect(() => {
        createDefaultSettings()
        createDefaultFolder()
        createDefaultAlphabet()
    }, [])

    useEffect(() => { updateFolderList() }, [ folderUpdated, folderDeleted ])

    return (
        <main className="h-screen">

            <div className="flex flex-grow h-screen">

                <div>

                    <Sidebar
                        folders={ folderList }
                        onFolderClick={ (folder: string) => {
                            setPage('folder');
                            setFolder(folder);
                        }}
                        onPageClick={ setPage }
                        onFolderCreate={ updateFolderList }
                        onFolderDelete={ folderDeleted }
                        onFolderUpdate={ folderUpdated }
                        masterPassword={ masterPassword }
                    />
                    
                </div>

                <div className="w-full">

                    <Content
                        page={ page }
                        folder={ folder }
                        onMasterPassword={ setMasterPassword }
                        onFolderUpdate={ setFolderUpdated }
                        onFolderDelete={ deletedFolder }
                        onImportData={ updateFolderList }
                        onResetData={ updateFolderList }
                    />

                    <Footer />

                </div>

            </div>
            
        </main>
    )
}