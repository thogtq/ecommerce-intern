import * as api from "../constants/api";
import { getAccessToken } from "./AuthService";

const UserService = {
  login,
  register,
  adminLogin,
  getUser,
  updateUser,
  updatePassword,
};
export default UserService;

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
function getUser(isAdmin = false) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(isAdmin),
  };
  return fetch(api.SERVER + api.USER, {
    method: "GET",
    headers: header,
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}

function updateUser(formData, isAdmin = false) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(isAdmin),
  };
  return fetch(api.SERVER + api.USER, {
    method: "PUT",
    headers: header,
    body: JSON.stringify(formData),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
function updatePassword(formData, isAdmin = false) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(isAdmin),
  };
  return fetch(api.SERVER + api.USER_PASSWORD, {
    method: "PUT",
    headers: header,
    body: JSON.stringify(formData),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
