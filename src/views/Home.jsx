import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { landingPageStyle } from '../styles/mainStyles'
import { authService } from '../services'
import Landing from './Landing'
import Authenticated from './Authenticated'

class Home extends Component {
  render () {
    let { classes } = this.props
    let loggedIn = authService.loggedIn()
    return (
      <div className={classes.container}>
        {loggedIn
          ? <Authenticated classes={classes} />
          : <Landing classes={classes} />}
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(landingPageStyle)(Home)
