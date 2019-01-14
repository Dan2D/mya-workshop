import decode from 'jwt-decode'
import axios from 'axios'

const register = (username, email, password) => {
  return axios.post('/users', {
    username,
    email,
    password
  })
    .then(response => {
      return Promise.resolve()
    })
    .catch(function (error) {
      return Promise.reject(error)
    })
}

const login = (username, password) => {
  return axios.post('/auth', {
    username,
    password
  })
    .then(response => {
      setToken(response.data.token)
      return Promise.resolve()
    })
    .catch(function (error) {
      return Promise.reject(error)
    })
}

const loggedIn = () => {
  const token = getToken()
  return token && !isTokenExpired(token)
}

const isTokenExpired = (token) => {
  try {
    const decoded = decode(token)
    if (decoded.exp < Date.now() / 1000) {
      return true
    } else {
      return false
    }
  } catch (err) {
    return false
  }
}

const setToken = (idToken) => {
  if (!idToken) return
  localStorage.setItem('id_token', idToken)
}

const getToken = () => {
  return localStorage.getItem('id_token')
}

const logout = () => {
  localStorage.removeItem('id_token')
}

const getProfile = () => {
  return decode(this.getToken())
}

export const authService = {
  register,
  login,
  loggedIn,
  isTokenExpired,
  logout,
  getProfile
}
