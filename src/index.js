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
