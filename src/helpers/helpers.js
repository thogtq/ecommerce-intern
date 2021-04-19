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
    else if (key == "id") return undefined;
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
export function debounce(func, wait, immediate) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
