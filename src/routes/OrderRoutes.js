import { Route, Switch } from "react-router";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import CartPage from "../pages/CartPage/CartPage";
import { PrivateRoute } from "cores/PrivateRoute";
import { CheckoutPage } from "../pages/CheckoutPage/CheckoutPage";

export default function OrderRoutes() {
  return (
    <Switch>
      <Route path="/cart">
        <CartPage />
      </Route>
      <PrivateRoute path="/checkout" component={CheckoutPage} />
    </Switch>
  );
}
