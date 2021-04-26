import logo from "assets/images/logo_white.svg";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect, useContext } from "react";
import { loginAdmin } from "services/UserService";
import { Redirect } from "react-router";
import SiteButton from "components/SiteButton";
import { AuthAdminContext } from "contexts/context";

const useStyles = makeStyles((theme) => ({
  logo: {
    float: "left",
    margin: "32px 0 0 44px",
  },
}));
const AdminLogin = () => {
  const [authState, authDispatch] = useContext(AuthAdminContext);
  require("assets/sass/admin.scss");
  const classes = useStyles();
  const Input = (props) => {
    return (
      <div className="input-control">
        <label>{props.name}</label>
        <input
          type={props.type}
          placeholder={props.placeHolder}
          onChange={props.onChange}
          required
        ></input>
      </div>
    );
  };
  const LoginForm = () => {
    const [disabled, setDisabled] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      setDisabled(true);
      let userObject = {
        email: email,
        password: password,
      };
      await loginAdmin(authDispatch, userObject);
      setDisabled(false);
    };
    return (
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className="login-form-header">
          <div>Log In</div>
          <div className="modal-error">
            {authState.error ? authState.error : ""}
          </div>
        </div>
        <div className="login-form-body">
          <Input
            name="EMAIL"
            type="email"
            placeHolder="email@sample.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            name="PASSWORD"
            type="password"
            placeHolder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <SiteButton
            className="admin-login-button"
            name="Login"
            width="100%"
            height="50px"
            backgroundColor="#ffa15f"
            weight="SemiBold"
            color="#ffffff"
            disabled={disabled}
          />
        </div>
        <div className="login-form-footer">Forgot password</div>
      </form>
    );
  };
  useEffect(() => {
    if (authState.token) {
      document.body.classList.remove("login-body");
    } else {
      document.body.classList.add("login-body");
    }
  }, [authState]);
  return !authState.token ? (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} alt="logo"></img>
      <LoginForm />
    </div>
  ) : (
    <Redirect to="/admin"></Redirect>
  );
};
export default AdminLogin;
