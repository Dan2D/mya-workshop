import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { withStyles } from '@material-ui/core/styles'
import emilianoIcon from '../assets/Emiliano2.png'
import Popover from '@material-ui/core/Popover'
import { authService } from '../services'

const styles = theme => ({
  root: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: '0'
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  },
  userAvatar: {
    height: '60px',
    width: '60px',
    cursor: 'pointer',
    background: theme.palette.secondary.light,
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.15)',
      boxShadow: theme.custom.boxShadow,
      opacity: '.85'
    }
  }
})

class UserMenu extends Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  handleLogout = () => {
    let { history } = this.props
    this.handleClose()
    authService.logout()
    history.push('/')
  }

  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    const id = Boolean(anchorEl) && 'user-menu'

    return (
      <div className={classes.root}>
        <Avatar
          alt="User Menu"
          src={emilianoIcon}
          className={classes.userAvatar}
          aria-owns={id}
          aria-haspopup="true"
          onClick={this.handleClick}
        />
        <Popover
          id={id}
          open={Boolean(id)}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <Paper>
            <MenuList>
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
              <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
            </MenuList>
          </Paper>
        </Popover>
      </div>
    )
  }
}

UserMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object
}

export default withStyles(styles)(UserMenu)
