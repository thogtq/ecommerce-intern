import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import mailIcon from "assets/images/admin/icons/mail.svg";
import notiIcon from "assets/images/admin/icons/notification.svg";
import dropdownIcon from "assets/images/admin/icons/dropdown.svg";

export default function AdminMenu() {
  const AdminDetails = () => {
    return (
      <Grid container alignItems="center" item md>
        <Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"></Avatar>
        <div className="admin-name">admin@gmail.com</div>
        <img src={dropdownIcon} alt="dropdown-icon"></img>
      </Grid>
    );
  };
  return (
    <Grid className="admin-header-menu" container md={4} justify="space-around">
      <AdminDetails />
      <Grid container alignItems="center" md={2}>
        <img src={mailIcon} alt="mail-icon"></img>
      </Grid>
      <Grid container alignItems="center" md={2}>
        {" "}
        <img src={notiIcon} alt="noti-icon"></img>
      </Grid>
    </Grid>
  );
}
