import { useEffect, useState } from "react"
import { getSettingsList, updateSettings } from "@logic/settings"
import { getAlphabetList } from "@logic/alphabet"
import { ISettings } from "@interfaces/index"
import Toggle from "@component/UI/Form/Toggle"
import Select from "@component/UI/Form/Select"
import Input from "@component/UI/Form/Input"

export default function Main() {

    const [ settings, setSettings ] = useState<ISettings[]>([])

    const onSettingChange = (sid: string, value: any) => {
        updateSettings(sid, value)
    }

    useEffect(() => {
        setSettings(getSettingsList())
    }, [])

    return (
        <div className="settings-body">

            <h2>
                General
            </h2>
            
            <div className="content !p-0">
                
                { settings && settings.map((setting) => (
                    <div
                        key={ setting.sid }
                        className="option"
                    >

                        <div className="name">
                            { setting.name }
                        </div>

                        <div className="description">
                            { setting.description }
                        </div>

                        { setting.type === 'toggle' && (
                            <Toggle
                                sid={ setting.sid }
                                isChecked={ setting.value as boolean }
                                onToggle={ onSettingChange }
                            />
                        )}

                        { setting.type === 'select' && (
                            <Select
                                sid={ setting.sid }
                                options={ getAlphabetList }
                                selected={ setting.value as string }
                                onSelect={ onSettingChange }
                            />
                        )}

                        { (setting.type === 'number' || setting.type === 'text') && (
                            <Input
                                sid={ setting.sid }
                                defaultValue={ setting.value }
                                type={ setting.type }
                                onChange={ onSettingChange }
                            />
                        )}

                    </div>
                ))}

            </div>

        </div>
    )
}