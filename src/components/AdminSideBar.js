import React from "react";
import { Grid, ListItemIcon } from "@material-ui/core";
import { MenuItem, MenuList } from "@material-ui/core";
import logo from "../files/images/logo.svg";
import overviewIcon from "../files/images/admin/icons/overview.svg";
import ordersIcon from "../files/images/admin/icons/orders.svg";
import productsIcon from "../files/images/admin/icons/products.svg";
import paymentsIcon from "../files/images/admin/icons/payment.svg";
import promotionsIcon from "../files/images/admin/icons/promotion.svg";
import settingIcon from "../files/images/admin/icons/setting.svg";

export default function AdminSideBar() {
  //Click menu -> change state(current tab) -> switch to load
  //CLick menu ->Link to Component admin/product admin/orders
  return (
    <React.Fragment>
      <Grid className="sidebar" md={1}>
        <Grid container justify="center">
          <img className="sidebar-logo" src={logo} alt="logo"></img>
        </Grid>
        <Grid>
          <MenuList className="sidebar-menu">
            <MenuItem>
              <img className="sidebar-menu-icon" src={overviewIcon}></img>
              Overview
            </MenuItem>
            <MenuItem>
              <img className="sidebar-menu-icon" src={ordersIcon}></img>Orders
            </MenuItem>
            <MenuItem>
              <img className="sidebar-menu-icon" src={productsIcon}></img>
              Products
            </MenuItem>
            <MenuItem>
              <img className="sidebar-menu-icon" src={paymentsIcon}></img>
              Payments
            </MenuItem>
            <MenuItem>
              <img className="sidebar-menu-icon" src={promotionsIcon}></img>
              Promotions
            </MenuItem>
            <MenuItem>
              <img className="sidebar-menu-icon" src={settingIcon}></img>
              Setting
            </MenuItem>
          </MenuList>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
