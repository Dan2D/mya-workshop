import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

function Register (props) {
  const {
    values: { username, email, password, confirmPass },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched,
    classes
  } = props

  const change = (name, e) => {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="username"
          name="username"
          helperText={touched.username ? errors.username : ''}
          error={touched.username && Boolean(errors.username)}
          label="Username"
          value={username}
          onChange={change.bind(null, 'username')}
          fullWidth
          margin="normal"
          autoFocus
        />
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
        <TextField
          id="password"
          name="password"
          type="password"
          helperText={touched.password ? errors.password : ''}
          error={touched.password && Boolean(errors.password)}
          label="Password"
          value={password}
          onChange={change.bind(null, 'password')}
          fullWidth
          margin="normal"
        />
        <TextField
          id="confirmPass"
          name="confirmPass"
          type="confirmPass"
          helperText={touched.confirmPass ? errors.confirmPass : ''}
          error={touched.confirmPass && Boolean(errors.confirmPass)}
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={change.bind(null, 'confirmPass')}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!isValid}
        >
          Register
        </Button>
      </form>
      <span className="register-footer">
        Already registered? <Link component={RouterLink} to="/login">Login here.</Link>
      </span>
    </React.Fragment>
  )
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  setFieldTouched: PropTypes.func.isRequired
}

export default Register
