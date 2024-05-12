import { useState, useEffect } from 'react'

import { createDefaultAlphabet } from '@logic/alphabet'

import Sidebar from '@component/Sidebar/Main'
import Content from '@component/Content/Main'
import Footer from '@component/Home/Footer'

export default function Main() {

    const [ page, setPage ] = useState('home')
    const [ folder, setFolder ] = useState('')

    const [ folderUpdated, setFolderUpdated ] = useState(null)
    const [ folderDeleted, setFolderDeleted ] = useState('')
    const [ masterPassword, setMasterPassword ] = useState('')

    const deletedFolder = (folder: string) => {
        setFolderDeleted(folder)
        setFolder('')
    }

    useEffect(() => { createDefaultAlphabet() }, [])

    return (
        <main className="h-screen">

            <div className="flex flex-grow h-screen">

                <div>

                    <Sidebar
                        onFolderClick={ (folder: string) => {
                            setPage('folder');
                            setFolder(folder);
                        }}
                        onPageClick={ setPage }
                        folderDeleted={ folderDeleted }
                        folderUpdated={ folderUpdated }
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
                    />

                    <Footer />

                </div>

            </div>
            
        </main>
    )
}