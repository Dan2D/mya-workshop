import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import NavMenu from './NavMenu'

const drawerWidth = 240

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth
  }
})

class MobileNav extends Component {
  render () {
    const { classes, open, onClose } = this.props

    return (
      <Fragment>
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={onClose}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <NavMenu />
        </Drawer>
      </Fragment>
    )
  }
}

MobileNav.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
}

export default withStyles(styles)(MobileNav)
