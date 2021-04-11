export const SERVER = "http://localhost:8080";
export const PRODUCT_IMAGE = "/api/product/image";
export const PRODUCT_TEMP_IMAGE = "/api/product/temp";
export const ADMIN_LOGIN = "/api/admin/login";
export const USER_LOGIN = "/api/user/login";
export const USER = "/api/user";
export const PRODUCT = "/api/product"
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
