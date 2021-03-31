import closeIcon from "../images/icons/cross.svg";
import ModalInput from "./ModalInput";
import React from "react";
import ReactDOM from "react-dom";
function LoginModal({ show, toggleModal }) {
  return show
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div class="modal-backdrop"></div>
          <div className="modal login-modal">
            <img className="modal-close" src={closeIcon} alt="close-icon" onClick={toggleModal}></img>
            <div className="modal-header">Log In</div>
            <div className="modal-content">
              <ModalInput
                type="email"
                name="E-MAIL"
                placeHolder="Enter your email..."
              />
              <ModalInput
                type="password"
                name="PASSWORD"
                placeHolder="Enter your password..."
              />
              <div className="space-row">
                <div className="checkbox-control">
                  <input id="remember_pwd_box" type="checkbox"></input>
                  <label htmlFor="remember_pwd_box">Remember password</label>
                </div>
                <div className="login-modal-forgot-password">
                  <a href="#">Forgot your password?</a>
                </div>
              </div>
              <div className="login-modal-login-btn">
                <button>Login</button>
              </div>
            </div>
            <div className="modal-footer">
              <div className="login-modal-register">
                Don't have an account? <a href="#">Register</a>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
}
export default LoginModal;
