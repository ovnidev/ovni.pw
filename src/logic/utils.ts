import * as randomseed from "random-seed"

declare const sha512: Function

const characters = "0123456789abcdefghijklmnopqrstuvwxyz_-!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export const getPassword = async (master: string, service: string, length: number, alphabet: string): Promise<string> => {

    if(service == '' || master == '') return ''

    const masterHash = await createHash(master)
    const serviceHash = await createHash(service)
    const hash = await createHash(masterHash + serviceHash)

    return createPassword(hash, length, alphabet)

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

export const getCssColor = (master: string, service: string, s = 75, l = 75): string => {

    if(service == '' || master == '') return 'hsl(255, ' + s + '%, ' + l + '%)'

    const seed = sha512(master + service)
    const random = randomseed.create(seed)
    const h = random.intBetween(0, 360)

    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)'

}