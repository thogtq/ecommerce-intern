import * as api from "../constants/api";
const jwtDefaultName = "jwt";
const jwtAdminName = "jwt_admin";
const AuthService = { authenticate, isAuthenticated, getAccessToken, logout };
export default AuthService;
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
      return false;
    }
    getNewToken();
  }
  return true;
}
export function authenticate(data, admin = false) {
  if (typeof window != undefined) {
    let jwtName = jwtDefaultName;
    if (admin) {
      jwtName = jwtAdminName;
    }
    let jwtResponse = {
      token: data.token,
      refreshToken: data.refreshToken,
      expiredAt: data.expiredAt,
    };
    localStorage.setItem(jwtName, JSON.stringify(jwtResponse));
  }
}
async function fetchUserToken() {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(),
    refreshToken: getRefreshToken(),
  };
  return await fetch(api.SERVER + api.USER_TOKEN, {
    method: "GET",
    headers: header,
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return error;
    }
  );
}
function getJwtObject(jwtName) {
  let jwtText = localStorage.getItem(jwtName);
  if (!jwtText) return false;
  return JSON.parse(jwtText);
}
const getNewToken = async () => {
  let res = await fetchUserToken();
  if (res.status === "success") {
    res.data.refreshToken = getRefreshToken();
    authenticate(res.data);
  } else {
    logout();
  }
};
export function getAccessToken(admin = false) {
  let jwtName = jwtDefaultName;
  if (admin) {
    jwtName = jwtAdminName;
  }
  return JSON.parse(localStorage.getItem(jwtName)).token;
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
}
