import { Route, Switch } from "react-router";
import ProductsPage from "../pages/ProductsPage/ProductsPage";

export default function ProductRoutes() {
  return (
    <Switch>
      <Route path="/products">
        <ProductsPage />
      </Route>
    </Switch>
  );
}
