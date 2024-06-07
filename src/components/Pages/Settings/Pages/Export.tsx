import { useState } from "react"
import { useTranslation } from "react-i18next"

import { getAlphabetList, importAlphabets } from "@logic/alphabet"
import { getFolderList, importFolders } from "@logic/folder"
import { getAllPasswordList, importPasswords } from "@logic/password"
import { getUserSettings, importSettings } from "@logic/settings"

import { showAlert } from "@logic/alert"
import { encodeData, decodeData, downloadFile } from "@logic/utils"

export default function Main(props: { masterPassword: string, onImportData: Function }) {
    
    const { t, i18n } = useTranslation("settings")

    const { masterPassword, onImportData } = props

    const [ fileData, setFileData ] = useState('')

    const exportAllData = async () => {

        const settings = getUserSettings()
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

        showAlert(t("export.export.alert.success"), 'success', 'database-export', 5000)
        
    }

    const importAllData = (event: any) => {

        const file = event.target.files[0]
        const reader = new FileReader()

        reader.readAsText(file)
        reader.onload = async () => {

            try {

                const data = reader.result as string
                const decodedData = await decodeData(masterPassword, data)
    
                const { settings, alphabet, folders, passwords } = JSON.parse(decodedData)
    
                importAlphabets(alphabet)
                importFolders(folders)
                importPasswords(passwords)
                importSettings(settings)
    
                onImportData()
    
                setFileData('')
    
                showAlert(t("export.import.alert.success"), 'success', 'database-import', 6000)

            } catch(e) {

                setFileData('')
                showAlert("export.import.alert.error", 'error', 'exclamation-circle', 8000)

            }

        }
        
    }

    return (
        <div className="settings-body">

            <h2>
                {t("export.title")}
            </h2>
            
            <div className="content !p-0">
                
                <div className="option">

                    <div className="name">
                        {t("export.export.name")}
                    </div>

                    <div className="description">
                        {t("export.export.description")}
                    </div>

                    <div className="setting !top-[30px]">
                        <button
                            onClick={ exportAllData }
                            className="btn"
                        >
                            {t("export.export.submit")}
                        </button>
                    </div>

                </div>

                <div className="option">

                    <div className="name">
                        {t("export.import.name")}
                    </div>

                    <div className="description">
                        {t("export.import.description")}
                    </div>

                    <div className="setting !top-[22px]">
                        <input
                            type="file"
                            accept=".ovni"
                            className={ `btn import file_${ i18n.language }` }
                            value={ fileData }
                            onChange={ importAllData }
                        />
                    </div>

                </div>

            </div>

        </div>
    )
}