import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link as RouterLink } from 'react-router-dom'

class Landing extends Component {
  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Typography align="center" variant="h5" className={classes.blurb}>
          Do you love&nbsp;
          <Typography inline className={classes.standout}>
            {"'"}Choose Your Own Adventure{"'"}
          </Typography>
          &nbsp;novels and games?{<br />}
          Do you have a story burning deep within you, waiting to be exposed to the world?{<br />}
          Whether you are here to play or create,&nbsp;
          <Typography inline className={classes.secondaryLogo}>
            Make
          </Typography>
          <Typography inline className={classes.primaryLogo}>
            Your
          </Typography>
          <Typography inline className={classes.secondaryLogo}>
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
      </React.Fragment>
    )
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired
}

export default Landing
