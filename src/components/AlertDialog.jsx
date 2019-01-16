import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

function Transition (props) {
  return <Slide direction="down" {...props} />
}

class AlertDialog extends Component {
  render () {
    return (
      <Dialog
        open={this.props.open}
        TransitionComponent={Transition}
        onClose={this.props.closeDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {this.props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {this.props.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.closeDialog} color="primary">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

AlertDialog.propTypes = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string
}

export default AlertDialog
