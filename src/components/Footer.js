import logo from "../files/images/logo.svg";
import twitterIcon from "../files/images/icons/twitter-icon.svg";
import facebookIcon from "../files/images/icons/facebook-icon.svg";
import instaIcon from "../files/images/icons/instagram-icon.svg";

function Footer() {
    return (
      <div className="footer">
        <div className="footer-row">
          <img src={logo} className="site-logo" alt="logo" />
          <FooterNav className="footer-nav"/>
          <div className="footer-social-icons">
            <img src={twitterIcon} alt="twitter-logo" />
            <img src={facebookIcon} alt="facebook-logo" />
            <img src={instaIcon} alt="insta-logo" />
          </div>
        </div>
        <hr className="line"></hr>
        <div className="footer-row2">
          <FooterNav className="footer-nav-small"/>
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
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
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
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Product</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </div>
    );
  }
  export default Footer;