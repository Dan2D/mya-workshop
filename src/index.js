import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`

axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#5c6bc0'
    },
    secondary: {
      main: '#26a69a'
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'))
registerServiceWorker()
