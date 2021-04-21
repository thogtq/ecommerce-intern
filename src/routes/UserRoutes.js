import { Switch } from "react-router";
import UserPage from '../pages/UserPage/UserPage';
import { PrivateRoute } from 'cores/PrivateRoute';

export default function UserRoutes() {
  return (
    <Switch>
      <PrivateRoute path="/user" component={UserPage}></PrivateRoute>
    </Switch>
  );
}
