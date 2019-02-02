import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function FormDialog (props) {
  const {
    open,
    onClose,
    title,
    content,
    form
  } = props
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      {title && <DialogTitle id="form-dialog-title">{title}</DialogTitle>}
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        {form}
      </DialogContent>
    </Dialog>
  )
}

FormDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.any,
  content: PropTypes.any,
  form: PropTypes.any
}
