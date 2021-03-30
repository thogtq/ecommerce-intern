import closeIcon from "../images/icons/cross.svg";
import ModalInput from "./ModalInput";
function LoginModal({ show, setShowModal }) {
  const closeModal = ()=>{
    setShowModal((prev) => !prev);
  }
  return (
    <div className="modal login-modal">
      <img className="modal-close" src={closeIcon} alt="close-icon" onClick={closeModal}></img>
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
  );
}
const LoginModalCheck = ({ show, setShowModal }) => {
  if (show == true) {
    return LoginModal(show, setShowModal);
  }
  return null;
};
export default LoginModalCheck;
