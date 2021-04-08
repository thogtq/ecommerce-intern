import AuthService from "./AuthService";
import { fetchAPI } from "helpers/Helpers";

const ProductService = { uploadImage };
export default ProductService;

const uploadImage = ($image) => {
  let header = {
    token: AuthService.getAccessToken(true),
  };
  return fetchAPI("/api/product/image", "POST", $image, header);
};
