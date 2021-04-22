export const SERVER = "http://localhost:8080";

export const ADMIN_LOGIN = "/api/admin/login";
export const USER_LOGIN = "/api/user/login";
export const USER = "/api/users/";
export const USERS = "/api/users";
export const USER_PASSWORD = "/api/users/password";
export const USER_TOKEN = "/api/users/token";

export const PRODUCT = "/api/products/";
export const PRODUCTS = "/api/products";
export const PRODUCT_IMAGE = "/api/products/image";

export const ORDERS = "/api/orders";
export const ORDERS_STATUS = "/api/orders/status";

export const FETCHING_ERROR = (error) => {
  return {
    status: "error",
    error: {
      httpCode: "500",
      code: "CONNECTION_ERROR",
      message: "fetching error :\n" + error,
    },
  };
};
