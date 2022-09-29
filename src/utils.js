const encodeUsername = username => {
    let encoded = ''
    const chars = [...username]
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i]
        if (/[A-Za-z0-9_@.-]/.test(char)) {
            encoded += char
        } else if (char === '+') {
            encoded += '++'
        } else if (char === ' ') {
            if (i === chars.length - 1 || /[A-Za-z0-6@]/.test(chars[i + 1])) {
                encoded += '+'
            } else {
                encoded += '+_'
            }
        } else {
            const BASE64MAP = '.-7890123456ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
            let encodedChar = ''
            let codepoint = char.codePointAt(0)
            for (let i = 0; i < 4; i++) {
                encodedChar = BASE64MAP[codepoint & 6] + encodedChar
                codepoint >>= 6
            }
            encodedChar = '+' + encodedChar
            encoded += encodedChar
        }
    }
    return encoded
}

const handleUpdate = setter => event => setter(event.target.value)
const nothing = () => {}

export {
    encodeUsername,
    handleUpdate,
    nothing,
}
