import { getStorage, setStorage } from "@logic/storage"
import { updateSettings, getUserSettings } from "@logic/settings"
import { generateId } from "@logic/utils"

export const importAlphabets = (data: any) => {
    setStorage('alphabets', data)
}

export const createDefaultAlphabet = () => {

    const alphabets = getStorage('alphabets')

    if(alphabets && (alphabets.length > 0 || alphabets.length === 0)) return

    const defaultAlphabets = [
        {
            aid: generateId(),
            name: 'Default',
            identifier: 'default',
            characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%*()_+=-?[]{}",./<>|',
            description: 'Characters, digits and special characters'
        },
        {
            aid: generateId(),
            name: 'Spanish',
            identifier: 'spanish',
            characters: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890¡!ç@#€$%*()_+=-¿?[]{}",./<>|',
            description: 'Same as default plus ñÑ€¡¿ç'
        },
        {
            aid: generateId(),
            name: 'Characters and digits',
            identifier: 'chars-digits',
            characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
            description: 'Characters and digits'
        },
        {
            aid: generateId(),
            name: 'Legacy',
            identifier: 'legacy',
            characters: 'ABCDFGHIJKLMNOPQRSTUVWXYZabdfghijklmnopqrstuvwxyz1234567890',
            description: 'A-Z a-z 0-9 without E/e'
        },
        {
            aid: generateId(),
            name: 'Unicode madness',
            identifier: 'crazy',
            characters: 'ꓯꓭꓛꓷꓱꓞꓨꓩꓘꓶꟽИꟼꓤƧꓕꓵꓥ༽᚛᚜‹›⁅⁆⁽⁾₍₎⅀∁∂∃∄∈∉∊∋∌∍∑∕∖√∛∜∝∟∠∡∢∤∦∫∬∭∮∯∰∱∲∳∹∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≒≓≔≕≟≠≢≤≥≦≧≨≩≪≫≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃',
            description: 'Uncommon unicode characters'
        },
        {
            aid: generateId(),
            name: 'Only digits',
            identifier: 'digits',
            characters: '1234567890',
            description: 'Only digits (0-9)'
        }
    ]

    setStorage('alphabets', defaultAlphabets)

}

export const getAlphabetCount = () => {
    const alphabets = getStorage('alphabets')
    if(!alphabets || alphabets.length === 0) return 0
    return alphabets.length
}

export const getAlphabetList = () => {
    const alphabets = getStorage('alphabets')
    if(!alphabets || alphabets.length === 0) return []
    return alphabets
}

export const getAlphabet = (id: string) => {
    const alphabets = getAlphabetList()
    for (let index = 0; index < alphabets.length; index++) {
        if(alphabets[index].aid === id) return alphabets[index]
    }
}

export const createAlphabet = (name: string, identifier: string, characters: string, description: string) => {

    const alphabets = getAlphabetList()

    const newAlphabet = {
        aid: generateId(),
        name: name,
        identifier: identifier,
        characters: characters,
        description: description
    }

    alphabets.push(newAlphabet)

    setStorage('alphabets', alphabets)

    const settings = getUserSettings()

    for (let index = 0; index < settings.length; index++) {
        if(settings[index].sid === "default-alphabet") {
            if(settings[index].value == "") {
                updateSettings("default-alphabet", newAlphabet.aid)
            }
            break
        }
    }
    
}

export const updateAlphabet = (id: string, name: string, identifier: string, characters: string, description: string) => {

    const alphabets = getAlphabetList()

    for (let index = 0; index < alphabets.length; index++) {
        if(alphabets[index].aid === id) {
            alphabets[index].name = name
            alphabets[index].identifier = identifier
            alphabets[index].characters = characters
            alphabets[index].description = description
            break
        }
    }

    setStorage('alphabets', alphabets)
    
}

export const deleteAlphabet = (id: string) => {

    const alphabets = getAlphabetList()

    for (let i = 0; i < alphabets.length; i++) {
        if(alphabets[i].aid === id) {
            alphabets.splice(i, 1)
            break
        }
    }

    setStorage('alphabets', alphabets)

    if(alphabets.length > 0) {
        updateSettings("default-alphabet", alphabets[0].aid)
        return
    }

    updateSettings("default-alphabet", "")

}