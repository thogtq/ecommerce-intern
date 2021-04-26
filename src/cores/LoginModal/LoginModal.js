import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "../../components/Modal";
import ModalInput from "../../components/ModalInput";
import SiteButton from "components/SiteButton";
import { loginUser } from "services/UserService";
import { AuthContext } from "contexts/context";

function LoginModal({ show, toggleModal }) {
  const [authState, authDispatch] = useContext(AuthContext);
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
    return (
      <div>
        <div>Login</div>
        <div className="modal-error">
          {authState.error ? authState.error : ""}
        </div>
      </div>
    );
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
      await loginUser(authDispatch, userObject);
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
