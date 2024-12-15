import { useTranslation } from "react-i18next"

import { closeModal } from "@logic/modal"

export default function Main(props: { onResetData: Function }) {

    const { t } = useTranslation("settings")

    const { onResetData } = props

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        closeModal('reset-data')
        onResetData()
    }

    const handleCancel = (event: any) => {
        event.preventDefault()
        closeModal('reset-data')
    }

    return (
        <>

            <div className="body" dangerouslySetInnerHTML={{ __html: t("danger.reset.modal.body") }} />

            <div className="footer">

                <button
                    className="delete"
                    onClick={ handleSubmit }
                >
                    {t("danger.reset.modal.submit")}
                </button>

                <button
                    onClick={ handleCancel }
                    className="default"
                >
                    {t("danger.reset.modal.cancel")}
                </button>

            </div>

        </>
    )
}