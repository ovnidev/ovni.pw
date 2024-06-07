import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { getSetting } from "@logic/settings"
import { getAlphabet, getAlphabetList } from "@logic/alphabet"
import { genPassword, copyToClipboard } from "@logic/utils"
import { IAlphabet } from "@interfaces/index"
import Info from "@component/UI/Global/Info"

export default function Main(props: { masterPassword: string }) {

    const { masterPassword } = props

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
        setShowPassword(settingShowPassword.value)
        setForm({ ...form, name: '', identifier: '', alphabet: settingDefaultAlphabet.value, length: settingDefaultLength.value })
        setPassword('')
    }

    useEffect(() => {
        const alphabets = getAlphabetList()
        setAlphabetList(alphabets)
        getSettingData()
    }, [])

    if(alphabetList.length === 0) return (
        <div className="body">
            {t("modal.no_alphabets")}
        </div>
    )

    return (
        <>

            <form>

                <div className="body">

                    <div className="mb-2 md:grid grid-cols-3 gap-2">

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

            </form>

        </>
    )
}