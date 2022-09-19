import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

function getToken() {
    return Cookies.get(TokenKey)
}

function setToken(value: string, options: Cookies.CookieAttributes = {}) {
    return Cookies.set(TokenKey, value, options)
}

function removeToken(options: Cookies.CookieAttributes = {}) {
    return Cookies.remove(TokenKey, options)
}

export { getToken, setToken, removeToken }
