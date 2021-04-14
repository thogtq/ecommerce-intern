import { makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = makeStyles({
  root: {
    marginTop: "20px",
    width: "270px",
  },
  list: {
    backgroundColor: "#fbfbfb",
  },
  listItem: {
    height: "80px",
  },
});
export default function CartMenu({ cart, setCart, anchorEl, setAnchorEl }) {
  const classes = styles();
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  return (
    <Menu
      classes={{ paper: classes.root, list: classes.list }}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      disableAutoFocusItem={true}
    >
      <MenuItem classes={{ root: classes.listItem }}>Cart</MenuItem>
      <hr className="line"></hr>
      <MenuItem classes={{ root: classes.listItem }}>Cart</MenuItem>
      <hr className="line"></hr>
      <MenuItem classes={{ root: classes.listItem }}>Cart</MenuItem>
      <hr className="line"></hr>
      <MenuItem classes={{ root: classes.listItem }}>Cart</MenuItem>
      <hr className="line"></hr>
      <MenuItem classes={{ root: classes.listItem }}>Cart</MenuItem>
      <hr className="line"></hr>
        
      <Link to="/cart">
        <MenuItem classes={{ root: classes.listItem }}>View cart</MenuItem>
      </Link>
    </Menu>
  );
}
