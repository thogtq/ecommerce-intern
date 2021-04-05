import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Homepage from "./pages/Homepage";
import AdminPage from "./pages/AdminPage";
import "./sass/main.scss";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./routes/AdminRoute";
import UserPage from "./pages/UserPage";
ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Homepage}></Route>
    <PrivateRoute path="/user" component={UserPage}></PrivateRoute>
    <Route path="/admin/login" component={AdminLogin}></Route>
    <AdminRoute exact path="/admin" component={AdminPage}></AdminRoute>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
