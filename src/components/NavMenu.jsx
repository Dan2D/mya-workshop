import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  listItem: {
    paddingLeft: '22px'
  }
})

class NavMenu extends Component {
  render () {
    const { classes, toggleBtn } = this.props
    return (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {toggleBtn}
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleBtn: PropTypes.object
}

export default withStyles(styles)(NavMenu)
