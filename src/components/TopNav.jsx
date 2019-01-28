import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink, withRouter } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import withStyles from '@material-ui/core/styles/withStyles'
import AuthButton from './AuthButton'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import MobileNav from './MobileNav'

const styles = theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1
  },
  progress: {
    flexGrow: 1
  }
})

class TopNav extends Component {
  state = {
    open: false
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render () {
    const { classes, loading } = this.props
    const { open } = this.state
    return (
      <React.Fragment>
        <AppBar position="fixed" color="default" className={classes.root}>
          <Toolbar>
            <Hidden smUp implementation="css">
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <MobileNav open={open} onClose={this.handleDrawerToggle} />
            </Hidden>
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
        {loading && <div className={classes.progress}><LinearProgress /></div>}
      </React.Fragment>
    )
  }
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool
}

export default withRouter(withStyles(styles)(TopNav))
