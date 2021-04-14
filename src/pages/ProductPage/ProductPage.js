import { Breadcrumbs, Grid } from "@material-ui/core";
import TextDivider from "components/TextDivider";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import ProductContainer from "./ProductContainer";
import ReviewsContainer from "./ReviewsContainer";
import SuggestionProducts from "./SuggestionProducts";

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
        <TextDivider text="Reviews" />
        <ReviewsContainer />
        <TextDivider text="You may also like" />
        <SuggestionProducts />
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
