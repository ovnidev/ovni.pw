import { setStorage } from "@logic/storage"
import { generateId } from "@logic/utils"

export const resetAllData = () => {

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
            value: defaultAlphabets[0].aid
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

    const defaultFolder = [
        {
            fid: generateId(),
            name: 'Default',
            icon: 'folder-filled'
        }
    ]
    
    setStorage('settings', defaultSettings)
    setStorage('alphabets', defaultAlphabets)
    setStorage('folders', defaultFolder)

}