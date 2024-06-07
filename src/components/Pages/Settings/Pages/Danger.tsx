import { useTranslation } from "react-i18next"

import { removeStorage } from "@logic/storage"
import { openModal } from "@logic/modal"
import { showAlert } from "@logic/alert"

import { createDefaultFolder } from "@logic/folder"
import { createDefaultAlphabet } from "@logic/alphabet"
import { createDefaultSettings } from "@logic/settings"

import Modal from "@component/UI/Modal/Modal"
import ResetData from "@component/Form/Settings/Reset"

export default function Main(props: { onResetData: Function }) {

    const { t } = useTranslation("settings")

    const { onResetData } = props

    const resetData = async () => {

        removeStorage('passwords')
        removeStorage('folders')
        removeStorage('alphabets')
        removeStorage('settings')

        createDefaultAlphabet()
        createDefaultFolder()
        createDefaultSettings()

        onResetData()

        showAlert(t("danger.reset.alert.success"), 'success', 'restore', 5000)

    }

    return (
        <div className="settings-body">

            <h2>
                {t("danger.title")}
            </h2>
            
            <div className="content !p-0">
                
                <div className="option">

                    <div className="name">
                        {t("danger.reset.name")}
                    </div>

                    <div className="description">
                        {t("danger.reset.description")}
                    </div>

                    <div className="setting !top-[30px]">
                        <button
                            onClick={ () => openModal("reset-data") }
                            className="btn danger"
                        >
                            {t("danger.reset.submit")}
                        </button>
                    </div>

                    <Modal
                        name="reset-data"
                        title={t("danger.reset.modal.title")}
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