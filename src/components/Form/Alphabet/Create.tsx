import { useState } from "react"
import { createAlphabet } from "@logic/alphabet"
import { closeModal } from "@logic/modal"

import Info from "@component/UI/Global/Info"

export default function Main(props: { onCreate: Function }) {

    const { onCreate } = props

    const [ form, setForm ] = useState({
        name: '',
        identifier: '',
        characters: '',
        description: ''
    })

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        if(!form.name) return

        createAlphabet(form.name, form.identifier, form.characters, form.description)
        setForm({ name: '', identifier: '', characters: '', description: '' })
        closeModal('create-alphabet')
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
                                placeholder="e.g. alphabet-1"
                                name="identifier"
                                value={ form.identifier }
                                onChange={ (event) => setForm({ ...form, identifier: event.target.value }) }
                                required
                            />
                        </div>

                    </div>

                    <div className="mb-2">
                        <label htmlFor="characters">
                            Characters <Info text="This will be used to generate the password." />
                        </label>
                        <input
                            type="text"
                            placeholder="Characters (e.g. abcdef...)"
                            name="characters"
                            value={ form.characters }
                            onChange={ (event) => setForm({ ...form, characters: event.target.value }) }
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description">
                            Description
                        </label>
                        <textarea
                            placeholder="Description"
                            name="description"
                            value={ form.description }
                            onChange={ (event) => setForm({ ...form, description: event.target.value }) }
                            required
                        ></textarea>
                    </div>

                </div>

                <div className="footer">
                    <button
                        type="submit"
                        className="default"
                    >
                        Create alphabet
                    </button>
                </div>

            </form>

        </>
    )
}