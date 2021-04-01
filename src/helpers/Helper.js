const helpers = {
  submitButton: function (state) {
    if (state == true) {
      let submit = document.getElementById("submit");
      submit.classList.remove("btn-disabled");
      submit.removeAttribute("disabled");
    } else {
      let submit = document.getElementById("submit");
      submit.classList.add("btn-disabled");
      submit.setAttribute("disabled", true);
    }
  },
  fetchAPI: function (apiURL, method, bodyData = "") {
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
  },
};

export default helpers;
