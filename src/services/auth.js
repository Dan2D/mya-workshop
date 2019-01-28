import decode from 'jwt-decode'
import axios from 'axios'

const rootPath = '/auth'

const register = (username, email, password) => {
  return axios.post('/users', {
    username,
    email,
    password
  })
    .then(response => {
      setToken(response.data.token)
      return Promise.resolve()
    })
    .catch(error => Promise.reject(error))
}

const login = (username, password) => {
  return axios.post(rootPath, {
    username,
    password
  })
    .then(response => {
      setToken(response.data.token)
      return Promise.resolve()
    })
    .catch(error => Promise.reject(error))
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
    console.error(err)
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

const verifyEmail = (token) => {
  return axios.post(`${rootPath}/verify`, {
    token
  })
    .then(() => Promise.resolve())
    .catch(error => Promise.reject(error))
}

const resendEmail = (email) => {
  return axios.post(`${rootPath}/confirm-token`, {
    email
  })
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error))
}

export const authService = {
  register,
  login,
  loggedIn,
  isTokenExpired,
  logout,
  getProfile,
  verifyEmail,
  resendEmail
}
