import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import React from "react";
export default function ConfirmBox({
  openConfirm,
  setOpenConfirm,
  onConfirm,
  content,
}) {
  const handleConfirm = () => {
    onConfirm();
    setOpenConfirm(false);
  };
  const handleCloseBox = () => {
    setOpenConfirm(false);
  };
  return (
    <Dialog
      open={Boolean(openConfirm)}
      onClose={handleCloseBox}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm action"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseBox} color="primary">
          No
        </Button>
        <Button onClick={handleConfirm} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
