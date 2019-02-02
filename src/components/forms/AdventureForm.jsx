import React from 'react'
import PropTypes from 'prop-types'
import Formik from 'formik'
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
import { adventureSchema } from '../../lib/formValidations'

function AdventureForm(props) {
  const {
    classes,
    closeModal
  } = props

  const values = {
    name: '',
    description: '',
    nsfw: false
  }

  return (
    <Formik
      initialValues={values}
      validationSchema={adventureSchema}
      onSubmit={this.handleSubmit}
    >
      {({
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
        isValid,
        values: { name, description, nsfw }
      }) => (
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="name"
            name="name"
            helperText={touched.name ? errors.name : ''}
            error={touched.name && Boolean(errors.name)}
            label="Username/Email"
            value={name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            autoFocus
          />
          <TextField
            id="description"
            name="description"
            helperText={touched.description ? errors.description : ''}
            error={touched.description && Boolean(errors.description)}
            label="Password"
            type="description"
            value={description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows="3"
          />
          <FormControlLabel
            control={<Checkbox value={nsfw} color="primary" />}
            label="NSFW?"
          />
          <div className={classes.wrapper}>
            {closeModal &&
            <Button
              type="button"
              variant="contained"
              color="default"
              className={classes.cancel}
              onClick={closeModal}
              disabled={!isValid || isSubmitting}
            >
              Cancel
            </Button>
            }
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!isValid || isSubmitting}
            >
              Create
            </Button>
            {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
          </div>
        </form>
      )}
    </Formik>
  )
}

AdventureForm.propTypes = {
  classes: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool,
  setFieldTouched: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  closeModal: PropTypes.func
}

export default AdventureForm
