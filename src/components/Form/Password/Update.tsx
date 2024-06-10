import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { closeModal } from "@logic/modal"
import { getSetting } from "@logic/settings"
import { updatePassword, getPassword } from "@logic/password"
import { getAlphabet, getAlphabetList } from "@logic/alphabet"
import { genPassword, copyToClipboard } from "@logic/utils"
import { IAlphabet } from "@interfaces/index"
import Info from "@component/UI/Global/Info"

export default function Main(props: { passwordId: string, masterPassword: string, onUpdate: Function }) {

    const { passwordId, masterPassword, onUpdate } = props

    const { t } = useTranslation("password")

    const [ alphabetList, setAlphabetList ] = useState<IAlphabet[]>([])
    const [ password, setPassword ] = useState('')
    const [ showPassword, setShowPassword ] = useState(false)
    const [ passCopied, setPassCopied ] = useState(false)

    const [ form, setForm ] = useState({
        name: '',
        identifier: '',
        alphabet: '',
        length: 14,
        folder: '',
        version: 1
    })
    
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if(!form.identifier) return
        updatePassword(passwordId, form.name, form.identifier, form.alphabet, form.length, form.folder, form.version)
        onUpdate()
        getSettingData()
        closeModal('update-password-' + passwordId)
    }

    const generatePassword = async (alphabetId: string, length: number, identifier: string, version?: number) => {
        const alphabet = getAlphabet(alphabetId)
        if(!alphabet) return
        const password = await genPassword(masterPassword, identifier, length, { identifier: alphabet.identifier, characters: alphabet.characters }, version)
        setPassword(password)
    }

    const copyPassword = async () => {
        copyToClipboard(password)
        setPassCopied(true)
        setTimeout(() => {
            setPassCopied(false)
        }, 3000)
    }

    const getPasswordData = async () => {
        
        const passwordData = getPassword(passwordId)

        setForm({
            name: passwordData.name,
            identifier: passwordData.identifier,
            alphabet: passwordData.alphabet,
            length: passwordData.length,
            folder: passwordData.folder,
            version: passwordData.version ? passwordData.version : 1
        })

        await generatePassword(passwordData.alphabet, passwordData.length, passwordData.identifier, passwordData.version)
    }

    const getSettingData = () => {
        const settingShowPassword = getSetting('default-show-passwords')
        setShowPassword(settingShowPassword.value)
    }

    useEffect(() => {
        const alphabets = getAlphabetList()
        setAlphabetList(alphabets)
        getSettingData()
    }, [])

    useEffect(() => {
        (async () => {
            await getPasswordData()
        })()
    }, [])

    return (
        <>

            <form onSubmit={ handleSubmit }>

                <div className="body">

                    <div className="mb-2 md:grid grid-cols-2 gap-2">

                        <div>
                            <label htmlFor="name">
                                {t("form.update.name.label")}
                            </label>
                            <input
                                type="text"
                                placeholder={t("form.update.name.placeholder")}
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
                                {t("form.update.identifier.label")} <Info text={t("form.update.identifier.helper")} />
                            </label>
                            <input
                                type="text"
                                placeholder={t("form.update.identifier.placeholder")}
                                name="identifier"
                                value={ form.identifier }
                                onChange={ (event) => {
                                    setForm({ ...form, identifier: event.target.value });
                                    generatePassword(form.alphabet, form.length, event.target.value, form.version); 
                                }}
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="alphabet">
                                {t("form.update.alphabet.label")} <Info text={t("form.update.alphabet.helper")} />
                            </label>
                            <select
                                name="alphabet"
                                onChange={ (event) => {
                                    setForm({ ...form, alphabet: event.target.value });
                                    generatePassword(event.target.value, form.length, form.identifier, form.version);
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
                                {t("form.update.length.label")}
                            </label>
                            <input
                                type="number"
                                name="length"
                                min={ 1 }
                                max={ 80 }
                                value={ form.length }
                                onChange={ (event: any) => {
                                    setForm({ ...form, length: parseInt(event.target.value) });
                                    generatePassword(form.alphabet, event.target.value, form.identifier, form.version);
                                }}
                                onKeyUp={ (event: any) => {
                                    setForm({ ...form, length: parseInt(event.target.value) });
                                    generatePassword(form.alphabet, event.target.value, form.identifier, form.version); 
                                }}
                                required
                            />
                        </div>

                    </div>

                    <div className="mb-2 md:grid grid-cols-6 gap-2">

                        <div className="col-span-5 relative">

                            <label htmlFor="length">
                                {t("form.update.password.label")}
                            </label>
                            <input
                                type={ showPassword ? 'text' : 'password' }
                                value={ password }
                                className="w-full"
                                placeholder={t("form.update.password.placeholder")}
                                readOnly
                            />
                            <div className="input-buttons label !mt-[-1.5px]">
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

                        <div className="col-span-1">
                            <label htmlFor="version">
                                {t("form.update.version.label")}
                            </label>
                            <input
                                type="number"
                                name="version"
                                min={ 1 }
                                max={ 1000 }
                                value={ form.version }
                                onChange={ (event: any) => {
                                    setForm({ ...form, version: parseInt(event.target.value) });
                                    generatePassword(form.alphabet, form.length, form.identifier, event.target.value);
                                }}
                                onKeyUp={ (event: any) => {
                                    setForm({ ...form, version: parseInt(event.target.value) });
                                    generatePassword(form.alphabet, form.length, form.identifier, event.target.value); 
                                }}
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
                        {t("form.update.submit")}
                    </button>
                </div> 

            </form>

        </>
    )
}