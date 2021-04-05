import cartIcon from "../files/images/icons/cart.svg";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import React, { useState, useEffect } from "react";
import { isAuthenticated, logout } from "../auth";
import { makeStyles, Menu, Avatar } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "28px",
    width: "28px",
    border: "2px solid #ffa15f",
  },
  avatarMenu: {
    "& div:nth-child(3)": {
      boxShadow: "none",
      borderRadius: "0px",
      width: "181px",
      left: "unset!important",
      right: "0!important",
      marginRight: "180px",
    },
    "& li": {
      color: "#4d4d4d",
      fontFamily: "Montserrat-Medium",
      fontSize: "12px",
      lineHeight: "22px",
    },
    "& ul": {
      background: "#fbfbfb",
      border: "0.5px solid #eaeaea",
    },
  },
}));
const HeaderUserMenu = () => {
  const useQuery = new URLSearchParams(useLocation().search);
  const history = useHistory();

  const classes = useStyles();
  const [isLoggedIn, setLoggedIn] = useState(isAuthenticated());
  const handleLogout = () => {
    setLoggedIn(false);
    logout();
  };
  const [showLoginModal, setshowLoginModal] = useState(false);
  const toggleLoginModal = () => {
    setshowLoginModal(!showLoginModal);
  };
  const [showRegisterModal, setshowRegisterModal] = useState(false);
  const toggleRegisterModal = () => {
    setshowRegisterModal(!showRegisterModal);
  };
  useEffect(() => {
    if (useQuery.has("login_modal")) {
      let open = useQuery.get("login_modal");
      setshowLoginModal(Boolean(open));
      useQuery.delete("login_modal");
      history.replace({ search: useQuery.toString() });
    }
  });
  const NotLoggedIn = () => {
    return (
      <React.Fragment>
        <a className="register-btn" href="#" onClick={toggleRegisterModal}>
          Register
        </a>
        <RegisterModal
          show={showRegisterModal}
          toggleModal={toggleRegisterModal}
        />
        <button className="login-btn" onClick={toggleLoginModal}>
          Login
        </button>
        <LoginModal
          setLoggedIn={setLoggedIn}
          show={showLoginModal}
          toggleModal={toggleLoginModal}
        />
        <a className="cart-btn" href="#">
          <img src={cartIcon}></img>
        </a>
      </React.Fragment>
    );
  };
  const LoggedIn = () => {
    const [anchorMenu, setAnchorMenu] = useState(null);
    const handleAvatarClick = (e) => {
      e.preventDefault();
      setAnchorMenu(document.getElementById("category_nav"));
    };
    const handleClose = (e) => {
      e.preventDefault();
      setAnchorMenu(null);
    };
    return (
      <React.Fragment>
        <a href="" onClick={handleAvatarClick} aria-controls="user_menu">
          <Avatar
            className={classes.avatar}
            alt="avatar"
            src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
          ></Avatar>
        </a>
        <Menu
          className={classes.avatarMenu}
          id="user_menu"
          anchorEl={anchorMenu}
          open={Boolean(anchorMenu)}
          onClose={handleClose}
        >
          <MenuItem>
            <Link to="/user">Account setting</Link>
          </MenuItem>
          <hr className="line"></hr>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <a className="cart-btn" href="#">
          <img src={cartIcon}></img>
        </a>
      </React.Fragment>
    );
  };
  return (
    <div className="header-menu">
      {isLoggedIn ? <LoggedIn /> : <NotLoggedIn />}
    </div>
  );
};
export default HeaderUserMenu;
