import { getweather } from "./weather";

export const validationForm = (() => {
  let _form = document.querySelector(".search > form");
  _form.addEventListener("submit", processForm);
  let city = document.querySelector("#city");

  function processForm(e) {
    e.preventDefault();
    getweather(city.value);
  }

})();
