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
export function parseQuery(object) {
  let query = "?";
  for (var key in object) {
    if (!object[key]) {
      continue;
    }
    query += key + "=" + object[key] + "&";
  }
  return query;
}
