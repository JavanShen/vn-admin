import Cookies from 'js-cookie'

const TokenKey='Admin-Token'

function getToken() {
  return Cookies.get(TokenKey)
}

function setToken(value, options={}) {
  return Cookies.set(TokenKey, value, options)
}

function removeToken(options={}) {
  return Cookies.remove(TokenKey, options)
}

export {getToken, setToken, removeToken}