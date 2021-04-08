import { Grid, makeStyles } from "@material-ui/core";
import AdminSideBar from "components/AdminPage/AdminSideBar";
import ProductsContainer from "components/AdminPage/Products/ProductsContainer";

const AdminPage = () => {
  require("assets/sass/admin.scss");
  return (
    <Grid container direction="row">
      <AdminSideBar />
      <ProductsContainer />
    </Grid>
  );
};
export default AdminPage;
