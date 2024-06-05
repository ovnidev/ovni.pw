import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { closeModal } from "@logic/modal"
import { createPassword } from "@logic/password"
import { getSetting } from "@logic/settings"
import { getAlphabet, getAlphabetByIdentifier, getAlphabetList } from "@logic/alphabet"
import { genPassword, copyToClipboard } from "@logic/utils"
import { IAlphabet } from "@interfaces/index"
import Info from "@component/UI/Global/Info"

export default function Main(props: { folderId: string, masterPassword: string, onCreate: Function }) {

    const { folderId, masterPassword, onCreate } = props

    const { t } = useTranslation("password")

    const [ alphabetList, setAlphabetList ] = useState<IAlphabet[]>([])
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)
    const [ passCopied, setPassCopied ] = useState(false)

    const [ form, setForm ] = useState({
        name: '',
        identifier: '',
        alphabet: '',
        length: 0
    })

    const handleSubmit = async (event: any) => {

        event.preventDefault()

        if(!form.identifier) return

        createPassword(form.name, form.identifier, form.alphabet, form.length, folderId)

        onCreate()

        setForm({ ...form, name: '', identifier: '', length: 0 })

        getSettingData()
        setShowPassword(false)
        setPassword('')

        closeModal('create-password')

    }

    const generatePassword = async (alphabetId: string, length: number, identifier: string) => {
        const alphabet = getAlphabet(alphabetId)
        const password = await genPassword(masterPassword, identifier, length, { identifier: alphabet.identifier, characters: alphabet.characters })
        setPassword(password)
    }

    const copyPassword = async () => {

        copyToClipboard(password)
        setPassCopied(true)

        setTimeout(() => {
            setPassCopied(false)
        }, 3000)

    }

    const getSettingData = () => {

        const settingShowPassword = getSetting('default-show-passwords')
        const settingDefaultLength = getSetting('default-password-length')
        const settingDefaultAlphabet = getSetting('default-alphabet')
        const getSettingDefaultAlphabet = getAlphabetByIdentifier(settingDefaultAlphabet.value)

        setShowPassword(settingShowPassword.value)

        setForm({ ...form, name: '', identifier: '', alphabet: getSettingDefaultAlphabet.aid, length: settingDefaultLength.value })
        
    }

    useEffect(() => {
        const alphabets: IAlphabet[] = getAlphabetList()
        setAlphabetList(alphabets)
        getSettingData()
    }, [ folderId ])

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
                                onChange={ (event) => {
                                    setForm({ ...form, name: event.target.value });
                                }}
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
                                onChange={ (event) => {
                                    setForm({ ...form, identifier: event.target.value });
                                    generatePassword(form.alphabet, form.length, event.target.value); 
                                }}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="alphabet">
                                {t("form.create.alphabet.label")} <Info text={t("form.create.alphabet.helper")} />
                            </label>
                            <select
                                name="alphabet"
                                onChange={ (event) => {
                                    setForm({ ...form, alphabet: event.target.value });
                                    generatePassword(event.target.value, form.length, form.identifier);
                                }}
                                value={ form.alphabet }
                            >
                                { alphabetList && alphabetList.length > 0 && alphabetList.map((alphabet) => (
                                    <option
                                        key={ alphabet.aid }
                                        value={ alphabet.aid }
                                    >
                                        { alphabet.name }
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="length">
                                {t("form.create.length.label")}
                            </label>
                            <input
                                type="number"
                                name="length"
                                min={ 1 }
                                max={ 80 }
                                value={ form.length }
                                onChange={ (event: any) => {
                                    setForm({ ...form, length: parseInt(event.target.value) });
                                    generatePassword(form.alphabet, event.target.value, form.identifier);
                                }}
                                onKeyUp={ (event: any) => {
                                    setForm({ ...form, length: parseInt(event.target.value) });
                                    generatePassword(form.alphabet, event.target.value, form.identifier); 
                                }}
                                required
                            />
                        </div>

                    </div>

                    <div className="relative">
                        <label htmlFor="length">
                            {t("form.create.password.label")}
                        </label>
                        <input
                            type={ showPassword ? 'text' : 'password' }
                            value={ password }
                            className="w-full"
                            placeholder={t("form.create.password.placeholder")}
                            readOnly
                        />
                        <div className="input-buttons label">
                            <span
                                className="btn-input"
                                onClick={ () => setShowPassword(!showPassword) }
                            >
                                <i className={ `ti ti-${ showPassword ? 'eye' : 'eye-off' }` }></i>
                            </span>
                            <span
                                className={ `btn-input${ passCopied ? ' active' : '' }` }
                                onClick={ () => copyPassword() }
                            >
                                <i className={ `ti ti-${ passCopied ? 'check' : 'copy' }` }></i>
                            </span>
                        </div>

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