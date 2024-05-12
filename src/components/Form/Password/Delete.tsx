import { deletePassword } from "@logic/password"
import { closeModal } from "@logic/modal"

export default function Main(props: { passwordId: string, name: string, onDelete: Function }) {

    const { passwordId, name, onDelete } = props

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

            <div className="body">
                Are you sure you want to remove "<strong>{ name }</strong>"?
            </div>

            <div className="footer">

                <button
                    className="delete"
                    onClick={ handleSubmit }
                >
                    Delete!
                </button>

                <button
                    onClick={ handleCancel }
                    className="default"
                >
                    Cancel
                </button>

            </div>

        </>
    )
}