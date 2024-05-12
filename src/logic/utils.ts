import * as randomseed from "random-seed"

declare const sha512: Function

export const genPassword = async (master: string, identifier: string, length: number, alphabet: { identifier: string, characters: string }): Promise<string> => {

    if(master == '' || identifier == '') return ''

    const masterHash = await createHash(master)
    const identifierHash = await createHash(identifier)
    const alphabetHash = await createHash(alphabet.identifier)
    const hash = await createHash(masterHash + identifierHash + alphabetHash)

    return createPassword(hash, length, alphabet.characters)

}

const createPassword = (hash: string, length: number, alphabet: string): string => {

    const seed = randomseed.create(hash)

    let result = ''

    for(let i = 0; i < length; i++)
        result += alphabet[seed(alphabet.length)]

    return result
}

const createHash = async (str: string): Promise<string> => {
    const buffer = await crypto.subtle.digest("SHA-512", new TextEncoder().encode(str))
    return Array.prototype.map.call(new Uint8Array(buffer), x => (('00' + x.toString(16)).slice(-2))).join('')
}

export const getCssColor = (master: string, identifier: string, s = 75, l = 75): string => {

    if(identifier == '' || master == '') return 'hsl(255, ' + s + '%, ' + l + '%)'

    const seed = sha512(master + identifier)
    const random = randomseed.create(seed)
    const h = random.intBetween(0, 360)

    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)'

}

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
}