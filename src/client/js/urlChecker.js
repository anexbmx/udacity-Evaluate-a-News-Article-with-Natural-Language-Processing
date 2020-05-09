
function checkForUrl(inputText) {
    return /^(?:http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(inputText);
}
export { checkForUrl }
