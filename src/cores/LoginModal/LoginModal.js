import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserService from "services/UserService";
import Modal from "../../components/Modal";
import { authenticate } from "services/AuthService";
import ModalInput from "../../components/ModalInput";
import SiteButton from "components/SiteButton";

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
        <Link to="/?fotgot_modal=1">Forgot your password?</Link>
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
        <Link to="/?register_modal=1" className="orange-underline" href="#">
          Register
        </Link>
      </div>
    );
  };
  const ModalFormBody = () => {
    const [disabled, setDisabled] = useState(true);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleFormChange = () => {
      if (Email && Password) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setDisabled(true);
      let userObject = {
        email: Email,
        password: Password,
      };
      let res = await UserService.login(userObject);
      if (res.status === "success") {
        authenticate(res.data);
        toggleModal();
        setLoggedIn(true);
      } else {
        alert(res.error.message);
        console.log(res.error);
      }
      setDisabled(false);
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
        <SiteButton
          className="login-button"
          name="Login"
          width="100%"
          height="50px"
          backgroundColor="#ffa15f"
          weight="Bold"
          color="#ffffff"
          disabled={disabled}
        />
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
