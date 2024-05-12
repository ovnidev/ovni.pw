import { useEffect, useState } from "react"
import { openModal } from "@logic/modal"
import Modal from "@component/UI/Modal/Modal"

import { getPasswordCount } from "@logic/password"
import { getFolderCount } from "@logic/folder"
import { getAlphabetCount } from "@logic/alphabet"

export default function Main(props: { masterPassword: string, onMasterPassword: Function }) {

    const { masterPassword, onMasterPassword } = props

    const [ passwordCount, setPasswordCount ] = useState(0)
    const [ folderCount, setFolderCount ] = useState(0)
    const [ alphabetCount, setAlphabetCount ] = useState(0)

    const handleSubmit = (event: any) => {
        event.preventDefault()
        onMasterPassword(event.target.password.value)
    }

    useEffect(() => {
        setPasswordCount(getPasswordCount())
        setFolderCount(getFolderCount())
        setAlphabetCount(getAlphabetCount())    
    }, [])

    return (
        <>

           <div className="head">

                <h2 className="title">
                    Password Manager
                </h2>

                <span className="subtitle">

                    A simple and super secure way to generate and no-store your passwords.

                    <button
                        name="How it works"
                        onClick={ () => openModal("info") }
                        className="text-[11px] text-darker dark:text-white hover:text-primary duration-300 rounded-full ml-2 align-middle mt-[-2px]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-help fill-white dark:fill-darker">
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
                    <div className="body">
                        <p>
                            In this Password Manager, you can generate and "store" passwords in the most secure way possible, entirely locally through your browser. This website doesn't store anything on any server; instead, everything is stored locally in your browser.
                        </p>
                        <p>
                            The system is very simple: only needs a global password and a service name (or anything) to generate a password. A unique hash is generated using your global password and the service name you've chosen, and then a unique password is created using that hash.
                        </p>
                        <p>
                            By storing only the service/name you've chosen to generate a password, no one will ever know the global password or the generated password. When you open ovni.pw and enter the global password, the system will recreate the hash and generate the same passwords for you to copy or view at that precise moment.
                        </p>
                    </div>
                </Modal>

            </div>

            <div className="body">

                { masterPassword === '' && (
                    <form
                        onSubmit={ handleSubmit }
                        className="dark:border-white/5 rounded-[4px] border-darker/10 dark:bg-white/[0.01] bg-white border md:px-20 md:py-10 md:w-min md:min-w-[600px] mx-auto md:mt-[200px] p-5"
                    >
                        <h2
                            className="text-[18px] md:text-[24px] font-inter-black text-center mb-5"
                        >
                            Master Password
                        </h2>
                        <div className="text-[14px] text-center mb-5 dark:text-white/70 text-darker/70">
                            Enter your master password to generate your passwords.
                        </div>
                        <input
                            placeholder="Master Password"
                            type="password"
                            name="password"
                            className="w-full block text-[14px] md:text-[20px] text-center mx-auto px-3 py-4 border dark:border-white/5 border-darker/10 rounded-[4px] bg-white dark:bg-black/10"
                        />
                        <button
                            type="submit"
                            className="w-full mt-5 block mx-auto rounded-[4px] bg-primary/10 dark:bg-primary/10 hover:drop-shadow-[0px_0px_15px_#7c1ff18c] hover:bg-primary hover:dark:bg-primary duration-300 text-[14px] font-inter-bold p-5 md:px-28 md:py-5 border border-primary hover:text-white mb-2 md:mb-0"
                        >
                            Confirm
                        </button>
                    </form>

                )}

                <div className="md:grid grid-cols-3 gap-5">
                    { masterPassword !== '' && (
                        <>
                            <div className="bg-white/[1%] border text-center border-white/5 rounded-[4px] p-5 pb-8 md:mb-0 mb-5">
                                <div className="font-inter-black text-[50px]">
                                    { passwordCount }
                                </div>
                                <div className="text-[18px]">
                                    { passwordCount === 1 ? 'Password' : 'Passwords' }
                                </div>
                            </div>
                            <div className="bg-white/[1%] border text-center border-white/5 rounded-[4px] p-5 pb-8 md:mb-0 mb-5">
                                <div className="font-inter-black text-[50px]">
                                    { folderCount }
                                </div>
                                <div className="text-[18px]">
                                    { folderCount === 1 ? 'Folder' : 'Folders' }
                                </div>
                            </div>
                            <div className="bg-white/[1%] border text-center border-white/5 rounded-[4px] p-5 pb-8">
                                <div className="font-inter-black text-[50px]">
                                    { alphabetCount }
                                </div>
                                <div className="text-[18px]">
                                    { alphabetCount === 1 ? 'Alphabet' : 'Alphabets' }
                                </div>
                            </div>
                        </>
                    )}
                </div>


            </div>

        </>
    )
}