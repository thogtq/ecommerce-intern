import logo from "../images/logo.svg";
import searchIcon from "../images/icons/search.svg";
import cartIcon from "../images/icons/cart.svg";
import arrowIcon from "../images/icons/arrow.svg";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useState, useEffect } from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-nav">
        <SearchBar />
        <img src={logo} className="site-logo" alt="logo" />
        <Menu />
      </div>
      <hr className="line"></hr>
      <div className="header-category-nav">
        <ListCategory />
      </div>
    </div>
  );
}
function Menu() {
  const [showLoginModal, setshowLoginModal] = useState(false);
  const toggleLoginModal = () => {
    setshowLoginModal(!showLoginModal);
  };
  const [showRegisterModal, setshowRegisterModal] = useState(false);
  const toggleRegisterModal = () => {
    setshowRegisterModal(!showRegisterModal);
  };
  return (
    <div className="header-menu">
      <a className="register-btn" href="#" onClick={toggleRegisterModal}>
        Register
      </a>
      <RegisterModal show={showRegisterModal} toggleModal={toggleRegisterModal} />
      <button className="login-btn" onClick={toggleLoginModal}>
        Login
      </button>
      <LoginModal show={showLoginModal} toggleModal={toggleLoginModal} />
      <a className="cart-btn" href="#">
        <img src={cartIcon}></img>
      </a>
    </div>
  );
}
function SearchBar() {
  return (
    <div className="header-searchbar">
      <input placeholder="Search"></input>
      <img className="search-icon" src={searchIcon} alt="search-icon" />
    </div>
  );
}
function ListCategory() {
  return (
    <ul>
      <li>
        <a href="#">
          Men <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </a>
      </li>
      <li>
        <a href="#">
          Ladies<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </a>
      </li>
      <li>
        <a href="#">
          Girls<img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </a>
      </li>
      <li>
        <a href="#">
          Boys <img className="icon" src={arrowIcon} alt="arrow-icon"></img>
        </a>
      </li>
    </ul>
  );
}
export default Header;
