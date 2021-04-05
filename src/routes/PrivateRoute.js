import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../auth";
const PrivateRoute = ({ component: Component, ...rest }) => {
  //Bug, need refresh to access /user
  const auth = isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth == true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/?login_modal=1" />
        )
      }
    />
  );
};
export default PrivateRoute;
