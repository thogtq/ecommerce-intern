import AuthService from "./AuthService";
import * as api from "constants/api";

const ProductService = {
  uploadImage,
  getImageURL,
  getTempImageURL,
  addProduct,
  getProducts,
};
export default ProductService;

function getTempImageURL(fileName) {
  return api.SERVER + api.PRODUCT_TEMP_IMAGE + "/" + fileName;
}
function getImageURL(fileName) {
  return api.SERVER + api.PRODUCT_IMAGE + "/" + fileName;
}
function uploadImage(image) {
  let header = {
    token: AuthService.getAccessToken(true),
  };
  return fetch(api.SERVER + api.PRODUCT_IMAGE, {
    method: "POST",
    headers: header,
    body: image,
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
function addProduct(productData) {
  let header = {
    "Content-Type": "application/json",
    token: AuthService.getAccessToken(true),
  };
  return fetch(api.SERVER + api.PRODUCT, {
    method: "POST",
    headers: header,
    body: JSON.stringify(productData),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
function getProducts(filter) {
  let header = {
    "Content-Type": "application/json",
  };
  let queries = "/?";
  for (var key in filter) {
    if (!filter[key]) {
      continue;
    }
    queries += key + "=" + filter[key] + "&";
  }
  return fetch(api.SERVER + api.PRODUCTS + queries, {
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
