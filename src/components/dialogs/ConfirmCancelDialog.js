import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Stack,
} from '@mui/material';
import { useModals } from '@mattjennings/react-modal-stack';
import Iconify from '@/components/Iconify';

const ConfirmCancelDialog = ({
  open,
  onConfirm = () => {},
  onCancel = () => {},
  title,
  text,
  aceptLabel,
  cancelLabel,
  blockClose = false,
}) => {
  const { closeModal } = useModals();

  if (!open) {
    return null;
  }

  const handleClose = () => {
    if (!blockClose) {
      closeModal();
    }
  };

  const handleAcept = () => {
    closeModal();
    onConfirm();
  };

  const handleCancel = () => {
    closeModal();
    onCancel();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box
        sx={{
          '& .MuiDialogActions-root': {
            paddingTop: 0,
          },
        }}
      >
        <Box
          sx={{
            mr: 2,
            mt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              'width': '20px',
              'height': '20px',
              'display': 'flex',
              'alignItems': 'center',
              'justifyContent': 'center',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            onClick={handleClose}
          >
            <Iconify
              width={16}
              height={16}
              icon={'material-symbols:close'}
              sx={{ color: (theme) => theme.palette.grey[800] }}
            />
          </Box>
        </Box>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent sx={{ mt: 2 }}>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: '12px' }}
          >
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ paddingTop: '0px' }}>
          <Button variant="default" onClick={handleCancel} autoFocus fullWidth>
            {cancelLabel}
          </Button>
          <Button variant="contained" onClick={handleAcept} autoFocus fullWidth>
            {aceptLabel}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default ConfirmCancelDialog;
