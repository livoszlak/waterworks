import { fetchDates } from "./modules/apiModule";
import { createLineChart } from "./modules/lineChartModule";

const btns = document.querySelectorAll("dateButton");
const dropDownTag = document.getElementById("locationDropdown");

// dropDownTag.addEventListener("change", () => {
//   site = dropDownTag.value;
//   console.log(site);
//   fetchDates();
//   location.reload();
// });

// btns.forEach(button, function () {
//   button.addEventListener("click", () => {});
// });

// if (sessionStorage.getItem("site") == undefined) {
//   sessionStorage.setItem("site", "Agnesberg");
// }
