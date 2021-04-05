import logo from "../files/images/admin/logo.svg";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  logo: {
    float: "left",
    margin: "32px 0 0 44px",
  },
}));
const AdminLogin = () => {
  require("../sass/admin.scss");
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
    return (
      <form className="login-form">
        <div className="login-form-header">Log In</div>
        <div className="login-form-body">
          <Input name="EMAIL" type="email" placeHolder="email@sample.com" />
          <Input name="PASSWORD" type="password" placeHolder="Enter password" />
          <button id="submit" className="submit-btn" disabled>
            Login
          </button>
        </div>
        <div className="login-form-footer">Forgot password</div>
      </form>
    );
  };
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} alt="logo"></img>
      <LoginForm />
    </div>
  );
};
export default AdminLogin;
