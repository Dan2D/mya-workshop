import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import { authFormStyle } from '../styles/formStyles'
import Paper from '@material-ui/core/Paper'
import Snackbar from '@material-ui/core/Snackbar'
import withStyles from '@material-ui/core/styles/withStyles'
import { loginSchema, registrationSchema } from '../lib/formValidations'
import { authService } from '../services'
import SnackbarWrapper from './SnackbarWrapper'

class AuthForm extends Component {
  state = {
    open: false,
    error: null
  };

  handleClick = () => {
    this.setState({ open: true })
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ open: false })
  }

  handleSubmit = (values, actions) => {
    let { registering } = this.props
    if (registering) {
      let { username, email, password } = values
      authService.register(username, email, password)
    } else {
      let { username, password } = values
      authService.login(username, password)
        .then(
          () => {},
          error => {
            actions.setSubmitting(false)
            this.setState({ error, open: true })
          }
        )
    }
  }

  render () {
    let { registering, classes } = this.props
    let { open, error } = this.state
    let Form = registering ? RegistrationForm : LoginForm
    let values = { name: '', email: '', password: '', confirmPass: '' }

    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Formik
            render={props => <Form {...props} classes={classes} />}
            initialValues={values}
            validationSchema={registering ? registrationSchema : loginSchema}
            onSubmit={this.handleSubmit}
          />
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <SnackbarWrapper
            onClose={this.handleClose}
            variant="error"
            message={error}
          />
        </Snackbar>
      </div>
    )
  }
}

AuthForm.propTypes = {
  registering: PropTypes.bool,
  classes: PropTypes.object.isRequired
}

export default withStyles(authFormStyle)(AuthForm)
