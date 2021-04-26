import * as api from "../constants/api";
const jwtDefaultName = "jwt";
const jwtAdminName = "jwt_admin";

export function authenticate(data, admin = false) {
  if (typeof window != undefined) {
    let jwtName = jwtDefaultName;
    if (admin) {
      jwtName = jwtAdminName;
    }
    let jwt = {
      token: data.token,
      refreshToken: data.refreshToken,
      expiredAt: data.expiredAt,
    };
    localStorage.setItem(jwtName, JSON.stringify(jwt));
    localStorage.setItem("user", JSON.stringify(data.user));
  }
}
function getJwtObject(jwtName) {
  let jwtText = localStorage.getItem(jwtName);
  if (!jwtText) return false;
  return JSON.parse(jwtText);
}

export function getAccessToken(admin = false) {
  let jwtName = jwtDefaultName;
  if (admin) {
    jwtName = jwtAdminName;
  }
  return localStorage.getItem(jwtName)
    ? JSON.parse(localStorage.getItem(jwtName)).token
    : "";
}
export function getRefreshToken() {
  let jwt = localStorage.getItem("jwt");
  if (!jwt) return false;
  return JSON.parse(jwt).refreshToken;
}
export function logout(admin = false) {
  let jwtName = jwtDefaultName;
  if (admin) {
    jwtName = jwtAdminName;
  }
  localStorage.removeItem(jwtName);
  localStorage.removeItem("user");
}

export function isAuthenticated(admin = false) {
  let jwtName = jwtDefaultName;
  if (admin) {
    jwtName = jwtAdminName;
  }
  let jwt = getJwtObject(jwtName);
  if (typeof window == undefined || jwt === false) {
    return false;
  }
  if (jwt.expiredAt < new Date().getTime() / 1000) {
    if (admin === true) {
      logout(true);
      return false;
    }
    const fetch = async () => {
      await renewAccessToken();
    };
    return fetch();
  }
  return true;
}

async function renewAccessToken() {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(),
    refreshToken: getRefreshToken(),
  };
  return await fetch(api.SERVER + api.USER_TOKEN, {
    method: "GET",
    headers: header,
  })
    .then((res) => {
      return res.json();
    })
    .then((resData) => {
      if (resData.status === "success") {
        authenticate(resData.data);
        return true;
      } else {
        logout();
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
      logout();
      return false;
    });
}
