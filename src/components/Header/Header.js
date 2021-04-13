import logo from "assets/images/logo.svg";
import React from "react";
import HeaderUserMenu from "./HeaderUserMenu";
import CategoryNavBar from "components/Homepage/CategoryNavBar";
import HeaderSearchBar from "./HeaderSearchBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <HeaderSearchBar />
        <Link className="site-logo" to="/">
          <img src={logo}  alt="logo" />
        </Link>
        <HeaderUserMenu />
      </div>
      <hr className="line"></hr>
      <CategoryNavBar />
    </div>
  );
}

export default Header;
