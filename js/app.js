import { fetchDates } from "./modules/apiModule";

window.onload = function () {
  const btns = document.querySelectorAll("dateButton");
  /*   const weeksBtn = document.querySelector("weeksBtn");
  const monthsBtn = document.querySelector("monthsBtn");
  const yearBtn = document.querySelector("yearBtn"); */
  const dropDownTag = document.getElementById("locationDropdown");

  dropDownTag.addEventListener("change", () => {
    site = dropDownTag.value;
  });

  btns.forEach(button, function () {
    button.addEventListener("click", () => {});
  });
};
