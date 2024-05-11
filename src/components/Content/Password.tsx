import { useEffect, useState } from "react"
import { getPassword } from "@logic/password"
import { openModal } from "@logic/modal"

import Modal from "@component/UI/Modal/Modal"
import UpdatePassword from "@component/Password/Update"

export default function Main(props: { passwords: any, onPasswordUpdate: Function }) {

    const { passwords, onPasswordUpdate } = props

    return (
        <>
            { passwords && passwords.length > 0 && (
                <div className="password md:grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                    {passwords.map((password: any) => (
                        <div
                            key={ password.pid }
                            className="mb-2 md:mb-0 md:inline-block bg-black/30 border border-white/10 rounded-[4px] hover:bg-primary/10 hover:border-primary duration-300"
                        >
                            <h2
                                className="bg-white/5 text-[16px] font-inter-black px-5 py-3 border-b border-white/10"
                            >
                                { password.name }
                            </h2>
                            <div className="p-5">
                                a
                            </div>
                        </div>
                    ))}
                </div>
            )}
            { passwords && passwords.length === 0 && (
                <div className="bg-black/10 border p-5 border-white/5 rounded-[4px] w-fit">
                    <p>
                        No passwords found. Click on "<strong>New Password</strong>" to create new one!
                    </p>
                </div>
            )}
        </>
    )
}