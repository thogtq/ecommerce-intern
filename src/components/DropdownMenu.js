import { Popper, Grow, Paper, MenuList, ClickAwayListener } from "@material-ui/core";

export default function DropdownMenu(props) {
  const anchorRef = props.anchorRef;
  const { open, setOpen,handleClose } = props;
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
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu-list-grow">
                {props.children}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}
