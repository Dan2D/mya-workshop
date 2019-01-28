import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  container: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  }
})

class PaperContainer extends Component {
  render () {
    const { children, classes } = this.props
    const { container, paper } = classes
    return (
      <div className={container}>
        <Paper className={paper}>
          {children}
        </Paper>
      </div>
    )
  }
}

PaperContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(PaperContainer)
