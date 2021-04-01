import helpers from "../helpers/Helper"

const userService = { login, register };

function login(userObject) {
  return helpers.fetchAPI("/api/user/login","POST",userObject)
}
function register(userObject) {
  return helpers.fetchAPI("/api/user","POST",userObject)
}
export default userService;
