import { deleteFolder } from "@logic/folder"
import { closeModal } from "@logic/modal"

export default function Main(props: { folderId: string, onDelete: Function }) {

    const { folderId, onDelete } = props

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
                    You're sure? Deleting the folder will also delete all passwords stored in it.
                </div>

                <div className="footer">
                    <button
                        className="delete"
                        onClick={ handleSubmit }
                    >
                        Yes, delete folder!
                    </button>

                    <button
                        onClick={ handleCancel }
                        className="default"
                    >
                        Cancel
                    </button>
                </div>

            </form>

        </>
    )
}