import { useState, useEffect } from 'react'
import Helmet from "react-helmet"
import { useTranslation } from "react-i18next"

import { getFolderList } from '@logic/folder'

import Sidebar from '@component/Sidebar/Main'
import Content from '@component/Pages/Main'
import Footer from '@component/Pages/Home/Footer'

export default function Main() {

    const [ page, setPage ] = useState('home')
    const [ folder, setFolder ] = useState('')

    const { t, i18n } = useTranslation("globals")

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

    useEffect(() => { updateFolderList() }, [ folderUpdated, folderDeleted ])

    return (
        <>
            <Helmet>
				<html lang={ i18n.language } />
                <title>{t('meta.title')}</title>
                <meta name="description" content={t('meta.description')} />
            </Helmet>
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
        </>
    )
}