import closeIcon from "../files/images/icons/cross.svg";
import ModalInput from "./ModalInput";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import UserService from "../api/UserAPI";
import Helpers from "../helpers/Helper";
import Modal from "./Modal";

const RegisterModal = ({ show, toggleModal }) => {
  const PolicyAgree = () => {
    return (
      <div className="policy-agree">
        By creating an account you agree to the&nbsp;
        <a className="orange-underline" href="#">
          Terms of Service
        </a>
        &nbsp; and&nbsp;
        <a className="orange-underline" href="#">
          Privacy Policy
        </a>
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
      if (Fullname != "" && Email != "" && Password != "") {
        Helpers.submitButton(true);
      } else {
        Helpers.submitButton(false);
      }
    };
    const handleSubmit = async (e) => {
      Helpers.submitButton(false);
      let userObject = {
        fullname: Fullname,
        email: Email,
        password: Password,
      };
      let res = await UserService.register(userObject);
      if (res.status == "success") {
        alert("Registration successful!");
        toggleModal();
      } else {
        alert(res.message);
        Helpers.submitButton(true);
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
        <a className="orange-underline" href="#">
          Login
        </a>
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
