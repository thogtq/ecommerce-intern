import { getAccessToken } from "./AuthService";
import * as api from "constants/api";

export function addOrder(cart) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(),
  };
  return fetch(api.SERVER + api.ORDERS, {
    method: "POST",
    headers: header,
    body: JSON.stringify({ products: cart }, (key, value) => {
      if (key === "id") return undefined;
      return value;
    }),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
export function getOrders(filter) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(true),
  };
  let queries = "?";
  for (var key in filter) {
    if (!filter[key]) {
      continue;
    }
    queries += key + "=" + filter[key] + "&";
  }
  return fetch(api.SERVER + api.ORDERS + queries, {
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
export function updateStatus(orderID, status) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(true),
  };
  let query = "?orderID=" + orderID;
  return fetch(api.SERVER + api.ORDERS_STATUS + query, {
    method: "PUT",
    headers: header,
    body: JSON.stringify({ status: status }),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}