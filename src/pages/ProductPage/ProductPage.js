import { Breadcrumbs, Grid } from "@material-ui/core";
import TextDivider from "components/TextDivider";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import React from "react";
import { Link } from "react-router-dom";
import ProductContainer from "./ProductContainer";
import ReviewsContainer from "./ReviewsContainer";
import SuggestionProducts from "./SuggestionProducts";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import ProductService from "services/ProductService";

export default function ProductPage() {
  //Fix me
  // init productID here not work
  const useQuery = new URLSearchParams(useLocation().search);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      let productID = useQuery.get("productID");
      let res = await ProductService.getProduct(productID);
      if (res.status === "success") {
        setProduct(res.data.product);
        setLoading(false);
      } else {
        console.log(res.error.message);
      }
    };
    fetchProduct();
  }, []);
  return loading ? (
    ""
  ) : (
    <React.Fragment>
      <Header />
      <Grid className="container">
        <Grid container justify="center">
          <Breadcrumbs
            classes={{ root: "product-breadcrumb" }}
            aria-label="breadcrumb"
          >
            <Link to="/">Men</Link>
            <Link to="/">Hats</Link>
            <Link to="/">{product.name}</Link>
          </Breadcrumbs>
        </Grid>
        <ProductContainer product={product} loading={loading} />
        <TextDivider text="Reviews" />
        <ReviewsContainer />
        <TextDivider text="You may also like" />
        <SuggestionProducts />
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
