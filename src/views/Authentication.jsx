import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AuthForm } from '../components'
import { authService } from '../services'

class Authentication extends Component {
  render () {
    if (authService.loggedIn()) this.props.history.push('/')
    let { registering } = this.props

    return (
      <div>
        <AuthForm registering={registering} />
      </div>
    )
  }
}

Authentication.propTypes = {
  registering: PropTypes.bool,
  history: PropTypes.any
}

export default Authentication
