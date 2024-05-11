import { useEffect, useState } from "react"
import { getFolderList } from "@logic/folder"
import { openModal } from "@logic/modal"

import Logo from "@component/UI/Logo/Logo"
import Modal from "@component/UI/Modal/Modal"
import CreateFolder from "@component/Folder/Create"
import Folder from "@component/Sidebar/Folder"

export default function Main(props: { onFolderClick: Function, folderUpdated: string }) {

    const { onFolderClick, folderUpdated } = props

    const [ homeActive, setHomeActive ] = useState(true)
    const [ folderList, setFolderList ] = useState([])

    const updateFolderList = () => {
        setFolderList(getFolderList())
    }
 
    useEffect(() => { updateFolderList() }, [ folderUpdated ])

    return (
        <div className="sidebar no-scrollbar">

            <div>

                <div className="logo">
                    <div className="px-2">
                        <Logo />
                    </div>
                    <div className="text">
                        ovni.pw
                    </div>
                </div>

                <div className="menu px-2 py-4">

                    <button
                        name="Home"
                        className={ `${ homeActive ? 'active ' : '' }button` }
                        onClick={ () => {
                                onFolderClick('');
                                setHomeActive(true);
                            }
                        }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-lock-square-rounded">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                            <path d="M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
                            <path d="M10 11v-2a2 2 0 1 1 4 0v2" />
                        </svg>
                    </button>

                    <ul className="space-y-1 border-t border-white/5 mt-4 pt-4">
                        <Folder
                            homeActive={ homeActive }
                            folders={ folderList }
                            onFolderClick={ (ev: any) => {
                                    onFolderClick(ev);
                                    setHomeActive(false);
                                }
                            }
                        />
                    </ul>

                </div>

            </div>

            <div>

                <div className="menu py-4 px-2">
                    
                    <button
                        name="Create new folder"
                        className="button"
                        onClick={ () => openModal("new-folder") }
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
                            <path d="M16 19h6" />
                            <path d="M19 16v6" />
                        </svg>
                    </button>

                    <Modal
                        name="new-folder"
                        title="Create new folder"
                    >
                        <CreateFolder onCreate={ updateFolderList } />
                    </Modal>

                </div>

            </div>

        </div>
    )
}