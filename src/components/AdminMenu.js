import { Avatar, Grid } from "@material-ui/core";
import React from "react";
import mailIcon from "assets/images/admin/icons/mail.svg";
import notiIcon from "assets/images/admin/icons/notification.svg";
import dropdownIcon from "assets/images/admin/icons/dropdown.svg";

export default function AdminMenu() {
  const AdminDetails = () => {
    return (
      <Grid item>
        <Grid container alignItems="center">
          <Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"></Avatar>
          <div className="admin-name">admin@gmail.com</div>
          <img src={dropdownIcon} alt="dropdown-icon"></img>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid item md>
      <Grid className="admin-header-menu" container justify="flex-end" alignItems="center" spacing={4}>
        <AdminDetails />
        <Grid item >
          <img src={mailIcon} alt="mail-icon"></img>
        </Grid>
        <Grid item>
          <img src={notiIcon} alt="noti-icon"></img>
        </Grid>
      </Grid>
    </Grid>
  );
}
