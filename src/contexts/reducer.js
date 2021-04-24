import { loadCart, saveCart } from "services/CartService";

const authInitialState = {
  token: "",
  user: "",
  error: "",
};
export const AuthReducer = (authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...authState,
        token: action.payload.token,
        user: action.payload.user,
        error: "",
      };
    case "LOGOUT":
      return {
        ...authInitialState,
      };
    case "LOGIN_ERROR":
      return {
        ...authInitialState,
        error: action.error,
      };
    case "DEFAULT":
      return {
        ...authInitialState,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const CartReducer = (cartState, action) => {
  const { payload, type } = action;
  let newState = [];
  switch (type) {
    case "ADD_TO_CART":
      newState = [...cartState, payload];
      break;
    case "REPLACE_CART":
      newState = [...payload];
      break;
    case "REMOVE_CART_ITEM":
      newState = cartState.filter((cartItem) => cartItem.id !== payload.id);
      break;
    case "UPDATE_CART_ITEM":
      newState = cartState.map((cartItem) => {
        if (cartItem.id === payload.id) {
          return { ...cartItem, ...payload.update };
        } else {
          return { ...cartItem };
        }
      });
      break;
    case "EMPTY_CART":
      newState = [];
      break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
  saveCart(newState);
  return newState;
};
