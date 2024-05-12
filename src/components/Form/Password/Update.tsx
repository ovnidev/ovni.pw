import { useState, useEffect } from "react"
import { updatePassword, getPassword } from "@logic/password"
import { closeModal } from "@logic/modal"
import Info from "@component/UI/Global/Info"

export default function Main(props: { passwordId: string, onUpdate: Function }) {

    const { passwordId, onUpdate } = props

    const [ form, setForm ] = useState({
        name: '',
        identifier: '',
        folder: ''
    })

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        if(!form.name) return

        updatePassword(passwordId, form.name, form.identifier, form.folder)
        closeModal('update-password')
        onUpdate({
            pid: passwordId,
            name: form.name,
            identifier: form.identifier
        })

    }

    const getPasswordData = () => {
        const passwordData = getPassword(passwordId)
        setForm({
            name: passwordData.name,
            identifier: passwordData.identifier,
            folder: passwordData.folder,
        })
    }

    useEffect(() => { getPasswordData() }, [ passwordId ])

    return (
        <>

            <form onSubmit={ handleSubmit }>

                <div className="body">

                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Name to display"
                        name="name"
                        value={ form.name }
                        onChange={ (event) => setForm({ ...form, name: event.target.value }) }
                        required
                    />

                    <div className="relative">
                        <label htmlFor="identifier">
                            Identifier <Info text="If you change this, it will change the generated password!" />
                        </label>
                        <input
                            type="text"
                            placeholder="Password identifier"
                            name="identifier"
                            value={ form.identifier }
                            onChange={ (event) => setForm({ ...form, identifier: event.target.value }) }
                        />
                    </div>
                    
                </div>

                <div className="footer">
                    <button
                        type="submit"
                        className="default"
                    >
                        Update password
                    </button>
                </div> 

            </form>

        </>
    )
}