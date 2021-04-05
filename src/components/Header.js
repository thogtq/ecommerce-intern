import logo from "../files/images/logo.svg";
import React, { useState, useEffect } from "react";
import HeaderUserMenu from "./HeaderUserMenu";
import CategoryNavBar from "./CategoryNavBar";
import HeaderSearchBar from "./HeaderSearchBar";

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <HeaderSearchBar />
        <img src={logo} className="site-logo" alt="logo" />
        <HeaderUserMenu />
      </div>
      <hr className="line"></hr>
      <CategoryNavBar />
    </div>
  );
}

export default Header;
