import Password from "@component/Content/Password/Password"

export default function Main(props: { passwords: any, masterPassword: string, onPasswordUpdate: Function, onPasswordDelete: Function }) {

    const { passwords, masterPassword, onPasswordUpdate, onPasswordDelete } = props

    return (
        <>

            { passwords && passwords.length > 0 && (
                <div className="md:grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {passwords.map((password: any) => (
                        <Password
                            key={ password.pid }
                            passwordData={ password }
                            masterPassword={ masterPassword }
                            onPasswordUpdate={ onPasswordUpdate }
                            onPasswordDelete={ onPasswordDelete }
                        />
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