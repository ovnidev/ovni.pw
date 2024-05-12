import { useState } from "react"
import { createPassword } from "@logic/password"
import { closeModal } from "@logic/modal"
import Info from "@component/UI/Global/Info"

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
        closeModal('create-password')
        onCreate()

    }

    return (
        <>

            <form onSubmit={ handleSubmit }>

                <div className="body">

                    <div className="mb-2 md:grid grid-cols-2 gap-2">

                        <div>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Display name"
                                name="name"
                                value={ form.name }
                                onChange={ (event) => setForm({ ...form, name: event.target.value }) }
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="identifier">
                                Identifier <Info text="This will be used to generate the password." />
                            </label>
                            <input
                                type="text"
                                placeholder="Password identifier"
                                name="identifier"
                                value={ form.identifier }
                                onChange={ (event) => setForm({ ...form, identifier: event.target.value }) }
                                required
                            />
                        </div>

                    </div>

                </div>

                <div className="footer">
                    <button
                        type="submit"
                        className="default"
                    >
                        Create password
                    </button>
                </div>



            </form>

        </>
    )
}