import { Switch } from "react-router";
import AdminPage from "pages/AdminPage/AdminPage";
import AdminProducts from "pages/AdminProducts/AdminProducts";
import AdminOrders from "pages/AdminOrders/AdminOrders";
import { AdminRoute } from "cores/PrivateRoute";
import AddProduct from "../pages/AddProduct/AddProduct";
import EditProduct from '../pages/EditProduct/EditProduct';

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
       <AdminRoute
        path="/admin/products/edit-product"
        component={EditProduct}
      ></AdminRoute>
    </Switch>
  );
}
