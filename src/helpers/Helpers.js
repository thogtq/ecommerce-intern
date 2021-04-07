// import config from "../config/config.json"
export function fetchAPI (apiURL, method, bodyData = "") {
  const requestOptions = {
    method: method,
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(bodyData),
  };
  return fetch(`http://localhost:8080` + apiURL, requestOptions).then(
    (res) => {
      return res.json();
    },
    (error) => {
      return { status: "error", message: "fetching error :\n" + error };
    }
  );
}

export function submitButton(state) {
  if (state === true) {
    let submit = document.getElementById("submit");
    submit.classList.remove("btn-disabled");
    submit.removeAttribute("disabled");
  } else {
    let submit = document.getElementById("submit");
    submit.classList.add("btn-disabled");
    submit.setAttribute("disabled", true);
  }
}
