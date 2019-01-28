import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import BannerLoader from '../components/BannerLoader'
import { authService } from '../services'
import { withSnackbar } from 'notistack'
import { Typography } from '@material-ui/core'
import { Formik } from 'formik'
import { object, string } from 'yup'
import ConfirmationForm from '../components/ConfirmationForm'
import Form from '../components/Form'
import PaperContainer from '../components/PaperContainer'

export const emailSchema = object({
  email: string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
})

class Verification extends Component {
  state = {
    pending: true,
    error: null,
    noToken: null
  }

  componentDidMount () {
    let { location, enqueueSnackbar } = this.props
    let params = new URLSearchParams(location.search)
    let token = params.get('token')
    if (token) {
      authService.verifyEmail(token)
        .then(
          () => this.setState({ pending: false }),
          error => {
            if (error.message) enqueueSnackbar(error.message, { variant: 'error' })
            this.setState({ pending: false, error: true })
          }
        )
    } else this.setState({ pending: false, noToken: true })
  }

  handleSubmit = (values, actions) => {
    let { enqueueSnackbar } = this.props

    let { email } = values
    authService.resendEmail(email)
      .then(
        success => {
          actions.setSubmitting(false)
          if (success.data && success.data.message) {
            enqueueSnackbar(success.data.message, { variant: 'success' })
          }
        },
        error => {
          actions.setSubmitting(false)
          if (error.message) enqueueSnackbar(error.message, { variant: 'error' })
        }
      )
  }

  render () {
    const { pending, noToken, error } = this.state

    if (pending) return <BannerLoader />
    if (noToken) return <Redirect to="/" />
    if (!error) this.props.history.push('/', { verified: true })

    let values = { email: '' }

    return (
      <PaperContainer>
        <Typography align="center" variant="h5">
          Looks like there was an issue...
        </Typography>
        <Typography align="center">
          {'We were unable to verify your email. Your link may have expired.'}
          {' Please re-enter your email address so we can try again.'}
        </Typography>
        <Formik
          render={props => <Form component={ConfirmationForm} {...props} />}
          initialValues={values}
          validationSchema={emailSchema}
          onSubmit={this.handleSubmit}
        />
      </PaperContainer>
    )
  }
}

Verification.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired
}

export default withSnackbar(Verification)
