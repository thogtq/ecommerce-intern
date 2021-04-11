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
