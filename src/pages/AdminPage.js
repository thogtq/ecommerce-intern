import { Grid, makeStyles } from "@material-ui/core";
import AdminSideBar from "components/AdminPage/AdminSideBar";
import ProductsContainer from "components/AdminPage/Products/ProductsContainer";


const AdminPage = () => {
  require("assets/sass/admin.scss");
  return (
    <Grid container direction="row">
      <Grid item md={1}>
        <AdminSideBar />
      </Grid>
      <Grid item md={11}>
        <ProductsContainer />
      </Grid>
    </Grid>
  );
};
export default AdminPage;
