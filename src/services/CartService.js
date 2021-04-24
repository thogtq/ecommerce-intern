export function loadCart() {
  let cart = localStorage.getItem("cart");
  if (cart === null) {
    return [];
  }
  return JSON.parse(cart);
}

export function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function isExistCartItem(cart, cartItem) {
  let result = -1;
  const omitQuantity = (key, value) => {
    if (key === "quantity") return undefined;
    else if (key === "id") return undefined;
    else return value;
  };
  cart.forEach((item, index) => {
    if (
      JSON.stringify(item, omitQuantity) ===
      JSON.stringify(cartItem, omitQuantity)
    ) {
      result = index;
    }
  });
  return result;
}
export function addToCart(cartDispatch, cart, cartItem) {
  let existCheck = isExistCartItem(cart, cartItem);
  if (existCheck !== -1) {
    let _cart = [...cart];
    _cart[existCheck].quantity += cartItem.quantity;
    cartDispatch({ type: "REPLACE_CART", payload: _cart });
  } else {
    cartDispatch({ type: "ADD_TO_CART", payload: cartItem });
  }
}
