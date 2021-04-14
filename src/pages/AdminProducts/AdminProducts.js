import { Grid } from "@material-ui/core";
import AdminSideBar from "pages/AdminPage/AdminSideBar";
import ProductsContainer from "pages/AdminProducts/ProductsContainer";

const AdminProduct = () => {
  require("assets/sass/admin.scss");
  return (
    <Grid container direction="row">
      <AdminSideBar selected="products_sidebar" />
      <ProductsContainer />
    </Grid>
  );
};
export default AdminProduct;
