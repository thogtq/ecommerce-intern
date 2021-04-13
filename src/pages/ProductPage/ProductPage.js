import { Breadcrumbs, Grid } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ProductContainer from "./ProductContainer";

export default function ProductPage() {
  const useQuery = new URLSearchParams(useLocation().search);
  const Body = () => {
    return (
      <Grid className="container">
        <Grid container justify="center">
          <Breadcrumbs
            classes={{ root: "product-breadcrumb" }}
            aria-label="breadcrumb"
          >
            <Link to="/">Men</Link>
            <Link to="/">Hats</Link>
            <Link to="/">Collete Stretch Linen Minidress</Link>
          </Breadcrumbs>
        </Grid>
        <ProductContainer />
        
      </Grid>
    );
  };
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}
