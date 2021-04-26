import cartIcon from "assets/images/icons/cart.svg";
import LoginModal from "cores/LoginModal/LoginModal";
import RegisterModal from "cores/RegisterModal/RegisterModal";
import React, { useState, useEffect, useContext } from "react";
import { logout } from "services/AuthService";
import { makeStyles, Menu, Avatar, Badge } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
import CartMenu from "./CartMenu";
import { AuthContext, CartContext } from "contexts/context";

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
  cartBadge: {
    backgroundColor: "#ffa15f",
    color: "#ffffff",
  },
}));

const HeaderUserMenu = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const history = useHistory();
  const useQuery = new URLSearchParams(useLocation().search);
  const classes = useStyles();
  const handleLogout = () => {
    logout();
    authDispatch({ type: "LOGOUT" });
    //history.go(0);
  };
  const [showLoginModal, setshowLoginModal] = useState(false);
  const toggleLoginModal = () => {
    if (showLoginModal) {
      authDispatch({ type: "DEFAULT" });
    }
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
  const CartButton = ({ onClick }) => {
    const [cart] = useContext(CartContext);
    return (
      <Badge badgeContent={cart.length} classes={{ badge: classes.cartBadge }}>
        <img
          onClick={onClick}
          className="cart-btn"
          src={cartIcon}
          alt="cart"
        ></img>
      </Badge>
    );
  };
  const NotLoggedIn = () => {
    const [anchorCart, setAnchorCart] = useState(null);
    const handleCartClick = (e) => {
      setAnchorCart(e.target);
    };
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
        <LoginModal show={showLoginModal} toggleModal={toggleLoginModal} />
        <CartButton onClick={handleCartClick} />
        <CartMenu anchorEl={anchorCart} setAnchorEl={setAnchorCart} />
      </React.Fragment>
    );
  };
  const LoggedIn = () => {
    const [anchorMenu, setAnchorMenu] = useState(null);
    const handleAvatarClick = (e) => {
      setAnchorMenu(e.target);
    };
    const handleClose = (e) => {
      e.preventDefault();
      setAnchorMenu(null);
    };
    const [anchorCart, setAnchorCart] = useState(null);
    const handleCartClick = (e) => {
      setAnchorCart(e.target);
    };

    return (
      <React.Fragment>
        <Avatar
          aria-controls="user_menu"
          onClick={handleAvatarClick}
          className={classes.avatar}
          alt="avatar"
          src="http://localhost:8080/api/user/image/avatar.jpg"
        ></Avatar>
        <Menu
          classes={{ paper: classes.avatarMenu, list: classes.avatarMenuList }}
          id="user_menu"
          anchorEl={anchorMenu}
          open={Boolean(anchorMenu)}
          onClose={handleClose}
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
        <CartButton onClick={handleCartClick} />

        <CartMenu
          anchorEl={anchorCart}
          setAnchorEl={setAnchorCart}
        />
      </React.Fragment>
    );
  };
  return (
    <div className="header-menu">
      {authState.token ? <LoggedIn /> : <NotLoggedIn />}
    </div>
  );
};
export default HeaderUserMenu;
