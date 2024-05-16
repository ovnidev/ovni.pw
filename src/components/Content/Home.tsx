import { useEffect, useState } from "react"
import { openModal } from "@logic/modal"
import Modal from "@component/UI/Modal/Modal"

import { getPasswordCount } from "@logic/password"
import { getFolderCount } from "@logic/folder"
import { getAlphabetCount } from "@logic/alphabet"
import { showAlert } from "@logic/alert"

export default function Main(props: { masterPassword: string, onMasterPassword: Function }) {

    const { masterPassword, onMasterPassword } = props

    const [ passwordCount, setPasswordCount ] = useState(0)
    const [ folderCount, setFolderCount ] = useState(0)
    const [ alphabetCount, setAlphabetCount ] = useState(0)

    const handleSubmit = (event: any) => {

        event.preventDefault()

        if(event.target.password.value === '') return showAlert('Please enter your master password', 'error', 'exclamation-circle', 5000)

        onMasterPassword(event.target.password.value)

    }

    useEffect(() => {
        setPasswordCount(getPasswordCount())
        setFolderCount(getFolderCount())
        setAlphabetCount(getAlphabetCount())    
    }, [])

    return (
        <>
            <div className="body">

                <div className="mt-[120px]">

                    <h2
                        className="text-[18px] md:text-[50px] font-inter-black text-center"
                    >
                        Password Manager
                    </h2>

                    <div className="text-center text-[20px] opacity-80 mt-[-5px]">
                        The most secure password manager
                    </div>

                    <div className="mt-10 flex justify-center gap-5">

                        { masterPassword === '' && (
                            <form
                                onSubmit={ handleSubmit }
                                className=""
                            >
                                <input
                                    placeholder="Master Password"
                                    type="password"
                                    name="password"
                                    className="w-full block text-[14px] md:text-[20px] text-center mx-auto px-3 py-4 border dark:border-white/5 border-darker/10 rounded-[4px] bg-white dark:bg-black/10"
                                />
                                <button
                                    type="submit"
                                    className="w-full mt-5 block mx-auto rounded-[4px] bg-primary/5 dark:bg-primary/5 hover:bg-primary hover:dark:bg-primary duration-300 text-[16px] text-primary dark:text-white font-inter-bold p-5 md:px-28 md:py-5 border border-primary hover:text-white mb-2 md:mb-0"
                                >
                                    Access
                                </button>
                            </form>

                        )}

                        { masterPassword !== '' && (
                            <>
                                <div className="bg-white border-darker/10 dark:bg-white/[1%] border text-center dark:border-white/5 rounded-[4px] p-5 pb-8 md:mb-0 mb-5">
                                    <div className="font-inter-black text-[50px] px-20">
                                        { passwordCount }
                                    </div>
                                    <div className="text-[18px]">
                                        { passwordCount === 1 ? 'Password' : 'Passwords' }
                                    </div>
                                </div>
                                <div className="bg-white border-darker/10 dark:bg-white/[1%] border text-center dark:border-white/5 rounded-[4px] p-5 pb-8 md:mb-0 mb-5">
                                    <div className="font-inter-black text-[50px] px-20">
                                        { folderCount }
                                    </div>
                                    <div className="text-[18px]">
                                        { folderCount === 1 ? 'Folder' : 'Folders' }
                                    </div>
                                </div>
                                <div className="bg-white border-darker/10 dark:bg-white/[1%] border text-center dark:border-white/5 rounded-[4px] p-5 pb-8">
                                    <div className="font-inter-black text-[50px] px-20">
                                        { alphabetCount }
                                    </div>
                                    <div className="text-[18px]">
                                        { alphabetCount === 1 ? 'Alphabet' : 'Alphabets' }
                                    </div>
                                </div>
                            </>
                        )}

                    </div>

                    <div className="flex justify-center mt-20 gap-5">

                        <button
                            ria-label="How this works?"
                            onClick={ () => openModal("info") }
                            className="border border-darker/10 dark:border-white/10 bg-darker/[0.01] dark:bg-white/[0.02] hover:dark:bg-white/[0.05] hover:bg-white duration-300 px-4 py-3 rounded-[4px]"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 align-middle mt-[-2px] icon icon-tabler icons-tabler-outline icon-tabler-help fill-white dark:fill-darker">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 17l0 .01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>

                            How this works?

                        </button>

                        <button
                            ria-label="FAQ's"
                            onClick={ () => openModal("faq") }
                            className="border border-darker/10 dark:border-white/10 bg-darker/[0.01] dark:bg-white/[0.02] hover:dark:bg-white/[0.05] hover:bg-white duration-300 px-4 py-3 rounded-[4px]"
                        >

                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-2 align-middle mt-[-2px] icon icon-tabler icons-tabler-outline icon-tabler-help fill-white dark:fill-darker">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                                <path d="M12 17l0 .01" />
                                <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                            </svg>

                            FAQ's

                        </button>

                        <Modal
                            name="info"
                            title="How it works?"
                        >
                            <div className="body">
                                <p>
                                    This password manager works thanks to a password generator based on your master password, an identifier and an alphabet.
                                </p>
                                <p>
                                    First you have to write a master password that is not anywhere, just memorized in your head.
                                </p>
                                <p>
                                    Once that is done, you will only have to generate the passwords that you want to use on any web or service on the Internet.
                                </p>
                                <p>
                                    When you want to see the generated passwords again, return to this web, enter your master password and you will be able to see all the passwords you have generated.
                                </p>
                                <p>
                                    That's all! 😊
                                </p>
                            </div>
                        </Modal>

                        <Modal
                            name="faq"
                            title="Frequently Asked Questions"
                        >
                            <div className="body faq">
                                <h2>
                                    Why is this password manager so secure?
                                </h2>
                                <p>
                                    This website does not store your master password or generated passwords. No one will be able to steal that data from you if they don't know your master password.
                                </p>
                                <h2>
                                    Can I export the data to another browser or smartphone?
                                </h2>
                                <p>
                                    Yes, you can export and import the data that is saved in your browser.
                                </p>
                                <h2>
                                    Is any data stored?
                                </h2>
                                <p>
                                    Yes, data such as the folders created or the information necessary to generate passwords (identifier, length and alphabet). Alphabets are also stored, which you can modify, delete or create new ones. These are data that, without knowing the master password, are totally irrelevant.
                                </p>
                                <h2>
                                    What happens if I don't remember my master password?
                                </h2>
                                <p>
                                    So that the system can generate the passwords that you have used to register on websites or services, it is necessary that you always enter the same master password. If you do not remember your master password or enter another password, the passwords that will be displayed will be completely different from the ones you used.
                                </p>
                                <h2>
                                    Where is the data stored?
                                </h2>
                                <p>
                                    All data is stored locally in your browser. This website does not send any information you write here to any server or database. We don't know who you are.
                                </p>
                                <h2>
                                    Why is this free?
                                </h2>
                                <p>
                                    Why not? 👽
                                </p>
                            </div>
                        </Modal>

                    </div>

                </div>

            </div>

        </>
    )
}