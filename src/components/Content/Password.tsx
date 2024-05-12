import { openModal } from "@logic/modal"

import Modal from "@component/UI/Modal/Modal"
import UpdatePassword from "@component/Form/Password/Update"
import DeletePassword from "@component/Form/Password/Delete"

export default function Main(props: { passwords: any, masterPassword: string, onPasswordUpdate: Function, onPasswordDelete: Function }) {

    const { passwords, masterPassword, onPasswordUpdate, onPasswordDelete } = props

    return (
        <>
            { passwords && passwords.length > 0 && (
                <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {passwords.map((password: any) => (
                        <div
                            key={ password.pid }
                            className="box group"
                        >
                            <h2
                                className="head"
                            >
                                { password.name }

                                <div className="float-right">
                                    <button
                                        className="button update"
                                        onClick={ () => openModal("update-password-" + password.pid) }
                                        name="Update Password"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle mt-[-4px] inline-block mr-2 icon icon-tabler icons-tabler-outline icon-tabler-lock-cog">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 21h-5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10c.564 0 1.074 .234 1.437 .61" />
                                            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                                            <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                                            <path d="M19.001 15.5v1.5" />
                                            <path d="M19.001 21v1.5" />
                                            <path d="M22.032 17.25l-1.299 .75" />
                                            <path d="M17.27 20l-1.3 .75" />
                                            <path d="M15.97 17.25l1.3 .75" />
                                            <path d="M20.733 20l1.3 .75" />
                                        </svg>
                                    </button>

                                    <button
                                        className="button delete"
                                        onClick={ () => openModal("delete-password-" + password.pid) }
                                        name="Delete Password"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="align-middle mt-[-4px] inline-block mr-2 icon icon-tabler icons-tabler-outline icon-tabler-lock-x">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M13 21h-6a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v.5" />
                                            <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                            <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                                            <path d="M22 22l-5 -5" />
                                            <path d="M17 22l5 -5" />
                                        </svg>
                                    </button>
                                </div>

                            </h2>

                            <div className="p-5">
                                a
                            </div>

                            <Modal
                                name={ `update-password-${ password.pid }` }
                                title="Update Password"
                            >
                                <UpdatePassword passwordId={ password.pid } onUpdate={ onPasswordUpdate } />
                            </Modal>

                            <Modal
                                name={ `delete-password-${ password.pid }` }
                                title="Delete Password"
                            >
                                <DeletePassword passwordId={ password.pid } name={ password.name } onDelete={ onPasswordDelete } />
                            </Modal>

                        </div>
                    ))}
                </div>
            )}
            { passwords && passwords.length === 0 && (
                <div className="bg-white dark:bg-black/10 border p-5 border-darker/10 dark:border-white/5 rounded-[4px] w-fit">
                    <p>
                        No passwords found. Click on "<strong>New Password</strong>" to create new one!
                    </p>
                </div>
            )}
        </>
    )
}