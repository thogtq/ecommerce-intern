import {
  Popper,
  Grow,
  Paper,
  MenuList,
  ClickAwayListener,
  makeStyles,
} from "@material-ui/core";
const styles = makeStyles({
  paper: {
    marginTop: "28px",
    boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.08)",
  },
});
export default function DropdownMenu(props) {
  const classes = styles();
  const anchorRef = props.anchorRef;
  const { open, setOpen, handleClose } = props;
  //   const [open, setOpen] = React.useState(false);
  //   const handleToggle = () => {
  //     setOpen((prevOpen) => !prevOpen);
  //   };

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "right top" : "right bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList classes={{ root: classes.paper }} id="menu-list-grow">
                {props.children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
