import { useState } from "react"
import { createPassword } from "@logic/password"
import { closeModal } from "@logic/modal"

export default function Main(props: { folderId:string, onCreate: Function }) {

    const { folderId, onCreate } = props

    const [ form, setForm ] = useState({
        name: '',
        identifier: ''
    })

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        if(!form.identifier) return

        createPassword(form.name, form.identifier, folderId)
        setForm({ identifier: '', name: '' })
        closeModal('new-password')
        onCreate()

    }

    return (
        <div>

            <form onSubmit={ handleSubmit }>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={ form.name }
                    onChange={ (event) => setForm({ ...form, name: event.target.value }) }
                    required
                />

                <input
                    type="text"
                    placeholder="Identifier"
                    name="identifier"
                    value={ form.identifier }
                    onChange={ (event) => setForm({ ...form, identifier: event.target.value }) }
                    required
                />

                <button
                    type="submit"
                    className="submit"
                >
                    Create password
                </button>

            </form>

        </div>
    )
}