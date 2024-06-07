import { useTranslation } from "react-i18next"

import { deleteAlphabet } from "@logic/alphabet"
import { closeModal } from "@logic/modal"

export default function Main(props: { alphabetId: string, name: string, onDelete: Function }) {

    const { t } = useTranslation("alphabet")

    const { alphabetId, name, onDelete } = props

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        deleteAlphabet(alphabetId)
        closeModal('delete-alphabet-' + alphabetId)
        onDelete(alphabetId)
    }

    const handleCancel = (event: any) => {
        event.preventDefault()
        closeModal('delete-alphabet-' + alphabetId)
    }

    return (
        <>

            <form>

                <div className="body" dangerouslySetInnerHTML={{ __html: t("modal.delete.body", { name: name }) }} />

                <div className="footer">
                    <button
                        className="delete"
                        onClick={ handleSubmit }
                    >
                        {t("modal.delete.submit")}
                    </button>

                    <button
                        onClick={ handleCancel }
                        className="default"
                    >
                        {t("modal.delete.cancel")}
                    </button>
                </div>

            </form>

        </>
    )
}