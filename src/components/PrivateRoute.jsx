import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends Component {
  render () {
    let { component: Component, user, ...rest } = this.props

    // TODO: Fix private route condition
    return (
      <Route {...rest} render={(props) => {
        return user
          ? (user.isCoreSuperUser
            ? <Component {...props} />
            : <Redirect to="/access-denied" />)
          : <Redirect to="/login" />
      }} />
    )
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  user: PropTypes.object
}

export default PrivateRoute
