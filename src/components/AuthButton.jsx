import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter, Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { authService } from '../services'
import { authButtonStyle } from '../styles/mainStyles'
import withStyles from '@material-ui/core/styles/withStyles'
import UserMenu from './UserMenu'

class AuthButton extends Component {
  render () {
    let loggedIn = authService.loggedIn()
    let { classes, history } = this.props
    return (
      <React.Fragment>
        {loggedIn
          ? <UserMenu history={history} />
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
