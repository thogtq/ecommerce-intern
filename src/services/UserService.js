import {fetchAPI} from "helpers/Helpers";

const UserService = { login, register, adminLogin };

function adminLogin(userObject) {
  return fetchAPI("/api/admin/login", "POST", userObject);
}
function login(userObject) {
  return fetchAPI("/api/user/login", "POST", userObject);
}
function register(userObject) {
  return fetchAPI("/api/user", "POST", userObject);
}
export default UserService;
