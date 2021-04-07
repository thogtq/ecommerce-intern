const jwtDefaultName = "jwt";
const jwtAdminName = "jwt_admin";
export function authenticate(data, admin = false) {
  if (typeof window != undefined) {
    let jwtName = jwtDefaultName;
    if (admin) {
      jwtName = jwtAdminName;
    }
    let jwtResponse = {
      token: data.token,
      refreshToken: data.refreshToken,
    };
    localStorage.setItem(jwtName, JSON.stringify(jwtResponse));
  }
}
export function isAuthenticated(admin = false) {
  let jwtName = jwtDefaultName;
  if (admin) {
    jwtName = jwtAdminName;
  }
  let jwt = localStorage.getItem(jwtName);
  if (typeof window == undefined || jwt == null) {
    return false;
  }
  return true;
}
export function getAccessToken(admin = false) {
  let jwtName = jwtDefaultName;
  if (admin) {
    jwtName = jwtAdminName;
  }
  return JSON.parse(localStorage.getItem(jwtName)).token;
}
// export function renewAccessToken() {
//   let refreshToken = JSON.parse(localStorage.getItem(jwtDefaultName))
//     .refreshToken;
//   let accessToken = ""; //fetch api to get new jwt
//   return accessToken;
// }
export function logout(admin = false) {
  let jwtName = jwtDefaultName;
  if (admin) {
    jwtName = jwtAdminName;
  }
  localStorage.removeItem(jwtName);
}
