import {
  Avatar,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import mailIcon from "assets/images/admin/icons/mail.svg";
import notiIcon from "assets/images/admin/icons/notification.svg";
import dropdownIcon from "assets/images/admin/icons/dropdown.svg";
import LogoutIcon from "assets/images/icons/logout.svg";
import ProfileIcon from "assets/images/icons/profile.svg";
import { Link } from "react-router-dom";
import { logout } from "services/AuthService";
const useStyles = makeStyles({
  root: {
    width: "153px",
  },
  menuIcon: {
    marginRight: "12px",
  },
  menuItem: {
    "& span": {
      font: "14px/20px Montserrat-Medium",
      color: "#3d3d3f",
    },
  },
});
export default function AdminMenu() {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = useState(null);
  const openAdminMenu = (e) => {
    setAnchorMenu(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorMenu(null);
  };
  const handleAdminLogout = () => {
    logout(true);
  };
  return (
    <Grid item md>
      <Grid
        className="admin-header-menu"
        container
        justify="flex-end"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <Grid className="admin-menu-group" container alignItems="center">
            <Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"></Avatar>
            <span onClick={openAdminMenu} className="admin-name">
              admin@gmail.com
            </span>
            <img src={dropdownIcon} alt="dropdown-icon"></img>
            <Menu
              classes={{ paper: classes.root }}
              open={Boolean(anchorMenu)}
              onClose={handleMenuClose}
              anchorEl={anchorMenu}
              getContentAnchorEl={null}
              disableAutoFocusItem={true}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <MenuItem classes={{ root: classes.menuItem }}>
                <img
                  className={classes.menuIcon}
                  src={ProfileIcon}
                  alt="profile-icon"
                ></img>
                <Link to="/user">View profile</Link>
              </MenuItem>
              <MenuItem classes={{ root: classes.menuItem }}>
                <img
                  className={classes.menuIcon}
                  src={LogoutIcon}
                  alt="logout-icon"
                ></img>
                <Link to="#" onClick={handleAdminLogout}>
                  Logout
                </Link>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Grid item>
          <img src={mailIcon} alt="mail-icon"></img>
        </Grid>
        <Grid item>
          <img src={notiIcon} alt="noti-icon"></img>
        </Grid>
      </Grid>
    </Grid>
  );
}
