import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useModals } from '@mattjennings/react-modal-stack';

const AlertDialog = ({
  open,
  onConfirm = () => {},
  title,
  text,
  cancelLabel,
  aceptLabel,
  blockClose = false,
}) => {
  const { closeModal } = useModals();

  if (!open) {
    return null;
  }

  const handleClose = () => {
    if(!blockClose) {
      closeModal();
    }
  };

  const handleAcept = () => {
    closeModal();
    onConfirm();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {cancelLabel && <Button onClick={handleClose}>{cancelLabel}</Button>}
        <Button onClick={handleAcept} autoFocus>
          {aceptLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
