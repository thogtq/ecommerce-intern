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
import { loadCart } from "helpers/helpers";

export default function ProductPage() {
  const useQuery = new URLSearchParams(useLocation().search);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const [cart, setCart] = useState(loadCart());
  let category = useQuery.get("category");
  if (!category) {
    category = "";
  }
  let productID = useQuery.get("productID");
  useEffect(() => {
    const fetchProduct = async () => {
      let res = await ProductService.getProduct(productID);
      if (res.status === "success") {
        setProduct(res.data.product);
        setLoading(false);
      } else {
        console.log(res.error.message);
      }
    };
    fetchProduct();
  }, [productID]);
  return loading ? (
    ""
  ) : (
    <React.Fragment>
      <Header cart={cart} setCart={setCart} />
      <Grid className="container">
        <Grid container justify="center">
          <Breadcrumbs
            classes={{ root: "product-breadcrumb" }}
            aria-label="breadcrumb"
          >
            {category ? (
              <Link to={"/products/?category=" + category.split("/")[0]}>
                {category.split("/")[0]}
              </Link>
            ) : (
              ""
            )}
            {category.split("/")[1] ? (
              <Link to={"/products/?category=" + category}>
                {category.split("/")[1]}
              </Link>
            ) : (
              ""
            )}
            <Link to={"/product/?productID=" + product.productID}>
              {product.name}
            </Link>
          </Breadcrumbs>
        </Grid>
        <ProductContainer
          product={product}
          loading={loading}
          cart={cart}
          setCart={setCart}
        />
        <TextDivider text="Reviews" />
        <ReviewsContainer />
        <TextDivider text="You may also like" />
        <SuggestionProducts />
      </Grid>
      <Footer />
    </React.Fragment>
  );
}
