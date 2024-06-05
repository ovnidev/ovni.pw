import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { getFolder } from "@logic/folder"
import { getPasswordList } from "@logic/password"
import { openModal } from "@logic/modal"
import { IFolder } from "@interfaces/index"

import Modal from "@component/UI/Modal/Modal"
import CreatePassword from "@component/Form/Password/Create"
import UpdateFolder from "@component/Form/Folder/Update"
import DeleteFolder from "@component/Form/Folder/Delete"
import Passwords from "@component/Pages/Password/List"

export default function Main(props: { masterPassword: string, folderId: string, onFolderUpdate: Function, onFolderDelete: Function }) {

    const { masterPassword, folderId, onFolderUpdate, onFolderDelete } = props

    const { t } = useTranslation(["folder", "password"])

    const [ folder, setFolder ] = useState<IFolder | {}>({})
    const [ passwordList, setPasswordList ] = useState([])

    const createPassword = () => {
        setPasswordList(getPasswordList(folderId))
    }

    const updateFolder = (data: IFolder) => {
        setFolder(data)
        onFolderUpdate(data)
    }

    const deleteFolder = () => {
        setFolder({})
        onFolderDelete(folderId)
    }

    useEffect(() => {

        setFolder(getFolder(folderId))
        setPasswordList(getPasswordList(folderId))

    }, [ folderId ])

    return (
        <>
            { folder && (
                <>
                    <div className="head">

                        <h2 className="title">
                            <i className={`align-middle mt-[-3px] mr-2 inline-block icon ti ti-${ (folder as IFolder).icon ? (folder as IFolder).icon : 'folder-filled' }`}></i> { (folder as IFolder).name }
                        </h2>

                        <div className="buttons">

                            <button
                                className="btn create"
                                onClick={ () => openModal("create-password") }
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle mt-[-4px] inline-block mr-2 icon icon-tabler icons-tabler-outline icon-tabler-lock-plus">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.5 21h-5.5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 1.74 1.012" />
                                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                                    <path d="M16 19h6" />
                                    <path d="M19 16v6" />
                                </svg>

                                {t("head.button.create")}

                            </button>

                            <button
                                className="btn default"
                                onClick={ () => openModal("update-folder") }
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle mt-[-4px] inline-block mr-2 icon icon-tabler icons-tabler-outline icon-tabler-folder-cog">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12.5 19h-7.5a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3" />
                                    <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                    <path d="M19.001 15.5v1.5" />
                                    <path d="M19.001 21v1.5" />
                                    <path d="M22.032 17.25l-1.299 .75" />
                                    <path d="M17.27 20l-1.3 .75" />
                                    <path d="M15.97 17.25l1.3 .75" />
                                    <path d="M20.733 20l1.3 .75" />
                                </svg>

                                {t("head.button.update")}

                            </button>

                            <button
                                className="btn delete"
                                onClick={ () => openModal("delete-folder") }
                            >

                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle mt-[-4px] inline-block mr-2 icon icon-tabler icons-tabler-outline icon-tabler-folder-cross">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M13.5 19h-8.5a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4" />
                                    <path d="M22 22l-5 -5" />
                                    <path d="M17 22l5 -5" />
                                </svg>

                                {t("head.button.delete")}

                            </button>

                        </div>

                    </div>

                    <div className="body">

                        <Modal
                            name="create-password"
                            title={t("modal.create.title", { ns: 'password' })}
                        >
                            <CreatePassword
                                folderId={ folderId }
                                masterPassword={ masterPassword }
                                onCreate={ createPassword }
                            />
                        </Modal>

                        <Modal
                            name="update-folder"
                            title={t("head.modal.update.title")}
                        >
                            <UpdateFolder
                                folderId={ folderId }
                                onUpdate={ updateFolder }
                            />
                        </Modal>

                        <Modal
                            name="delete-folder"
                            title={t("head.modal.delete.title")}
                        >
                            <DeleteFolder
                                folderId={ folderId }
                                onDelete={ deleteFolder }
                            />
                        </Modal>

                        <Passwords
                            masterPassword={ masterPassword }
                            passwords={ passwordList }
                            folderId={ folderId }
                            onPasswordUpdate={ () => setPasswordList(getPasswordList(folderId)) }
                            onPasswordDelete={ () => setPasswordList(getPasswordList(folderId)) }
                        />

                    </div>

                </>
            )}
        </>
    )
}