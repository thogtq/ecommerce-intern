import ModalInput from "./ModalInput";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserService from "services/UserService";
import {submitButton} from "helpers/Helpers";
import Modal from "./Modal";
import { Link } from 'react-router-dom';

const RegisterModal = ({ show, toggleModal }) => {
  const PolicyAgree = () => {
    return (
      <div className="policy-agree">
        By creating an account you agree to the&nbsp;
        <Link to="/terms"className="orange-underline" href="#">
          Terms of Service
        </Link>
        &nbsp; and&nbsp;
        <Link to="/policy"className="orange-underline" href="#">
          Privacy Policy
        </Link>
      </div>
    );
  };
  const SubmitButton = () => {
    return (
      <button id="submit" className="function-button btn-disabled" disabled>
        Register
      </button>
    );
  };
  const ModalFormBody = () => {
    const [Fullname, setFullname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handleFormChange = () => {
      if (Fullname !== "" && Email !== "" && Password !== "") {
        submitButton(true);
      } else {
        submitButton(false);
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault()
      submitButton(false);
      let userObject = {
        fullname: Fullname,
        email: Email,
        password: Password,
      };
      let res = await UserService.register(userObject);
      if (res.status === "success") {
        alert("Registration successful!");
        toggleModal();
      } else {
        alert(res.message);
        submitButton(true);
      }
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
        <SubmitButton />
      </form>
    );
  };
  const ModalFooter = () => {
    return (
      <div className="login-modal-register">
        Do you have an account?{" "}
        <Link to="/?login_modal=1"className="orange-underline" href="#">
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
