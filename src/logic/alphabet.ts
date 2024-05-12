import { getStorage, setStorage } from "@logic/storage"

export const createDefaultAlphabet = () => {

    const alphabets = getStorage('alphabets')

    if(alphabets && (alphabets.length > 0 || alphabets.length === 0)) return

    const defaultAlphabets = [
        {
            aid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            name: 'Default',
            identifier: 'default',
            characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%*()_+=-?[]{}",./<>|',
            description: 'Characters, digits and special characters'
        },
        {
            aid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            name: 'Spanish',
            identifier: 'spanish',
            characters: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890¡!ç@#€$%*()_+=-¿?[]{}",./<>|',
            description: 'Same as default plus ñÑ€¡¿ç'
        },
        {
            aid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            name: 'Characters and digits',
            identifier: 'chars-digits',
            characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890',
            description: 'Characters (uppercase and lowercase) and digits'
        },
        {
            aid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            name: 'Legacy',
            identifier: 'legacy',
            characters: 'ABCDFGHIJKLMNOPQRSTUVWXYZabdfghijklmnopqrstuvwxyz1234567890',
            description: 'A-Z a-z 0-9 without E/e'
        },
        {
            aid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            name: 'Unicode madness',
            identifier: 'crazy',
            characters: 'ꓯꓭꓛꓷꓱꓞꓨꓩꓘꓶꟽИꟼꓤƧꓕꓵꓥ༽᚛᚜‹›⁅⁆⁽⁾₍₎⅀∁∂∃∄∈∉∊∋∌∍∑∕∖√∛∜∝∟∠∡∢∤∦∫∬∭∮∯∰∱∲∳∹∻∼∽∾∿≀≁≂≃≄≅≆≇≈≉≊≋≌≒≓≔≕≟≠≢≤≥≦≧≨≩≪≫≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊂⊃',
            description: 'Uncommon unicode characters'
        },
        {
            aid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            name: 'Only digits',
            identifier: 'digits',
            characters: '1234567890',
            description: 'Only digits (0-9)'
        }
    ]

    setStorage('alphabets', defaultAlphabets)

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
        aid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        name: name,
        identifier: identifier,
        characters: characters,
        description: description
    }

    alphabets.push(newAlphabet)

    setStorage('alphabets', alphabets)
    
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

    console.log(alphabets)

    for (let i = 0; i < alphabets.length; i++) {
        if(alphabets[i].aid === id) {
            alphabets.splice(i, 1)
            break
        }
    }

    setStorage('alphabets', alphabets)
    
}