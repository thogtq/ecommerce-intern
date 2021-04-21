import { Breadcrumbs, Grid } from "@material-ui/core";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsContainer from "./ProductsContainer";
import SidebarNav from "./SidebarNav";
import { useLocation } from "react-router";
import { loadCart } from "helpers/helpers";

const initFilter = {
  page: 1,
  limit: 20,
  sortBy: "sold",
  sortOrder: -1,
};
export default function ProductsPage() {
  const [cart, setCart] = useState(loadCart());
  const useQuery = new URLSearchParams(useLocation().search);
  let category = useQuery.get("category");
  const [productFilter, setProductFilter] = useState({
    ...initFilter,
    category: category,
  });
  useEffect(() => {
    if (category !== productFilter.category) {
      setProductFilter({ ...initFilter, category: category });
    }
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <React.Fragment>
      <Header cart={cart} setCart={setCart} />
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
