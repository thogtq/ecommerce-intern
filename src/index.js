import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./pages/Homepage/Homepage";

import "assets/sass/main.scss";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoute } from "cores/PrivateRoute";
import AdminLogin from "./pages/AdminLogin";
import UserPage from "./pages/UserPage";
import AdminRoutes from "routes/AdminRoutes";
import ProductRoutes from "routes/ProductRoutes";
import OrderRoutes from "./routes/OrderRoutes";
import TestPage from "./pages/AddProduct/TestPage/TestPage";

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/test" component={TestPage}></Route>
    <Route exact path="/" component={Homepage}></Route>
    <PrivateRoute path="/user" component={UserPage}></PrivateRoute>
    <Route exact path="/admin/login" component={AdminLogin}></Route>
    <AdminRoutes />
    <ProductRoutes />
    <OrderRoutes />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
