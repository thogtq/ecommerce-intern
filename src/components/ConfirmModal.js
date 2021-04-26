import { makeStyles, Modal } from "@material-ui/core";

const useStyles = makeStyles({
  modal: {
    position: "absolute",
    width: 380,
    backgroundColor: "#ffffff",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-100%)",
    boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.08)",
    padding: "24px",
    border: "none",
  },
});
export default function ConfirmModal({ open, setOpen, ...props }) {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      hideBackdrop
      disableScrollLock
      disablePortal
    >
      <div className={classes.modal}>{props.children}</div>
    </Modal>
  );
}
