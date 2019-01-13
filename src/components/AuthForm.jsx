import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import * as Yup from 'yup'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import { styles } from '../styles/materialStyles'
import Avatar from '@material-ui/core/Avatar'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import '../styles/Auth.css'

const validationSchema = Yup.object({
  username: Yup.string('Enter a username')
    .required('Username is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('')
    .min(8, 'Password must contain at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
})

class AuthForm extends Component {
  render () {
    let { registering, classes } = this.props
    let Form = registering ? RegistrationForm : LoginForm
    let title = registering ? 'Register' : 'Login'
    const values = { name: '', email: '', password: '', confirmPass: '' }

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          {!registering && <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>}
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Formik
            render={props => <Form {...props} classes={classes} />}
            initialValues={values}
            validationSchema={validationSchema}
          />
        </Paper>
      </main>
    )
  }
}

AuthForm.propTypes = {
  registering: PropTypes.bool,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AuthForm)
