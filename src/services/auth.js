import decode from 'jwt-decode'
import axios from 'axios'

const register = (username, email, password) => {
  console.log(username, email, password)
}

const login = (username, password) => {
  return axios.post('/user', {
    username,
    password
  })
    .then(response => {
      setToken(response.token)
      return Promise.resolve()
    })
    .catch(function (error) {
      return Promise.reject(error.message || (error.body && error.body.message))
    })
}

const loggedIn = () => {
  const token = getToken()
  return !!token && !isTokenExpired(token)
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
