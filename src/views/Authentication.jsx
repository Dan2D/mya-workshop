import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { LoginForm, RegistrationForm, Form } from '../components'
import { loginSchema, registrationSchema } from '../lib/formValidations'
import { authService } from '../services'
import { withSnackbar } from 'notistack'
import PaperContainer from '../components/PaperContainer'

class Authentication extends Component {
  state = {
    open: false,
    error: null
  };

  errorCallback = (error, actions) => {
    let { enqueueSnackbar } = this.props
    actions.setSubmitting(false)
    if (error.errors) {
      let { errors } = error
      errors.forEach(err => enqueueSnackbar(err.message, { variant: 'error' }))
    } else if (error.message) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  handleSubmit = (values, actions) => {
    let { registering, history } = this.props

    if (registering) {
      let { username, email, password } = values
      authService.register(username, email, password)
        .then(
          success => {
            actions.setSubmitting(false)
            history.push('/', { registered: true, email })
          },
          error => this.errorCallback(error, actions)
        )
    } else {
      let { username, password } = values
      authService.login(username, password)
        .then(
          () => {
            actions.setSubmitting(false)
            history.push('/')
          },
          error => this.errorCallback(error, actions)
        )
    }
  }

  render () {
    if (authService.loggedIn()) this.props.history.push('/')

    const { registering } = this.props
    const component = registering ? RegistrationForm : LoginForm
    let values = { name: '', email: '', password: '', confirmPass: '' }

    return (
      <PaperContainer>
        <Formik
          render={props => <Form component={component} {...props} />}
          initialValues={values}
          validationSchema={registering ? registrationSchema : loginSchema}
          onSubmit={this.handleSubmit}
        />
      </PaperContainer>
    )
  }
}

Authentication.propTypes = {
  registering: PropTypes.bool,
  history: PropTypes.any,
  enqueueSnackbar: PropTypes.func.isRequired
}

export default withSnackbar(Authentication)
