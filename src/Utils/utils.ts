export const removeEscapeCharacters = (str: string) => {
    return str.replace(/[\n\r\t\f]/g, ' ');
}