import { Breadcrumbs, Grid } from "@material-ui/core";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsContainer from "./ProductsContainer";
import SidebarNav from "./SidebarNav";
import { useLocation, useHistory } from "react-router";

export default function ProductsPage() {
  const useQuery = new URLSearchParams(useLocation().search);
  let category = useQuery.get("category");
  if (!category) {
    category = "";
  }
  const [productFilter, setProductFilter] = useState({
    sortBy: "sold",
    category: category,
  });
  useEffect(() => {
    setProductFilter({
      sortBy: "sold",
      category: category,
    });
  }, [useLocation()]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Breadcrumbs
          classes={{ root: "products-breadcrumb" }}
          aria-label="breadcrumb"
        >
          <Link to={"?category=" + category.split("/")[0]}>
            {category.split("/", 1)[0]}
          </Link>
          <Link to={"?category=" + category}>{category.split("/")[1]}</Link>
        </Breadcrumbs>
        <Grid container direction="row">
          <SidebarNav
            currentCategory={category}
            setFilter={setProductFilter}
            filter={productFilter}
          />
          <ProductsContainer
            filter={productFilter}
            setFilter={setProductFilter}
            currentCategory={category}
          />
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
}
