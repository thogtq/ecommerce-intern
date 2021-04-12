import { Breadcrumbs, Grid } from "@material-ui/core";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from "react";
import { Link } from "react-router-dom";
import ProductsContainer from "./ProductsContainer";
import SidebarNav from "./SidebarNav";
const CatgoryBreadcrumb = (props) => {
  const handleClick = () => {};
  return (
    <React.Fragment>
      <Breadcrumbs
        classes={{ root: "products-breadcrumb" }}
        aria-label="breadcrumb"
      >
        <Link to="/" onClick={handleClick}>
          Men
        </Link>
        <Link to="/" onClick={handleClick}>
          Hats
        </Link>
      </Breadcrumbs>
    </React.Fragment>
  );
};
const Body = () => {
  return (
    <div className="container">
      <CatgoryBreadcrumb />
      <Grid container direction="row">
        <SidebarNav />
        <ProductsContainer />
      </Grid>
    </div>
  );
};
export default function ProductsPage() {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
}
