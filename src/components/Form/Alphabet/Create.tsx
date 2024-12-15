import { useState } from "react"
import { useTranslation } from "react-i18next"

import { createAlphabet } from "@logic/alphabet"
import { closeModal } from "@logic/modal"

import Info from "@component/UI/Global/Info"

export default function Main(props: { onCreate: Function }) {

    const { t } = useTranslation("alphabet")

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
                                {t("form.create.name.label")}
                            </label>
                            <input
                                type="text"
                                placeholder={t("form.create.name.placeholder")}
                                name="name"
                                value={ form.name }
                                onChange={ (event) => setForm({ ...form, name: event.target.value }) }
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="identifier">
                                {t("form.create.identifier.label")} <Info text={t("form.create.identifier.helper")} />
                            </label>
                            <input
                                type="text"
                                placeholder={t("form.create.identifier.placeholder")}
                                name="identifier"
                                value={ form.identifier }
                                onChange={ (event) => setForm({ ...form, identifier: event.target.value }) }
                                required
                            />
                        </div>

                    </div>

                    <div className="mb-2">
                        <label htmlFor="characters">
                        {t("form.create.characters.label")} <Info text={t("form.create.characters.helper")} />
                        </label>
                        <input
                            type="text"
                            placeholder={t("form.create.characters.placeholder")}
                            name="characters"
                            value={ form.characters }
                            onChange={ (event) => setForm({ ...form, characters: event.target.value }) }
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="description">
                            {t("form.create.description.label")}
                        </label>
                        <textarea
                            placeholder={t("form.create.description.placeholder")}
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
                        {t("form.create.submit")}
                    </button>
                </div>

            </form>

        </>
    )
}