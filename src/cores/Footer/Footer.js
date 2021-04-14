import logo from "assets/images/logo.svg";
import twitterIcon from "assets/images/icons/twitter-icon.svg";
import facebookIcon from "assets/images/icons/facebook-icon.svg";
import instaIcon from "assets/images/icons/instagram-icon.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-row">
        <Link to="/">
          <img src={logo} className="site-logo" alt="logo" />
        </Link>
        <FooterNav className="footer-nav" />
        <div className="footer-social-icons">
          <img src={twitterIcon} alt="twitter-logo" />
          <img src={facebookIcon} alt="facebook-logo" />
          <img src={instaIcon} alt="insta-logo" />
        </div>
      </div>
      <hr className="line"></hr>
      <div className="footer-row2">
        <FooterNav className="footer-nav-small" />
        <FooterPolicy />
      </div>
    </div>
  );
}
function FooterPolicy() {
  return (
    <div className="footer-nav-small">
      <ul>
        <li>
          <Link to="/policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms">Terms & Conditions</Link>
        </li>
      </ul>
    </div>
  );
}
function FooterNav(props) {
  return (
    <div className={props.className}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="help">Help</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
