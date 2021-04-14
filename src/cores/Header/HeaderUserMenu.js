import cartIcon from "assets/images/icons/cart.svg";
import LoginModal from "components/LoginModal";
import RegisterModal from "components/RegisterModal";
import React, { useState, useEffect } from "react";
import { isAuthenticated, logout } from "services/AuthService";
import { makeStyles, Menu, Avatar } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
import CartMenu from "./CartMenu";

const useStyles = makeStyles((theme) => ({
  avatar: {
    cursor: "pointer",
    height: "28px",
    width: "28px",
    border: "2px solid #ffa15f",
  },
  avatarMenu: {
    marginTop: "20px",
    boxShadow: "none",
    borderRadius: "0px",
    width: "181px",
  },
  avatarMenuList: {
    background: "#fbfbfb",
    border: "0.5px solid #eaeaea",
    "& li": {
      color: "#4d4d4d",
      fontFamily: "Montserrat-Medium",
      fontSize: "12px",
      lineHeight: "22px",
    },
  },
}));

const HeaderUserMenu = () => {
  const history = useHistory();
  const useQuery = new URLSearchParams(useLocation().search);
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
      setshowRegisterModal(false);
      setshowLoginModal(Boolean(open));
      useQuery.delete("login_modal");
      history.replace({ search: useQuery.toString() });
    }
  }, [useQuery, history]);
  const NotLoggedIn = () => {
    return (
      <React.Fragment>
        <button className="register-btn" onClick={toggleRegisterModal}>
          Register
        </button>
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
        <Link to="/cart" className="cart-btn">
          <img src={cartIcon} alt="cart"></img>
        </Link>
      </React.Fragment>
    );
  };
  const LoggedIn = () => {
    //Avatar
    const [anchorMenu, setAnchorMenu] = useState(null);
    const handleAvatarClick = (e) => {
      //Fix me
      setAnchorMenu(e.target);
    };
    const handleClose = (e) => {
      e.preventDefault();
      setAnchorMenu(null);
    };
    //Cart
    const [anchorCart, setAnchorCart] = useState(null);
    const handleCartClick = (e) => {
      setAnchorCart(e.target);
    };

    return (
      <React.Fragment>
        <Avatar
          aria-controls="user_menu"
          onClick={handleAvatarClick}
          //onMouseOver={handleAvatarClick}
          className={classes.avatar}
          alt="avatar"
          src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
        ></Avatar>
        <Menu
          classes={{ paper: classes.avatarMenu, list: classes.avatarMenuList }}
          id="user_menu"
          anchorEl={anchorMenu}
          open={Boolean(anchorMenu)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          disableAutoFocusItem={true}
        >
          <Link to="/user">
            <MenuItem>Account setting</MenuItem>
          </Link>
          <hr className="line"></hr>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        <img
          onClick={handleCartClick}
          //onMouseOver={handleCartClick}
          className="cart-btn"
          src={cartIcon}
          alt="cart"
        ></img>
        <CartMenu anchorEl={anchorCart} setAnchorEl={setAnchorCart} />
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
