import helpers from "../helpers/Helper";

const UserService = { login, register, adminLogin };

function adminLogin(userObject) {
  return helpers.fetchAPI("/api/admin/login", "POST", userObject);
}
function login(userObject) {
  return helpers.fetchAPI("/api/user/login", "POST", userObject);
}
function register(userObject) {
  return helpers.fetchAPI("/api/user", "POST", userObject);
}
export default UserService;
