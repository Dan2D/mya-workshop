import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { landingPageStyle } from '../styles/mainStyles'
import { authService } from '../services'
import Landing from './Landing'
import Authenticated from './Authenticated'
import AlertDialog from '../components/AlertDialog'
import { withSnackbar } from 'notistack'

class Home extends Component {
  state = {
    open: false,
    dialogProps: {
      title: '',
      message: ''
    }
  }

  componentDidMount () {
    let { location, enqueueSnackbar } = this.props
    if (location.state) {
      if (location.state.registered) {
        this.showAlert({
          title: 'Registration Successful!',
          message: `We've emailed a confirmation 
        link to ${location.state.email}. You should 
        receive it soon.`
        })
      } else if (location.state.verified) {
        enqueueSnackbar('Your email has been successfully verified!', { variant: 'success' })
      }
    }
  }

  showAlert = (dialogProps) => {
    this.setState({
      open: true,
      dialogProps
    })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    let { classes } = this.props
    let { open, dialogProps } = this.state
    let loggedIn = authService.loggedIn()
    return (
      <div className={classes.container}>
        <AlertDialog open={open} closeDialog={this.handleClose} {...dialogProps} />
        {loggedIn
          ? <Authenticated classes={classes} />
          : <Landing classes={classes} />}
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired
}

export default withSnackbar(withStyles(landingPageStyle)(Home))
