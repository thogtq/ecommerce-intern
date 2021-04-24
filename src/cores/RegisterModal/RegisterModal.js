import ModalInput from "../../components/ModalInput";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {registerUser} from "services/UserService";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import SiteButton from "components/SiteButton";

const RegisterModal = ({ show, toggleModal }) => {
  const PolicyAgree = () => {
    return (
      <div className="policy-agree">
        By creating an account you agree to the&nbsp;
        <Link to="/terms" className="orange-underline" href="#">
          Terms of Service
        </Link>
        &nbsp; and&nbsp;
        <Link to="/policy" className="orange-underline" href="#">
          Privacy Policy
        </Link>
      </div>
    );
  };

  const ModalFormBody = () => {
    const [disabled, setDisabled] = useState(true);
    const [Fullname, setFullname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleFormChange = () => {
      if (Fullname && Email && Password) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setDisabled(true);
      let userObject = {
        fullname: Fullname,
        email: Email,
        password: Password,
      };
      let res = await registerUser(userObject);
      if (res.status === "success") {
        alert("Registration successful!");
        toggleModal();
      } else {
        alert(res.message);
      }
      setDisabled(false);
    };
    return (
      <form onChange={handleFormChange} onSubmit={handleSubmit}>
        <ModalInput
          type="text"
          name="NAME"
          placeHolder="Enter your name..."
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        />
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
        <PolicyAgree />
        <SiteButton
          className="register-button"
          name="Register"
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
  const ModalFooter = () => {
    return (
      <div className="login-modal-register">
        Do you have an account?{" "}
        <Link to="/?login_modal=1" className="orange-underline" href="#">
          Login
        </Link>
      </div>
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
};
const ModalHeader = () => {
  return "Register";
};
export default RegisterModal;
