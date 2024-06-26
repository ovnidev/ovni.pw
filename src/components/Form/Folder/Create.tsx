import { useState } from "react"
import { useTranslation } from "react-i18next"
import { createFolder } from "@logic/folder"
import { closeModal } from "@logic/modal"

export default function Main(props: { onCreate: Function }) {

    const { onCreate } = props

    const { t } = useTranslation("folder")

    const [ form, setForm ] = useState({
        name: '',
        icon: ''
    })

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        if(!form.name) return

        createFolder(form.name, form.icon)
        setForm({ name: '', icon: '' })
        closeModal('create-folder')
        onCreate()

    }

    return (
        <>

            <form onSubmit={ handleSubmit }>

                <div className="body">

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

                    <div className="relative">
                        <label htmlFor="icon">
                            {t("form.create.icon.label")}
                        </label>
                        <input
                            type="text"
                            placeholder={t("form.create.icon.placeholder")}
                            name="icon"
                            value={ form.icon }
                            onChange={ (event) => setForm({ ...form, icon: event.target.value }) }
                        />
                        <a
                            href="https://tabler.io/icons"
                            target="_blank"
                            className="absolute right-[13px] top-[40px] w-[20px]"
                            title={t("form.create.icon.search")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
                        </a>
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