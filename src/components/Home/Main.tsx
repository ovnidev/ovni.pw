import { useState } from 'react'

import Sidebar from '@component/Sidebar/Main'
import Content from '@component/Content/Main'
import Footer from '@component/Home/Footer'

export default function Main() {

    const [ folder, setFolder ] = useState('')
    const [ folderUpdated, setFolderUpdated ] = useState(null)

    return (
        <main className="h-screen">

            <div className="flex flex-grow h-screen">

                <div>
                    <Sidebar onFolderClick={ setFolder } folderUpdated={ folderUpdated } />
                </div>

                <div className="w-full">
                    <Content folder={ folder } onFolderUpdate={ setFolderUpdated } />
                    <Footer />
                </div>

            </div>
            
        </main>
    )
}