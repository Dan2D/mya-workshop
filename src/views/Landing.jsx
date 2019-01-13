import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { landingPageStyle } from '../styles/mainStyles'
import { Link as RouterLink } from 'react-router-dom'

class Landing extends Component {
  render () {
    let { classes } = this.props
    return (
      <div className={classes.container}>
        <Typography align="center" variant="h5" className={classes.blurb}>
          Do you love&nbsp;
          <Typography inline className={classes.standout}>
            {"'"}Choose Your Own Adventure{"'"}
          </Typography>
          &nbsp;novels and games?{<br/>}
          Do you have a story burning deep within you, waiting to be exposed to the world?{<br/>}
          Whether you are here to play or create,&nbsp;
          <Typography inline color="secondary" className={classes.logo}>
            Make
          </Typography>
          <Typography inline color="primary" className={classes.logo}>
            Your
          </Typography>
          <Typography inline color="secondary" className={classes.logo}>
            Adventure
          </Typography>
          &nbsp;is your portal to endless adventure.
        </Typography>
        <div className={classes.buttons}>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            className={classes.button}
            component={RouterLink}
            to="/about"
          >
            Learn More
          </Button>
          <Button
            color="primary"
            size="large"
            variant="contained"
            className={classes.button}
            component={RouterLink}
            to="/register"
          >
            Start your adventure
          </Button>
        </div>
      </div>
    )
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(landingPageStyle)(Landing)
