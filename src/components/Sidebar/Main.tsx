import { useEffect, useState } from "react"

import { openModal } from "@logic/modal"

import Logo from "@component/UI/Logo/Logo"
import Modal from "@component/UI/Modal/Modal"
import ThemeToggle from "@component/UI/Theme/Toggle"
import CreateFolder from "@component/Form/Folder/Create"
import FolderList from "@component/Sidebar/FolderList"

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
                                className="button"
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
                                aria-label="Alphabet"
                                className={ `${ pageActive === 'alphabet' ? 'active ' : '' }button mt-2` }
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
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

        </div>
    )
}