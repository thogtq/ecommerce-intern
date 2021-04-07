import ModalInput from "./ModalInput";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserService from "../services/UserService";
import Helpers from "../helpers/Helper";
import Modal from "./Modal";
import { authenticate } from "../auth/index";

function LoginModal({ setLoggedIn, show, toggleModal }) {
  const RememberPassword = () => {
    return (
      <div className="checkbox-control">
        <input id="remember_pwd_box" type="checkbox"></input>
        <label htmlFor="remember_pwd_box">Remember password</label>
      </div>
    );
  };
  const ForgotPassword = () => {
    return (
      <div className="login-modal-forgot-password">
        <a href="#">Forgot your password?</a>
      </div>
    );
  };
  const ModalHeader = () => {
    return "Log In";
  };
  const ModalFooter = () => {
    return (
      <div className="login-modal-register">
        Don't have an account?&nbsp;
        <a className="orange-underline" href="#">
          Register
        </a>
      </div>
    );
  };
  const ModalFormBody = () => {
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
      e.preventDefault();
      Helpers.submitButton(false);
      let userObject = {
        email: Email,
        password: Password,
      };
      let res = await UserService.login(userObject);
      if (res.status == "success") {
        authenticate(res.data);
        toggleModal();
        setLoggedIn(true);
      } else {
        alert(res.error.message);
        Helpers.submitButton(true);
      }
    };
    return (
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
        <div className="space-row">
          <RememberPassword />
          <ForgotPassword />
        </div>
        <button id="submit" className="function-button btn-disabled" disabled>
          Login
        </button>
      </form>
    );
  };
  return show
    ? ReactDOM.createPortal(
        <Modal header={ModalHeader} footer={ModalFooter} toggle={toggleModal}>
          <ModalFormBody />
        </Modal>,
        document.body
      )
    : null;
}
export default LoginModal;
