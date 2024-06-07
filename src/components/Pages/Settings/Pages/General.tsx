import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { getSettings, getUserSettings, updateSettings } from "@logic/settings"
import { getAlphabetList } from "@logic/alphabet"
import { ISettings, IUserSettings } from "@interfaces/index"
import Toggle from "@component/UI/Form/Toggle"
import Select from "@component/UI/Form/Select"
import Input from "@component/UI/Form/Input"

export default function Main() {

    const { t } = useTranslation("settings")

    const [ settings, setSettings ] = useState<ISettings[]>([])
    const [ userSettings, setUserSettings ] = useState<IUserSettings[]>([])

    const onSettingChange = (sid: string, value: string) => {
        updateSettings(sid, value)
    }

    useEffect(() => {
        setUserSettings(getUserSettings())
        setSettings(getSettings())
    }, [])

    return (
        <>
            { settings && settings.length > 0 && (

                <div className="settings-body">

                    <h2>
                        {t("general.title")}
                    </h2>

                    <div className="content !p-0">
                        
                        <div
                            className="option"
                        >

                            <div className="name">
                                {t("general.length.name")}
                            </div>

                            <div className="description">
                                {t("general.length.description")}
                            </div>

                            <Input
                                sid={ settings[0].sid }
                                defaultValue={ userSettings[0].value as string }
                                type={ settings[0].type }
                                onChange={ onSettingChange }
                            />

                        </div>

                        <div
                            className="option"
                        >

                            <div className="name">
                                {t("general.show.name")}
                            </div>

                            <div className="description">
                                {t("general.show.description")}
                            </div>

                            <Toggle
                                sid={ settings[1].sid }
                                isChecked={ userSettings[1].value as boolean }
                                onToggle={ onSettingChange }
                            />

                        </div>

                        <div
                            className="option"
                        >

                            <div className="name">
                                {t("general.alphabet.name")}
                            </div>

                            <div className="description">
                                {t("general.alphabet.description")}
                            </div>

                            <Select
                                sid={ settings[2].sid }
                                options={ getAlphabetList }
                                selected={ userSettings[2].value as string }
                                onSelect={ onSettingChange }
                            />

                        </div>

                        <div
                            className="option"
                        >

                            <div className="name">
                                {t("general.sorting.folder.name")}
                            </div>

                            <div className="description">
                                {t("general.sorting.folder.description")}
                            </div>

                            <Toggle
                                sid={ settings[3].sid }
                                isChecked={ userSettings[3].value as boolean }
                                onToggle={ onSettingChange }
                            />

                        </div>

                        <div
                            className="option"
                        >

                            <div className="name">
                                {t("general.sorting.password.name")}
                            </div>

                            <div className="description">
                                {t("general.sorting.password.description")}
                            </div>

                            <Toggle
                                sid={ settings[4].sid }
                                isChecked={ userSettings[4].value as boolean }
                                onToggle={ onSettingChange }
                            />

                        </div>

                    </div>

                </div>

            )}
        
        </>

    )
}