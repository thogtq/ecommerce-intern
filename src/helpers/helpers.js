export function submitButton(state) {
  let submit = document.getElementById("submit");
  if (submit === null) {
    return;
  }
  if (state === true) {
    submit.classList.remove("btn-disabled");
    submit.removeAttribute("disabled");
  } else {
    submit.classList.add("btn-disabled");
    submit.setAttribute("disabled", true);
  }
}
export function loadCart() {
  let cart = localStorage.getItem("cart");
  if (cart == null) {
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
    if (key == "quantity") return undefined;
    else return value;
  };
  cart.map((item, index) => {
    if (
      JSON.stringify(item, omitQuantity) ==
      JSON.stringify(cartItem, omitQuantity)
    ) {
      result = index;
    }
  });
  return result;
}
