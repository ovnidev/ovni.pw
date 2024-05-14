import { useState } from "react"

import { getAlphabetList, importAlphabets } from "@logic/alphabet"
import { getFolderList, importFolders } from "@logic/folder"
import { getAllPasswordList, importPasswords } from "@logic/password"
import { getSettingsList, importSettings } from "@/logic/settings"

import { encodeData, decodeData, downloadFile } from "@logic/utils"

export default function Main(props: { masterPassword: string, onImportData: Function }) {

    const { masterPassword, onImportData } = props

    const exportAllData = async () => {

        const settings = getSettingsList()
        const alphabet = getAlphabetList()
        const folders = getFolderList()
        const passwords = getAllPasswordList()

        const data = {
            settings: settings,
            alphabet: alphabet,
            folders: folders,
            passwords: passwords
        }

        const encodedData = await encodeData(masterPassword, JSON.stringify(data))

        const timestamp = Date.now()

        downloadFile(encodedData, 'data_' + timestamp + '.ovni', 'application/octet-stream')
        
    }

    const importAllData = (event: any) => {

        const file = event.target.files[0]
        const reader = new FileReader()

        reader.readAsText(file)
        reader.onload = async () => {
            
            const data = reader.result as string
            const decodedData = await decodeData(masterPassword, data)

            const { settings, alphabet, folders, passwords } = JSON.parse(decodedData)

            importAlphabets(alphabet)
            importFolders(folders)
            importPasswords(passwords)
            importSettings(settings)

            onImportData()

        }
        
    }

    return (
        <div className="settings-body">

            <h2>
                Export / Import
            </h2>
            
            <div className="content !p-0">
                
                <div className="option">

                    <div className="name">
                        Export data
                    </div>

                    <div className="description">
                        All data and configuration will be exported
                    </div>

                    <div className="setting !top-[30px]">
                        <button
                            onClick={ exportAllData }
                            className="btn"
                        >
                            Export data
                        </button>
                    </div>

                </div>

                <div className="option">

                    <div className="name">
                        Import data
                    </div>

                    <div className="description">
                        Select a file to restore all data
                    </div>

                    <div className="setting !top-[22px]">
                        <input
                            type="file"
                            accept=".ovni"
                            className="btn import"
                            onChange={ importAllData }
                        />
                    </div>

                </div>

            </div>

        </div>
    )
}