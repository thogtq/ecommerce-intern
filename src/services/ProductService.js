import {getAccessToken} from "./AuthService";
import * as api from "constants/api";

export function uploadImage(image) {
  let header = {
    token: getAccessToken(true),
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
export function updateProduct(productData) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(true),
  };
  return fetch(api.SERVER + api.PRODUCT, {
    method: "PUT",
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
export function addProduct(productData) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(true),
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
export function getProducts(filter) {
  let header = {
    "Content-Type": "application/json",
  };
  let queries = "?";
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
export function getProduct(productID) {
  let header = {
    "Content-Type": "application/json",
  };
  return fetch(api.SERVER + api.PRODUCT + "?productID=" + productID, {
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
export function deleteProduct(productID) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(true),
  };
  return fetch(api.SERVER + api.PRODUCT + "?productID=" + productID, {
    method: "DELETE",
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
