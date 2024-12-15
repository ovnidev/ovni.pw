import { useTranslation } from "react-i18next"
import { deleteFolder } from "@logic/folder"
import { closeModal } from "@logic/modal"

export default function Main(props: { folderId: string, onDelete: Function }) {

    const { folderId, onDelete } = props

    const { t } = useTranslation("folder")

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        deleteFolder(folderId)
        closeModal('delete-folder')
        onDelete(folderId)
    }

    const handleCancel = (event: any) => {
        event.preventDefault()
        closeModal('delete-folder')
    }

    return (
        <>

            <form>

                <div className="body">
                    {t("form.delete.body")}
                </div>

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

            </form>

        </>
    )
}