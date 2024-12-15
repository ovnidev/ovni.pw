import { useTranslation } from "react-i18next"
import { deletePassword } from "@logic/password"
import { closeModal } from "@logic/modal"

export default function Main(props: { passwordId: string, name: string, onDelete: Function }) {

    const { passwordId, name, onDelete } = props

    const { t } = useTranslation("password")

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        deletePassword(passwordId)
        closeModal('delete-password-' + passwordId)
        onDelete(passwordId)
    }

    const handleCancel = (event: any) => {
        event.preventDefault()
        closeModal('delete-password-' + passwordId)
    }

    return (
        <>

            <div className="body" dangerouslySetInnerHTML={{ __html: t("form.delete.body", { name: name }) }} />

            <div className="footer">

                <button
                    className="delete"
                    onClick={ handleSubmit }
                >
                    {t("form.delete.submit")}
                </button>

                <button
                    onClick={ handleCancel }
                    className="default"
                >
                    {t("form.delete.cancel")}
                </button>

            </div>

        </>
    )
}