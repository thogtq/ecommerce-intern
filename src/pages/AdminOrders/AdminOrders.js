import { Grid } from "@material-ui/core";
import AdminSideBar from "components/AdminSideBar";
import OrdersContainer from "pages/AdminOrders/OrdersContainer";

const AdminOrders = () => {
  require("assets/sass/admin.scss");
  return (
    <Grid container direction="row">
      <AdminSideBar selected="orders_sidebar" />
      <OrdersContainer />
    </Grid>
  );
};
export default AdminOrders;
