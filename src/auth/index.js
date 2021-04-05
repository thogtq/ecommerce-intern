export function authenticate(data) {
  if (typeof window != undefined) {
    let jwt = {
      token: data.token,
      refreshToken: data.refreshToken,
    };
    localStorage.setItem("jwt", JSON.stringify(jwt));
  }
}
export function isAuthenticated() {
  let jwt = localStorage.getItem("jwt");
  if (typeof window == undefined || jwt == null) {
    return false;
  }
  return true;
}
export function getAccessToken() {
  return JSON.parse(localStorage.getItem("jwt")).token;
}
export function renewAccessToken() {
  let refreshToken = JSON.parse(localStorage.getItem("jwt")).refreshToken;
  let accessToken = ""; //fetch api to get new jwt
  return accessToken;
}
export function logout() {
  localStorage.removeItem("jwt");
}
