import closeIcon from "../images/icons/cross.svg";
import ModalInput from "./ModalInput";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//import userService from "../services/userService";

function RegisterModal({ show, toggleModal }) {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const disableSubmitBtn = (state) => {
    if (!state) {
      let submit = document.getElementById("submit");
      submit.classList.remove("btn-disabled");
      submit.removeAttribute("disabled");
    } else {
      let submit = document.getElementById("submit");
      submit.classList.add("btn-disabled");
      submit.setAttribute("disabled", true);
    }
  };
  const handleFormChange = () => {
    if (Fullname != "" && Email != "" && Password != "") {
      disableSubmitBtn(false);
    } else {
      disableSubmitBtn(true);
    }
  };
  const handleSubmit = (e) => {
    disableSubmitBtn(true);
    let userObject = {
      fullname: Fullname,
      email: Email,
      password: Password,
    };
    
    async function register(userObject) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userObject),
      };
      console.log(requestOptions.body);
      const data = await fetch(`http://localhost:8080/api/user`, requestOptions)
        .then((res) => res.text())
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
            console.log(error);
          }
        );
    }
    register(userObject);
  };
  return show
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-backdrop"></div>
          <div className="modal login-modal">
            <ModalCloseButton toggleModal={toggleModal} />
            <div className="modal-header">Register</div>
            <div className="modal-content">
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
                <button
                  id="submit"
                  className="function-button btn-disabled"
                  disabled
                >
                  Register
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <LoginChoice />
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
}
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
const LoginChoice = () => {
  return (
    <div className="login-modal-register">
      Do you have an account?{" "}
      <a className="orange-underline" href="#">
        Login
      </a>
    </div>
  );
};
export default RegisterModal;
