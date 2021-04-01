import closeIcon from "../images/icons/cross.svg";
import ModalInput from "./ModalInput";
import React,{useState} from "react";
import ReactDOM from "react-dom";
import UserService from "../api/UserAPI"
import Helpers from "../helpers/Helper"
function LoginModal({ show, toggleModal }) {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleFormChange = () => {
    if (Email != "" && Password != "") {
      Helpers.submitButton(true);
    } else {
      Helpers.submitButton(false);
    }
  };
  const handleSubmit = async (e) => {
    Helpers.submitButton(false);
    let userObject = {
      email: Email,
      password: Password,
    };
    let res = await UserService.login(userObject);
    console.log(res)
    if (res.status == "success") {
      //Login
      toggleModal();
    } else {
      alert(res.message);
      Helpers.submitButton(true);
    }
  };
  return show
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-backdrop"></div>
          <div className="modal login-modal">
            <ModalCloseButton toggleModal={toggleModal} />
            <div className="modal-header">Log In</div>
            <div className="modal-content">
              <form onChange={handleFormChange} onSubmit={handleSubmit}>
                <ModalInput
                  type="email"
                  name="E-MAIL"
                  placeHolder="Enter your email..."
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <ModalInput
                  type="password"
                  name="PASSWORD"
                  placeHolder="Enter your password..."
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <LoginRememberAndForgotRow />
                <button id="submit" className="function-button btn-disabled" disabled>
                  Login
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <RegisterChoice />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
}
const LoginRememberAndForgotRow = () => {
  return (
    <div className="space-row">
      <div className="checkbox-control">
        <input id="remember_pwd_box" type="checkbox"></input>
        <label htmlFor="remember_pwd_box">Remember password</label>
      </div>
      <div className="login-modal-forgot-password">
        <a href="#">Forgot your password?</a>
      </div>
    </div>
  );
};
const ModalCloseButton = ({ toggleModal }) => {
  return (
    <img
      className="modal-close"
      src={closeIcon}
      alt="close-icon"
      onClick={toggleModal}
    ></img>
  );
};
const RegisterChoice = () => {
  return (
    <div className="login-modal-register">
      Don't have an account?&nbsp;
      <a className="orange-underline" href="#">
        Register
      </a>
    </div>
  );
};
export default LoginModal;
