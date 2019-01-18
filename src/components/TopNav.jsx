import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import withStyles from '@material-ui/core/styles/withStyles'
import AuthButton from './AuthButton'

const styles = theme => ({
  root: {
    paddingTop: '12px',
    paddingBottom: '12px',
    minHeight: '88px'
  },
  progress: {
    flexGrow: 1
  }
})

class TopNav extends Component {
  render () {
    const { classes, loading } = this.props
    return (
      <React.Fragment>
        <AppBar position="fixed" color="default" className={classes.root}>
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
        <Toolbar className={classes.root} /> {/* Shim */}
        {loading && <div className={classes.progress}><LinearProgress /></div>}
      </React.Fragment>
    )
  }
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool
}

export default withStyles(styles)(TopNav)
