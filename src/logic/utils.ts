import * as randomseed from "random-seed"

declare const sha512: Function

export const generateId = () => Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8)

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

export const downloadFile = (data, filename, type) => {
	
    var file = new Blob([data], { type: type })

	const a = document.createElement("a")
	const url = URL.createObjectURL(file)

	a.href = url
	a.download = filename

	document.body.appendChild(a)

	a.click()

	setTimeout(function() {
		document.body.removeChild(a)
		window.URL.revokeObjectURL(url); 
	}, 0)

}

const generateKey = async (masterKey: string, salt: Uint8Array, iteractions: number, length: number, hash: string, algorithm = 'AES-CBC') => {

	const encoder = new TextEncoder()

	let keyMaterial = await window.crypto.subtle.importKey('raw', encoder.encode(masterKey), { name: 'PBKDF2' }, false, ['deriveKey'])

	return await window.crypto.subtle.deriveKey({
		name: 'PBKDF2',
		salt: salt,
		iterations: iteractions,
		hash
	}, keyMaterial, {
		name: algorithm,
		length: length
	}, false, ['encrypt', 'decrypt'])

}

export const encodeData = async (masterKey: string, data: any) => {

	const encoder = new TextEncoder()

	const salt = window.crypto.getRandomValues(new Uint8Array(16))
	const iv = window.crypto.getRandomValues(new Uint8Array(16))
	const bufferData = encoder.encode(data)
	const key = await generateKey(masterKey, salt, 100000, 256, 'SHA-256')

	const encodedData = await window.crypto.subtle.encrypt({ name: "AES-CBC", iv: iv }, key, bufferData)

	return bufferABase64([ ...salt, ...iv, ...new Uint8Array(encodedData) ])

}

export const decodeData = async (masterKey: string, data: string) => {

	const decoder = new TextDecoder()

	const bufferData = base64ABuffer(data)
	const salt = bufferData.slice(0, 16)
	const iv = bufferData.slice(16, 32)
	const key = await generateKey(masterKey, salt, 100000, 256, 'SHA-256')

	const decodeDataBuffer = await window.crypto.subtle.decrypt({ name: "AES-CBC", iv: iv }, key, bufferData.slice(32))

	return decoder.decode(decodeDataBuffer)

}

const bufferABase64 = (buffer: any) => btoa(String.fromCharCode(...new Uint8Array(buffer)))
const base64ABuffer = (buffer: string) => Uint8Array.from(atob(buffer), c => c.charCodeAt(0))