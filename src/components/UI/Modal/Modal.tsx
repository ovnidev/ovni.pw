import { closeModal } from "@logic/modal"

export default function Main(props: { name: string, title: string, children?: any }) {

    const { name, title, children } = props

    return (
        <dialog data-modal={ name }>
            <div className="head">
                <h2>
                    { title }
                </h2>
                <button className="close" onClick={ () => closeModal(name) }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="body">
                { children }
            </div>
        </dialog>
    )
}