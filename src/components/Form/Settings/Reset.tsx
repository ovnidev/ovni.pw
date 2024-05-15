import { closeModal } from "@logic/modal"

export default function Main(props: { onResetData: Function }) {

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

            <div className="body">
                Are you sure you want to reset all data?
            </div>

            <div className="footer">

                <button
                    className="delete"
                    onClick={ handleSubmit }
                >
                    Reset!
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