import { deleteAlphabet } from "@logic/alphabet"
import { closeModal } from "@logic/modal"

export default function Main(props: { alphabetId: string, name: string, onDelete: Function }) {

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

                <div className="body">
                    You're sure? Your passwords that use "<strong>{ name }</strong>" alphabet <strong>will be broken</strong> and cannot be displayed.
                </div>

                <div className="footer">
                    <button
                        className="delete"
                        onClick={ handleSubmit }
                    >
                        Yes, delete alphabet!
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