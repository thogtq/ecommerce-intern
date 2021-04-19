import { Fragment, useState } from "react";
import dropdownIcon from "assets/images/admin/icons/dropdown.svg";
import { MenuItem, Menu, makeStyles } from "@material-ui/core";
import ColorDot from "components/ColorDot";
const useStyles = makeStyles({
  root: {
    marginTop: "25px",
    width: "200px",
    padding: "16px",
  },
  list: {
    padding: "0",
    "& li": {
      textAlign: "center",
      font: "14px/20px Montserrat-Medium",
      color: "#3d3d3f",
    },
    //backgroundColor: "#fbfbfb",
  },
  listItem: {
    maxHeight: "80px",
  },
});

const ActionMenu = ({ anchorEl }) => {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = useState(null);
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  const handleMenuClick = (e) => {
    setAnchorMenu(e.target);
  };
  return (
    <Fragment>
      <span onClick={handleMenuClick}>
        Action<img src={dropdownIcon} alt="dropdown-icon"></img>
      </span>

      <Menu
        classes={{ paper: classes.root, list: classes.list }}
        open={Boolean(anchorMenu)}
        anchorEl={anchorMenu}
        onClose={handleCloseMenu}
        getContentAnchorEl={null}
        disableAutoFocusItem={true}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem disableGutters>
          <ColorDot color="#82bf11" />
          Mark as Completed
        </MenuItem>
        <MenuItem disableGutters>
          <ColorDot color="#f05d62" />
          Mart as Canceled
        </MenuItem>
      </Menu>
    </Fragment>
  );
};
export default ActionMenu;
