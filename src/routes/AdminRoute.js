import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
const AdminRoute = ({ component: Component, ...rest }) => {
  const auth = isAuthenticated(true);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth == true ? <Component {...props} /> : <Redirect to="/admin/login" />
      }
    />
  );
};
export default AdminRoute;
