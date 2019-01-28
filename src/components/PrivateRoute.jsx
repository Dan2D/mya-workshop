import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { authService } from '../services'

class PrivateRoute extends Component {
  render () {
    let { component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={props =>
        authService.loggedIn
          ? <Component {...props} />
          : <Redirect to="/" />
      } />
    )
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  user: PropTypes.object
}

export default PrivateRoute
