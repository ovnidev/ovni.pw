import { useEffect, useState, useRef } from "react"
import { useTranslation } from "react-i18next"

import { IPassword } from "@interfaces/password"
import { updatePasswordSort } from "@logic/password"

import Password from "@component/Pages/Password/Password"

export default function Main(props: { passwords: any, folderId: string, masterPassword: string, onPasswordUpdate: Function, onPasswordDelete: Function }) {

    const { passwords, folderId, masterPassword, onPasswordUpdate, onPasswordDelete } = props

    const { t } = useTranslation("password")

    const [ passwordList, setPasswordList ] = useState<IPassword[]>([])

    const dragPassword = useRef(0)
    const draggedOverPassword = useRef(0)

    const handleSort = () => {
        const passwordsClone = [...passwordList]
        const temp = passwordsClone[dragPassword.current]
        passwordsClone[dragPassword.current] = passwordsClone[draggedOverPassword.current]
        passwordsClone[draggedOverPassword.current] = temp
        setPasswordList(passwordsClone)
        updatePasswordSort(passwordsClone, folderId)
    }

    useEffect(() => { setPasswordList(passwords) }, [ passwords ])

    return (
        <>

            { passwordList && passwordList.length > 0 && (
                <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {passwordList.map((password: any, index: number) => (
                        <Password

                            key={ password.pid }
                            index={ index }
                            passwordData={ password }
                            masterPassword={ masterPassword }
                            onPasswordUpdate={ onPasswordUpdate }
                            onPasswordDelete={ onPasswordDelete }

                            onPasswordDragStart={ (index: number) => dragPassword.current = index }
                            onPasswordDragEnter={ (index: number) => draggedOverPassword.current = index }
                            onPasswordDragEnd={ handleSort }

                        />
                    ))}
                </div>
            )}

            { passwords && passwords.length === 0 && (
                <div className="bg-white dark:bg-black/10 border p-5 border-darker/10 dark:border-white/5 rounded-[4px] w-fit">
                    <p dangerouslySetInnerHTML={{ __html: t("empty") }} />
                </div>
            )}

        </>
    )
}