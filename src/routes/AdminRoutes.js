import { Switch } from "react-router";
import AdminPage from "pages/AdminPage";
import AdminProducts from "pages/AdminProducts/AdminProducts";
import AdminOrders from "pages/AdminOrders/AdminOrders";
import { AdminRoute } from "components/PrivateRoute";
import AddProduct from "../pages/AddProduct/AddProduct";

export default function AdminRoutes() {
  return (
    <Switch>
      <AdminRoute exact path="/admin" component={AdminPage}></AdminRoute>
      <AdminRoute exact path="/admin/products" component={AdminProducts}></AdminRoute>
      <AdminRoute exact path="/admin/orders" component={AdminOrders}></AdminRoute>
      <AdminRoute
        path="/admin/products/add-product"
        component={AddProduct}
      ></AdminRoute>
    </Switch>
  );
}
