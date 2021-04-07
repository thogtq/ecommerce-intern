import logo from "assets/images/logo_white.svg";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import UserService from "services/UserService";
import { authenticate, isAuthenticated } from "services/AuthService";
import { Redirect } from "react-router";
import { submitButton } from 'helpers/Helpers';

const useStyles = makeStyles((theme) => ({
  logo: {
    float: "left",
    margin: "32px 0 0 44px",
  },
}));
const AdminLogin = () => {
  require("assets/sass/admin.scss");
  const [loggedIn, setLoggedIn] = useState(isAuthenticated(true));
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
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      submitButton(false);
      let userObject = {
        email: email,
        password: password,
      };
      let res = await UserService.adminLogin(userObject);
      console.log(res);
      if (res.status === "success") {
        authenticate(res.data, true);
        setLoggedIn(true);
      } else {
        alert(res.error.message);
      }
      submitButton(true);
    };
    return (
      <form className="login-form" onSubmit={handleFormSubmit}>
        <div className="login-form-header">Log In</div>
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
          <button type="submit" id="submit" className="submit-btn">
            Login
          </button>
        </div>
        <div className="login-form-footer">Forgot password</div>
      </form>
    );
  };
  useEffect(() => {
    if (loggedIn) {
      document.body.classList.remove("login-body");
    } else {
      document.body.classList.add("login-body");
    }
  }, [loggedIn]);
  return !loggedIn ? (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} alt="logo"></img>
      <LoginForm />
    </div>
  ) : (
    <Redirect to="/admin"></Redirect>
  );
};
export default AdminLogin;
