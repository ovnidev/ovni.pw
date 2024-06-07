import { getStorage, setStorage } from "@logic/storage"
import { getAlphabetList } from "@logic/alphabet"

export const importSettings = (data: any) => {
    setStorage('settings', data)
}

export const createDefaultSettings = () => {

    const settings = getStorage('settings')

    if(settings) return

    const defaultAlphabet = getAlphabetList()[0].aid

    const defaultSettings = [
        {
            sid: 'default-password-length',
            value: 14
        },
        {
            sid: 'default-show-passwords',
            value: false
        },
        {
            sid: 'default-alphabet',
            value: defaultAlphabet
        },
        {
            sid: 'enable-folder-sorting',
            value: true
        },
        {
            sid: 'enable-password-sorting',
            value: true
        }
    ]

    setStorage('settings', defaultSettings)

}

export const getSettings = () => {

    const settings = [
        {
            sid: 'default-password-length',
            type: 'number'
        },
        {
            sid: 'default-show-passwords',
            type: 'toggle'
        },
        {
            sid: 'default-alphabet',
            type: 'select'
        },
        {
            sid: 'enable-folder-sorting',
            type: 'toggle'
        },
        {
            sid: 'enable-password-sorting',
            type: 'toggle'
        }
    ]

    return settings

}

export const getUserSettings = () => {
    const settings = getStorage('settings')
    if(!settings || settings.length === 0) return []
    return settings
}

export const getSetting = (id: string) => {

    const settings = getUserSettings()

    for (let index = 0; index < settings.length; index++) {
        if(settings[index].sid === id) return settings[index]
    }

}

export const updateSettings = (id: string, value: string) => {

    const settings = getUserSettings()

    for (let index = 0; index < settings.length; index++) {
        if(settings[index].sid === id) {
            settings[index].value = value
            break
        }
    }

    setStorage('settings', settings)
    
}