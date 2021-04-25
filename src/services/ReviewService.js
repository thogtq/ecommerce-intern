import * as api from "constants/api";
import { parseQuery } from "helpers/helpers";
import { getAccessToken } from 'services/AuthService';

export function addReview(review) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(),
  };
  return fetch(api.SERVER + api.REVIEW + "?productID=" + review.productID, {
    method: "POST",
    headers: header,
    body: JSON.stringify(review),
  }).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return api.FETCHING_ERROR(error);
    }
  );
}
export function getReviews(filter) {
  let header = {
    "Content-Type": "application/json",
  };
  return fetch(api.SERVER + api.REVIEWS + parseQuery(filter), {
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
export function deleteReview(reviewID) {
  let header = {
    "Content-Type": "application/json",
    token: getAccessToken(),
  };
  return fetch(api.SERVER + api.REVIEW + "?reviewID=" + reviewID, {
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
