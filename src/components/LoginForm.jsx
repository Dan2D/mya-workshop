import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import LockIcon from '@material-ui/icons/LockOutlined'
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'

function Login (props) {
  const {
    values: { username, password },
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
      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="username"
          name="username"
          helperText={touched.username ? errors.username : ''}
          error={touched.username && Boolean(errors.username)}
          label="Username/Email"
          value={username}
          onChange={change.bind(null, 'username')}
          fullWidth
          margin="normal"
          autoFocus
        />
        <TextField
          id="password"
          name="password"
          helperText={touched.password ? errors.password : ''}
          error={touched.password && Boolean(errors.password)}
          label="Password"
          type="password"
          value={password}
          onChange={change.bind(null, 'password')}
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
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
            Login
          </Button>
          {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </form>
      <span className="login-links">
        <Link component="button" onClick={() => console.log('clicked')}>Forgot your password?</Link>
        <Link component={RouterLink} to="/register">Register</Link>
      </span>
    </React.Fragment>
  )
}

Login.propTypes = {
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

export default Login
