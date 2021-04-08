import React from "react";
import { Grid } from "@material-ui/core";
import { MenuItem, MenuList } from "@material-ui/core";
import logo from "assets/images/logo.svg";
import overviewIcon from "assets/images/admin/icons/overview.svg";
import ordersIcon from "assets/images/admin/icons/orders.svg";
import productsIcon from "assets/images/admin/icons/products.svg";
import paymentsIcon from "assets/images/admin/icons/payment.svg";
import promotionsIcon from "assets/images/admin/icons/promotion.svg";
import settingIcon from "assets/images/admin/icons/setting.svg";

export default function AdminSideBar() {
  //Click menu -> change state(current tab) -> switch to load
  //CLick menu ->Link to Component admin/product admin/orders
  return (
    <React.Fragment>
      <Grid className="sidebar">
        <Grid container justify="center">
          <img className="sidebar-logo" src={logo} alt="logo"></img>
        </Grid>
        <Grid container>
          <MenuList className="sidebar-menu">
            <MenuItem>
              <img
                className="sidebar-menu-icon"
                src={overviewIcon}
                alt="overview-icon"
              ></img>
              Overview
            </MenuItem>
            <MenuItem>
              <img
                className="sidebar-menu-icon"
                src={ordersIcon}
                alt="orders-icon"
              ></img>
              Orders
            </MenuItem>
            <MenuItem>
              <img
                className="sidebar-menu-icon"
                src={productsIcon}
                alt="product-icon"
              ></img>
              Products
            </MenuItem>
            <MenuItem>
              <img
                className="sidebar-menu-icon"
                src={paymentsIcon}
                alt="payment-icon"
              ></img>
              Payments
            </MenuItem>
            <MenuItem>
              <img
                className="sidebar-menu-icon"
                src={promotionsIcon}
                alt="promotion-icon"
              ></img>
              Promotions
            </MenuItem>
            <MenuItem>
              <img
                className="sidebar-menu-icon"
                src={settingIcon}
                alt="setting-icon"
              ></img>
              Setting
            </MenuItem>
          </MenuList>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
