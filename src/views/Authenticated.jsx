import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

class Authenticated extends Component {
  render () {
    const { classes } = this.props
    return (
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={6} className={classes.leftCol}>
          <Typography align="center" variant="h3" className={classes.gridHeader}>Marketplace</Typography>
          <Typography align="center" variant="body1" className={classes.gridBlurb}>Discover adventures made by users like you in the Marketplace</Typography>
          <Button className={classes.gridButton} color="primary" size="large" variant="contained" disableRipple>Explore</Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.rightCol}>
          <Typography align="center" variant="h3" className={classes.gridHeader}>Workshop</Typography>
          <Typography align="center" variant="body1" className={classes.gridBlurb}>Bring your adventures to life in the Workshop</Typography>
          <Button className={classes.gridButton} color="secondary" size="large" variant="contained" disableRipple>Create</Button>
        </Grid>
      </Grid>
    )
  }
}

Authenticated.propTypes = {
  classes: PropTypes.object.isRequired
}

export default Authenticated
