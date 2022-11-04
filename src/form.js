import { getweather } from "./weather";

export const Form = (() => {
  let _form = document.querySelector(".search > form");
  _form.addEventListener("submit", processForm);
  let city = document.querySelector("#city");
  let errorMsg = document.querySelector('.error')

  function showError() {
    errorMsg.classList.remove('hidden')
  }

  function processForm(e) {
    e.preventDefault();
    getweather(city.value)
    errorMsg.classList.add('hidden')
  }
  return { showError };
})();
