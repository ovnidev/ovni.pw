import { useEffect, useState } from "react"

import { openModal } from "@logic/modal"

import Logo from "@component/UI/Logo/Logo"
import Modal from "@component/UI/Modal/Modal"
import ThemeToggle from "@component/UI/Theme/Toggle"
import CreateFolder from "@component/Form/Folder/Create"
import FolderList from "@component/Sidebar/FolderList"
import GenerateOTP from "@component/Form/Password/OTP"

export default function Main(props: {
    folders: any,
    masterPassword: string,
    onPageClick: Function,
    onFolderClick: Function,
    onFolderCreate: Function,
    onFolderDelete: string,
    onFolderUpdate: string
}) {

    const { folders, masterPassword, onPageClick, onFolderCreate, onFolderClick, onFolderUpdate, onFolderDelete } = props

    const [ pageActive, setPageActive ] = useState('home')

    const handleActivePage = (page: string) => {
        onPageClick(page)
        setPageActive(page)
    }

    useEffect(() => {
        handleActivePage('home')
    }, [ onFolderDelete ])

    return (
        <div className="sidebar no-scrollbar">

            <div className="pt-2">

                <div className="menu">

                    <div className="logo">
                        <div className="px-2">
                            <button
                                aria-label="Home"
                                className={ `${ pageActive === 'home' ? 'active ' : '' }button !py-3` }
                                onClick={ () => {
                                        onPageClick('home');
                                        handleActivePage('home');
                                    }
                                }
                            >
                                <Logo />
                            </button>
                        </div>

                        <div className="text-[11px] text-center mt-1 mb-0 pb-0">
                            <span className="font-inter-black">
                                ovni
                            </span>
                            .pw
                        </div>
                    </div>

                    <ul className="space-y-1 border-t border-darker/5 dark:border-white/5 mt-3 pt-4 px-2">
                        { masterPassword !== '' && (
                            <FolderList
                                folders={ folders }
                                pageActive={ pageActive }
                                onFolderClick={ (ev: any) => {
                                        onFolderClick(ev);
                                        handleActivePage('folder');
                                    }
                                }
                            />
                        )}
                    </ul>

                </div>

            </div>

            <div>

                <div className="menu bottom py-4 px-2">

                    { masterPassword && (

                        <>

                            <button
                                aria-label="Create new folder"
                                className="button mb-2"
                                onClick={ () => openModal("create-folder") }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
                                    <path d="M16 19h6" />
                                    <path d="M19 16v6" />
                                </svg>
                            </button>

                            <button
                                aria-label="Generate One Time Password"
                                className="button mb-2"
                                onClick={ () => openModal("generate-otp") }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-key">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" />
                                    <path d="M15 9h.01" />
                                </svg>
                            </button>

                            <button
                                aria-label="Alphabet"
                                className={ `${ pageActive === 'alphabet' ? 'active ' : '' }button` }
                                onClick={ () => {
                                    handleActivePage('alphabet');
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-sort-a-z">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M16 8h4l-4 8h4" />
                                    <path d="M4 16v-6a2 2 0 1 1 4 0v6" />
                                    <path d="M4 13h4" />
                                    <path d="M11 12h2" />
                                </svg>
                            </button>

                            <button
                                aria-label="Settings"
                                className={ `${ pageActive === 'settings' ? 'active ' : '' }button mt-2` }
                                onClick={ () => {
                                    handleActivePage('settings');
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings-2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                </svg>
                            </button>

                        </>
                    )}

                    <ThemeToggle />

                </div>

            </div>

            <Modal
                name="create-folder"
                title="Create new folder"
            >
                <CreateFolder onCreate={ onFolderCreate } />
            </Modal>

            <Modal
                name="generate-otp"
                title="Generate One Time Password"
            >
                <GenerateOTP masterPassword={ masterPassword } />
            </Modal>

        </div>
    )
}