import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'
import { SnackbarProvider } from 'notistack'

/* Axios default configs */
axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`

axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    let response = error.response
    if (response && response.data) response = response.data
    else response = { message: 'An unexpected error occurred.' }
    return Promise.reject(response)
  }
)
/* Axios default configs end */

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
  },
  custom: {
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
        >
          <CloseIcon />
        </IconButton>
      ]}
    >
      <App />
    </SnackbarProvider>
  </MuiThemeProvider>,
  document.getElementById('root'))
registerServiceWorker()
