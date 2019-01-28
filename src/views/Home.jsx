import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withSnackbar } from 'notistack'
import withStyles from '@material-ui/core/styles/withStyles'
import { authService } from '../services'
import Landing from './Landing'
import Authenticated from './Authenticated'
import AlertDialog from '../components/AlertDialog'

export const styles = theme => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(38,166,154,1) 30%, rgba(92,107,192,1) 70%)'
  }
})

class Home extends Component {
  state = {
    open: false,
    dialogProps: {
      title: '',
      message: ''
    }
  }

  componentDidMount () {
    const { location, enqueueSnackbar } = this.props
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
    const { classes, ...rest } = this.props
    const { open, dialogProps } = this.state
    const loggedIn = authService.loggedIn()
    return (
      <div className={classes.container}>
        <AlertDialog open={open} closeDialog={this.handleClose} {...dialogProps} />
        {loggedIn
          ? <Authenticated {...rest} />
          : <Landing {...rest} />}
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired
}

export default withSnackbar(withStyles(styles)(Home))
