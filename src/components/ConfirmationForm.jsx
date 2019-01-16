import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import CircularProgress from '@material-ui/core/CircularProgress'

function ConfirmationForm (props) {
  const {
    values: { email },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    isSubmitting,
    classes
  } = props

  const change = (name, e) => {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }

  return (
    <React.Fragment>
      <div className={classes.header}>
        <Avatar className={classes.avatar}>
          <EmailIcon />
        </Avatar>
        <Typography inline component="h1" variant="h5">
          Resend Confirmation Email
        </Typography>
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="email"
          name="email"
          type="email"
          helperText={touched.email ? errors.email : ''}
          error={touched.email && Boolean(errors.email)}
          label="Email"
          value={email}
          onChange={change.bind(null, 'email')}
          fullWidth
          margin="normal"
        />
        <div className={classes.wrapper}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!isValid || isSubmitting}
          >
            Resend Email
          </Button>
          {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </form>
    </React.Fragment>
  )
}

ConfirmationForm.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  setFieldTouched: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool
}

export default ConfirmationForm
