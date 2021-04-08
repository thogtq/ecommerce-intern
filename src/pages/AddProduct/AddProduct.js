import { Grid } from "@material-ui/core";
import AdminSideBar from "components/AdminSideBar";
import AddProductContainer from './AddProductContainer';

const AddProduct = () => {
  require("assets/sass/admin.scss");
  return (
    <Grid container direction="row">
      <AdminSideBar selected="products_sidebar" />
      <AddProductContainer />
    </Grid>
  );
};
export default AddProduct;
