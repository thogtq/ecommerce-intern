import { Grid } from "@material-ui/core";
import AdminSideBar from "pages/AdminPage/AdminSideBar";
import EditProductContainer from "./EditProductContainer";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ProductService from "services/ProductService";

const EditProduct = () => {
  require("assets/sass/admin.scss");
  const [product, setProduct] = useState({});
  const useQuery = new URLSearchParams(useLocation().search);
  const [loading, setLoading] = useState(true);
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
  return (
    !loading && (
      <Grid container direction="row">
        <AdminSideBar selected="products_sidebar" />
        <EditProductContainer product={product} setProduct={setProduct} />
      </Grid>
    )
  );
};
export default EditProduct;
