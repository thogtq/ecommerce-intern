import { Grid } from "@material-ui/core";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { loadCart } from "helpers/helpers";
import SiteButton from "components/SiteButton";

export function CheckoutPage() {
  const [cart, setCart] = useState(loadCart);
  const history = useHistory();
  const useQuery = new URLSearchParams(useLocation().search);
  const handleClick = () => {
    history.push("/");
  };
  var orderID;
  if (useQuery.has("orderID")) {
    orderID = useQuery.get("orderID");
  } else {
    history.push("/");
  }
  return (
    <React.Fragment>
      <Header cart={cart} setCart={setCart} />
      <Grid container alignItems="center" direction="column" style={{gap:"20px"}}>
        <div>Your order has been placed successfully!</div>
        <div>Your order ID is : <b>{orderID}</b></div>
        <SiteButton
          width="180px"
          height="48px"
          name="Continue shopping"
          color="white"
          weight="SemiBold"
          backgroundColor="#ffa15f"
          submit
          onClick={handleClick}
        ></SiteButton>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
