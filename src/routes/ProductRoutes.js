import { Route, Switch } from "react-router";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProductPage from '../pages/ProductPage/ProductPage';

export default function ProductRoutes() {
  return (
    <Switch>
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/product/">
        <ProductPage />
      </Route>
    </Switch>
  );
}
