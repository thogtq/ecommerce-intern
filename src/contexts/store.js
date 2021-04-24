import React, { useReducer } from "react";
import { getAccessToken } from "services/AuthService";
import { getLocalUser } from "services/UserService";
import { AuthReducer, CartReducer } from "./reducer";
import { loadCart } from "services/CartService";

const authInitialState = {
  token: "" || getAccessToken(),
  user: "" || getLocalUser(),
  error: "",
};
export const AuthContext = React.createContext(authInitialState);
export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, authInitialState);
  return (
    <AuthContext.Provider value={[authState, authDispatch]}>
      {children}
    </AuthContext.Provider>
  );
};

const authAdminInitialState = {
  token: "" || getAccessToken(true),
  user: "" || getLocalUser(),
  error: "",
};
export const AuthAdminContext = React.createContext(authAdminInitialState);
export const AuthAdminProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(
    AuthReducer,
    authAdminInitialState
  );
  return (
    <AuthAdminContext.Provider value={[authState, authDispatch]}>
      {children}
    </AuthAdminContext.Provider>
  );
};

const cartInitialState = [
  ...loadCart(),
];
export const CartContext = React.createContext(cartInitialState);
export const CartProvider = ({ children }) => {
  const [cart, cartDispatch] = useReducer(CartReducer, cartInitialState);
  return (
    <CartContext.Provider value={[cart, cartDispatch]}>
      {children}
    </CartContext.Provider>
  );
};
