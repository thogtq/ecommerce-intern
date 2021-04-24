import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./pages/Homepage/Homepage";

import "assets/sass/main.scss";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AdminRoutes from "routes/AdminRoutes";
import ProductRoutes from "routes/ProductRoutes";
import OrderRoutes from "./routes/OrderRoutes";
import UserRoutes from "routes/UserRoutes";
import { AuthAdminProvider, AuthProvider, CartProvider } from "contexts/store";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <Route exact path="/" component={Homepage}></Route>
        <ProductRoutes />
        <OrderRoutes />
        <UserRoutes />
      </CartProvider>
    </AuthProvider>
    <AuthAdminProvider>
      <AdminRoutes />
    </AuthAdminProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
