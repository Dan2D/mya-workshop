import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import AuthButton from './AuthButton'

class TopNav extends Component {
  render () {
    return (
      <React.Fragment>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Link
              component={RouterLink}
              to="/"
              underline="none"
            >
              <Typography inline variant="h5" color="secondary">
                Make
              </Typography>
              <Typography inline variant="h5" color="primary">
                Your
              </Typography>
              <Typography inline variant="h5" color="secondary">
                Adventure
              </Typography>
            </Link>
            <AuthButton />
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Shim */}
      </React.Fragment>
    )
  }
}

export default TopNav
