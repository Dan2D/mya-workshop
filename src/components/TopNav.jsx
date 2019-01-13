import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import { topNavStyle } from '../styles/mainStyles'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

class TopNav extends Component {
  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
            >
              <Typography inline variant="h6" color="secondary">
                Make
              </Typography>
              <Typography inline variant="h6" color="primary">
                Your
              </Typography>
              <Typography inline variant="h6" color="secondary">
                Adventure
              </Typography>
            </Link>
            <Button
              color="inherit"
              className={classes.login}
              component={RouterLink}
              to="/login"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Shim */}
      </React.Fragment>
    )
  }
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(topNavStyle)(TopNav)
