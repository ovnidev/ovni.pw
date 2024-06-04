import { getStorage, setStorage } from "@logic/storage"

export const importSettings = (data: any) => {
    setStorage('settings', data)
}

export const createDefaultSettings = () => {

    const settings = getStorage('settings')

    if(settings) return

    const defaultSettings = [
        {
            sid: 'default-password-length',
            name: 'Default password length',
            value: 14,
            type: 'number',
            description: 'Default length of generated passwords'
        },
        {
            sid: 'default-show-passwords',
            name: 'Default show passwords',
            value: false,
            type: 'toggle',
            description: 'Show generated passwords by default'
        },
        {
            sid: 'default-alphabet',
            name: 'Default alphabet',
            value: 'default',
            type: 'select',
            description: 'Default alphabet for new generated passwords',
        },
        {
            sid: 'enable-folder-sorting',
            name: 'Enable folder sorting',
            value: true,
            type: 'toggle',
            description: 'Sort folders by dragging them'
        },
        {
            sid: 'enable-password-sorting',
            name: 'Enable password sorting',
            value: true,
            type: 'toggle',
            description: 'Sort passwords by dragging them'
        }
    ]

    setStorage('settings', defaultSettings)

}

export const getSettingsList = () => {
    const settings = getStorage('settings')
    if(!settings || settings.length === 0) return []
    return settings
}

export const getSetting = (id: string) => {

    const settings = getSettingsList()

    for (let index = 0; index < settings.length; index++) {
        if(settings[index].sid === id) return settings[index]
    }

}

export const updateSettings = (id: string, value: string) => {

    const settings = getSettingsList()

    for (let index = 0; index < settings.length; index++) {
        if(settings[index].sid === id) {
            settings[index].value = value
            break
        }
    }

    setStorage('settings', settings)
    
}