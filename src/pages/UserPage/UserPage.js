import {
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import React, { useEffect, useState } from "react";
import { loadCart } from "helpers/helpers";
import SiteButton from "components/SiteButton";
import UserService, { setLocalUser } from "services/UserService";
import { getLocalUser } from "../../services/UserService";

const useStyles = makeStyles({
  listItem: {
    padding: "0",
    marginBottom: "18px",
    font: "14px/22px Montserrat-Regular",
    color: "#4d4d4d",
  },
});
const UserPage = () => {
  const classes = useStyles();
  const [tab, setTab] = useState("");
  const [cart, setCart] = useState(loadCart());
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      let res = await UserService.getUser();
      if (res.status === "success") {
        setUser(res.data.user);
      } else {
        alert(res.error.message);
      }
    };
    fetchUser();
  }, []);
  console.log(user);
  return (
    <React.Fragment>
      <Header cart={cart} setCart={cart} />
      <div className="container user-page-container">
        <Grid container direction="row" style={{ gap: "100px" }} spacing={0}>
          <Grid className="user-page-navbar" item xs>
            <div className="user-page-header">My Account</div>
            <List className="navbar-list">
              <ListItem
                className="list-active"
                classes={{ root: classes.listItem }}
                disableGutters
              >
                Account setting
              </ListItem>
              <ListItem classes={{ root: classes.listItem }} disableGutters>
                Change password
              </ListItem>
            </List>
          </Grid>
          <Grid className="edit-password-tab" item container direction="column">
            <Grid className="tab-header" item>
              <span className="tab-title">Change password</span>
            </Grid>
            <Grid
              className="edit-password-content"
              container
              direction="column"
              style={{ gap: "31px" }}
            >
              <Grid item>
                <label>CURRENT PASSWORD</label>
                <input
                  className="input-field"
                  placeholder="Enter your password..."
                ></input>
              </Grid>
              <Grid item>
                <label>NEW PASSWORD</label>
                <input
                  className="input-field"
                  placeholder="Enter your password..."
                ></input>
              </Grid>
              <Grid item>
                <label>RE-ENTER NEW PASSWORD</label>
                <input
                  className="input-field"
                  placeholder="Enter your password..."
                ></input>
              </Grid>
              <Grid item container justify="flex-end">
                <SiteButton
                  name="Save"
                  weight="Bold"
                  color="#ffffff"
                  backgroundColor="#d4d3d3"
                  width="130px"
                  height="35px"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default UserPage;
const AccountTab = () => {
  return (
    <Grid className="account-tab" item container direction="column">
      <Grid className="tab-header" item>
        <span className="tab-title">Information</span>
        <span className="edit-account">Edit</span>
      </Grid>
      <Grid
        className="account-content"
        container
        direction="column"
        style={{ gap: "31px" }}
      >
        <Grid item>
          <label>Name</label>
          <div className="tab-text">Johnnie Kennedy</div>
        </Grid>
        <Grid item>
          <label>Email</label>
          <div className="tab-text">johnniekennedy@gmail.com</div>
        </Grid>
      </Grid>
    </Grid>
  );
};
const EditAccountTab = () => {
  return (
    <Grid className="edit-account-tab" item container direction="column">
      <Grid className="tab-header" item>
        <span className="tab-title">Information</span>
      </Grid>
      <Grid
        className="edit-account-content"
        container
        direction="column"
        style={{ gap: "31px" }}
      >
        <Grid item>
          <label>NAME</label>
          <input
            className="input-field"
            placeholder="Enter your name..."
          ></input>
        </Grid>
        <Grid item>
          <label>EMAIL</label>
          <input
            className="input-field"
            placeholder="Enter your email..."
          ></input>
        </Grid>
        <Grid item container justify="flex-end">
          <SiteButton
            name="Cancel"
            weight="Medium"
            color="#202124"
            backgroundColor="transparent"
            width="130px"
            height="35px"
          />
          <SiteButton
            name="Save"
            weight="Bold"
            color="#ffffff"
            backgroundColor="#d4d3d3"
            width="130px"
            height="35px"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
