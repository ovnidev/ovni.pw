import { openModal } from "@logic/modal"
import Modal from "@component/UI/Modal/Modal"
import Folder from "@component/Content/Folder"

export default function Main(props: { folder: string, onFolderUpdate: Function }) {

    const { folder, onFolderUpdate } = props

    return (
        <div className="w-full">

            <div className="p-5 border-b border-white/5 w-full bg-black/10">

                <h2 className="text-[20px] md:text-[30px] font-inter-black">
                    Password Manager
                </h2>

                <span className="text-[16px] text-white/70">

                    A simple and super secure way to generate and no-store your passwords.

                    <button
                        name="How it works"
                        onClick={ () => openModal("info") }
                        className="text-[11px] text-white hover:text-primary duration-300 rounded-full ml-2 align-middle mt-[-2px]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-help">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 17l0 .01" />
                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                        </svg>
                    </button>

                </span>

                <Modal
                    name="info"
                    title="How it works?"
                >
                    <p>
                        In this Password Manager, you can generate and "store" passwords in the most secure way possible, entirely locally through your browser. This website doesn't store anything on any server; instead, everything is stored locally in your browser.
                    </p>
                    <p>
                        The system is very simple: only needs a global password and a service name (or anything) to generate a password. A unique hash is generated using your global password and the service name you've chosen, and then a unique password is created using that hash.
                    </p>
                    <p>
                        By storing only the service/name you've chosen to generate a password, no one will ever know the global password or the generated password. When you open ovni.pw and enter the global password, the system will recreate the hash and generate the same passwords for you to copy or view at that precise moment.
                    </p> 
                </Modal>

            </div>

            <div className="p-5">

                { folder === '' && (
                    <>
                        Main
                    </>
                )}

                { folder !== '' && (<Folder folderId={ folder } onFolderUpdate={ onFolderUpdate } />)}

            </div>

        </div>
    )
}