import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AuthForm } from '../components'

class Authentication extends Component {
  render () {
    let { registering } = this.props

    return (
      <div>
        <AuthForm registering={registering} />
      </div>
    )
  }
}

Authentication.propTypes = {
  registering: PropTypes.bool
}

export default Authentication
