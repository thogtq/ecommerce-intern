import * as api from "../constants/api";
import { authenticate, getAccessToken } from "./AuthService";

export function loginAdmin(dispatch, userObject) {
  let header = {
    "Content-Type": "application/json",
  };
  return fetch(api.SERVER + api.ADMIN_LOGIN, {
    method: "POST",
    headers: header,
    body: JSON.stringify(userObject),
  })
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      if (resData.status === "success") {
        authenticate(resData.data, true);
        dispatch({ type: "LOGIN", payload: resData.data });
      } else {
        dispatch({ type: "LOGIN_ERROR", error: resData.error.message });
      }
      return resData;
    })
    .catch((error) => {
      dispatch({ type: "LOGIN_ERROR", error: error });
    });
}
export async function loginUser(dispatch, userObject) {
  let header = {
    "Content-Type": "application/json",
  };
  return fetch(api.SERVER + api.USER_LOGIN, {
    method: "POST",
    headers: header,
    body: JSON.stringify(userObject),
  })
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      if (resData.status === "success") {
        authenticate(resData.data);
        dispatch({ type: "LOGIN", payload: resData.data });
      } else {
        dispatch({ type: "LOGIN_ERROR", error: resData.error.message });
      }
      return resData;
    })
    .catch((error) => {
      dispatch({ type: "LOGIN_ERROR", error: error });
    });
}
export function registerUser(userObject) {
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
export function getUser(isAdmin = false) {
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

export function updateUser(formData, isAdmin = false) {
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
export function updatePassword(formData, isAdmin = false) {
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
export function setLocalUser(userObject) {
  localStorage.setItem("user", JSON.stringify(userObject));
}
export function getLocalUser() {
  return JSON.parse(localStorage.getItem("user"));
}
