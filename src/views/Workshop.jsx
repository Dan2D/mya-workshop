import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import batman from '../assets/b-man-funny.jpg'
import { adventureService } from '../services/adventures'

const styles = theme => ({
  container: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
    padding: '.5rem',
    margin: '0',
    background: theme.palette.grey[300]
  },
  card: {
    minWidth: '300px',
    maxWidth: '400px'
    // maxHeight: '350px'
  },
  media: {
    height: '200px'
  },
  /* Mult-line truncaton is a pain in the ass */
  description: {
    overflow: 'hidden',
    position: 'relative',
    lineHeight: '1.2em',
    maxHeight: '3.5em',
    textAlign: 'justify',
    paddingRight: '1em',
    '&::before': {
      content: '"..."',
      position: 'absolute',
      right: 0,
      bottom: 0
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      right: 0,
      width: '1em',
      height: '1em',
      marginTop: '0.2em',
      background: '#fff'
    }
  },
  tag: {
    maxWidth: 100,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    '& span': {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  tip: {
    background: '#000'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 3,
    right: theme.spacing.unit * 5
  },
  extendedIcon: {
    marginRight: theme.spacing.unit / 2
  }
})

const adventures = []

class Workshop extends Component {
  state = {
    dialogProps: {
      open: false,
      onSubmit: adventureService.create()
    }
  }

  openModal = () => {
    const { dialogProps } = this.state
    this.setState({
      dialogProps: { ...dialogProps, open: true }
    })
  }

  closeModal = () => {
    const { dialogProps } = this.state
    this.setState({
      dialogProps: { ...dialogProps, open: false }
    })
  }

  render () {
    const { classes } = this.props

    for (let i = 0; i < 47; i++) {
      adventures.push({
        id: i + 1,
        name: `Adventure - ${i}`,
        description: `This is a random description for Adventure - ${i}
        I am hoping it gets cut off before making everything wayyyyy to big...
        I need way more text to go here and I need to see how well this works
        I wonder if it will?? Can this work with so much text? I just don't know`,
        image: batman,
        tags: ['Val1', 'Val2', 'Value3', 'Big Value Tag With Lots of Text and Stuff']
      })
    }

    return (
      <Grid container className={classes.container} spacing={32}>
        {adventures.map(adv => (
          <Grid item xs key={adv.id}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia className={classes.media} image={adv.image} />
                <CardContent>
                  <Typography variant="h6">
                    {adv.name}
                  </Typography>
                  <Typography component="p" className={classes.description}>
                    {adv.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {adv.tags.map(tag => (
                  <Tooltip
                    title={tag}
                    key={`${adv.id}-${tag}`}
                    classes={{ tooltip: classes.tip }}
                  >
                    <Chip
                      label={tag}
                      onClick={() => alert(`${tag} clicked!`)}
                      className={classes.tag}
                    />
                  </Tooltip>
                ))}
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Fab
          color="primary"
          variant="extended"
          aria-label="Add"
          className={classes.fab}
          onClick={this.openModal}
        >
          <AddIcon className={classes.extendedIcon} />
          Create New
        </Fab>
      </Grid>
    )
  }
}

Workshop.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Workshop)
