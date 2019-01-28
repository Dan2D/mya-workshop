import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  gridContainer: {
    height: '100%'
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '1rem',
    overflow: 'hidden',
    '@media (max-width: 972px)': {
      '& p': {
        marginBottom: '4rem'
      }
    },
    '&:hover': {
      background: theme.palette.secondary.dark,
      '& h3': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.07)'
      },
      '& p': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.07)'
      },
      '& button': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.07)'
      }
    }
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '1rem',
    overflow: 'hidden',
    '&:hover': {
      background: theme.palette.primary.dark,
      '& h3': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.05)'
      },
      '& p': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.05)'
      },
      '& button': {
        color: '#ffffff',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1.05)'
      }
    }
  },
  gridHeader: {
    marginBottom: '1rem'
  },
  gridBlurb: {
    marginBottom: '5rem'
  },
  gridButton: {
    display: 'block',
    margin: '0 auto 10rem auto'
  }
})

class Authenticated extends Component {
  render () {
    const { classes, history } = this.props
    return (
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} sm={6} className={classes.leftCol}>
          <Typography align="center" variant="h3" className={classes.gridHeader}>
            Marketplace
          </Typography>
          <Typography align="center" variant="body1" className={classes.gridBlurb}>
            Discover adventures made by users like you in the Marketplace
          </Typography>
          <Button
            className={classes.gridButton}
            color="primary"
            size="large"
            variant="contained"
            disableRipple
          >
            Explore
          </Button>
        </Grid>
        <Grid
          item xs={12}
          sm={6}
          className={classes.rightCol}
          onClick={() => history.push('/workshop')}
        >
          <Typography align="center" variant="h3" className={classes.gridHeader}>
            Workshop
          </Typography>
          <Typography align="center" variant="body1" className={classes.gridBlurb}>
            Bring your adventures to life in the Workshop
          </Typography>
          <Button
            className={classes.gridButton}
            color="secondary"
            size="large"
            variant="contained"
            disableRipple
          >
            Create
          </Button>
        </Grid>
      </Grid>
    )
  }
}

Authenticated.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withStyles(styles)(Authenticated)
