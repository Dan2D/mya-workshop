import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { authService } from '../services'
import { authButtonStyle } from '../styles/mainStyles'
import withStyles from '@material-ui/core/styles/withStyles'

class AuthButton extends Component {
  render () {
    let loggedIn = authService.loggedIn()
    let { classes, history } = this.props
    return (
      <React.Fragment>
        {loggedIn
          ? <Button
            color="inherit"
            className={classes.login}
            onClick={() => {
              authService.logout()
              history.push('/')
            }}
          >
            Logout
          </Button>
          : <Button
            color="inherit"
            className={classes.login}
            component={RouterLink}
            to="/login"
          >
            Login
          </Button>
        }
      </React.Fragment>
    )
  }
}

AuthButton.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.any.isRequired
}

export default withRouter(withStyles(authButtonStyle)(AuthButton))
