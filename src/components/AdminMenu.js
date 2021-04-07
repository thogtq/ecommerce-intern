import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import mailIcon from "../files/images/admin/icons/mail.svg";
import notiIcon from "../files/images/admin/icons/notification.svg";
import dropdownIcon from "../files/images/admin/icons/dropdown.svg";
import { Link } from "react-router-dom";

export default function AdminMenu() {
  const AdminDetails = () => {
    return (
      <Grid container alignItems="center" xs item>
        <Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"></Avatar>
        <div className="admin-name">admin@gmail.com</div>
        <img src={dropdownIcon}></img>
      </Grid>
    );
  };
  return (
    <Grid className="admin-header-menu" container xs={4} justify="space-around">
      <AdminDetails />
      <Grid container alignItems="center" xs={2}>
        <img src={mailIcon}></img>
      </Grid>
      <Grid container alignItems="center" xs={2}>
        {" "}
        <img src={notiIcon}></img>
      </Grid>
    </Grid>
  );
}
