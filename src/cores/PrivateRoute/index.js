import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "services/AuthService";

export function PrivateRoute({ component: Component, ...rest }){
  const auth = isAuthenticated();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="?login_modal=1" />
        )
      }
    />
  );
};
export const AdminRoute = ({ component: Component, ...rest }) => {
    const auth = isAuthenticated(true);
    return (
      <Route
        {...rest}
        render={(props) =>
          auth === true ? <Component {...props} /> : <Redirect to="/admin/login" />
        }
      />
    );
  };
  