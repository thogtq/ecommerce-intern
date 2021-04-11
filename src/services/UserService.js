import * as api from "../constants/api";

const UserService = { login, register, adminLogin };

function adminLogin(userObject) {
  let header = {
    "Content-Type": "application/json",
  };
  return fetch(api.SERVER + api.ADMIN_LOGIN, {
    method: "POST",
    headers: header,
    body: JSON.stringify(userObject),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
function login(userObject) {
  let header = {
    "Content-Type": "application/json",
  };
  return fetch(api.SERVER + api.USER_LOGIN, {
    method: "POST",
    headers: header,
    body: JSON.stringify(userObject),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
function register(userObject) {
  let header = {
    "Content-Type": "application/json",
  };
  return fetch(api.SERVER + api.USER, {
    method: "POST",
    headers: header,
    body: JSON.stringify(userObject),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
export default UserService;
