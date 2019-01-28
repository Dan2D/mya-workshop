import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import NavMenu from './NavMenu'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    boxShadow: '10px 0px 5px -9px rgba(0,0,0,0.25)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    boxShadow: '10px 0px 5px -9px rgba(0,0,0,0.25)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toggle: {
    paddingLeft: '22px'
  }
})

class SideNav extends React.Component {
  state = {
    open: true
  }

  toggleDrawer = () => {
    const { open } = this.state
    this.setState({
      open: !open
    })
  }

  render () {
    const { classes, location } = this.props
    /* Don't render if we're not in the workshop or marketplace */
    if (!location.pathname.includes('workshop')) return null
    const { open } = this.state

    const toggleBtn = (
      <ListItem
        button
        key="toggleBtn"
        onClick={this.toggleDrawer}
        className={classes.toggle}
      >
        <ListItemIcon>{open ? <ChevronLeftIcon /> : <MenuIcon />}</ListItemIcon>
      </ListItem>
    )

    return (
      <div className={classes.root}>
        <nav className={classes.drawer}>
          <Hidden xsDown implementation="css">
            <Drawer
              variant="permanent"
              className={classNames(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })}
              classes={{
                paper: classNames({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                })
              }}
              open={open}
            >
              <NavMenu toggleBtn={toggleBtn} />
            </Drawer>
          </Hidden>
        </nav>
      </div>
    )
  }
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  location: PropTypes.object
}

export default withRouter(withStyles(styles)(SideNav))
