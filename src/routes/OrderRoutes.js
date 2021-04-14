import { Route, Switch } from "react-router";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import CartPage from "../pages/CartPage/CartPage";

export default function OrderRoutes() {
  return (
    <Switch>
      <Route path="/cart">
        <CartPage />
      </Route>
    </Switch>
  );
}
