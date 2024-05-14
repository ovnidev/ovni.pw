import { removeStorage } from "@logic/storage"
import { openModal } from "@logic/modal"

import { createDefaultFolder } from "@logic/folder"
import { createDefaultAlphabet } from "@logic/alphabet"
import { createDefaultSettings } from "@logic/settings"

import Modal from "@component/UI/Modal/Modal"
import ResetData from "@component/Form/Settings/Reset"

export default function Main(props: { onResetData: Function }) {

    const { onResetData } = props

    const resetData = async () => {

        removeStorage('passwords')
        removeStorage('folders')
        removeStorage('alphabets')
        removeStorage('settings')

        createDefaultSettings()
        createDefaultAlphabet()
        createDefaultFolder()

        onResetData()

    }

    return (
        <div className="settings-body">

            <h2>
                Danger Zone
            </h2>
            
            <div className="content !p-0">
                
                <div className="option">

                    <div className="name">
                        Reset data
                    </div>

                    <div className="description">
                        All data will be reset
                    </div>

                    <div className="setting !top-[30px]">
                        <button
                            onClick={ () => openModal("reset-data") }
                            className="btn danger"
                        >
                            Reset data
                        </button>
                    </div>

                    <Modal
                        name="reset-data"
                        title="Reset data"
                    >
                        <ResetData
                            onResetData={ resetData }
                        />
                    </Modal>

                </div>

            </div>

        </div>
    )
}