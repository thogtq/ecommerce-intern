import { Grid, makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartMenuItem from "./CartMenuItem";

const styles = makeStyles({
  root: {
    marginTop: "20px",
    width: "270px",
  },
  list: {
    backgroundColor: "#fbfbfb",
  },
  listItem: {
    maxHeight: "80px",
  },
  viewCart: {
    padding: "20px 0",
    color: "#ffa15f",
    fontFamily: "Montserrat-Bold",
    fontSize: "14px",
    lineHeight: "22px",
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
      //MenuListProps={{ onMouseLeave: handleClose }}
    >
      <MenuItem classes={{ root: classes.listItem }}>
        <CartMenuItem />
      </MenuItem>
      <hr className="line"></hr>
      <MenuItem classes={{ root: classes.listItem }}>
        <CartMenuItem />
      </MenuItem>
      <hr className="line"></hr>
      <MenuItem classes={{ root: classes.listItem }}>
        <CartMenuItem />
      </MenuItem>
      <Link to="/cart">
        <MenuItem classes={{ root: classes.viewCart }}>
          <Grid container justify="center" alignItems="center">
            View cart
          </Grid>
        </MenuItem>
      </Link>
    </Menu>
  );
}
