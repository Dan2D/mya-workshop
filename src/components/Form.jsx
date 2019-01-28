import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import green from '@material-ui/core/colors/green'

const styles = theme => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  wrapper: {
    position: 'relative'
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -12
  },
  loginLinks: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    fontSize: '14px'
  },
  registerFooter: {
    fontSize: '14px'
  }
})

class Form extends Component {
  render () {
    const { component: Comp, ...rest } = this.props
    return (
      <Comp {...rest} />
    )
  }
}

Form.propTypes = {
  component: PropTypes.func.isRequired
}

export default withStyles(styles)(Form)
