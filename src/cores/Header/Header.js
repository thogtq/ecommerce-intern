import logo from "assets/images/logo.svg";
import React, {  useEffect } from "react";
import HeaderUserMenu from "./HeaderUserMenu";
import CategoryNavBar from "cores/Header/CategoryNavBar";
import HeaderSearchBar from "./HeaderSearchBar";
import { Link } from "react-router-dom";
import { saveCart } from "../../helpers/helpers";

function Header({ cart, setCart }) {
  useEffect(() => {
    saveCart(cart);
  }, [cart]);
  return (
    <div className="header">
      <div className="header-nav">
        <HeaderSearchBar />
        <Link className="site-logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <HeaderUserMenu cart={cart} />
      </div>
      <hr className="line"></hr>
      <CategoryNavBar />
    </div>
  );
}

export default Header;
