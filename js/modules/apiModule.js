export const fetchToday = async () => {
  try {
    const response = await fetch(
      "https://data.goteborg.se/RiverService/v1.1/MeasureSites/8829bff0-535f-4573-a5ab-775d6b20b638?format=json",
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error", error);
  }
};

fetchToday();

// const dropDownTag = document.getElementById("locationDropdown");

// // change location from dropdownmenu
// dropDownTag.addEventListener("change", () => {
//   site = dropDownTag.value;
//   console.log(site);
//   fetchDates();
// });

export const fetchDates = async (date, place) => {
  try {
    let today = new Date();
    let todaysDate = formatDate(today);
    console.log(date);
    console.log(place);
    // let todayUnix = Math.floor(today.getTime() / 1000);
    // let twoWeeksBackUnix = todayUnix - 1209600;
    // let twoWeeksDate = new Date(twoWeeksBackUnix * 1000);

    let site = place;
    let parameter = "Level";

    let fromDate = date;
    let toDate = todaysDate;
    const response = await fetch(
      `https://data.goteborg.se/RiverService/v1.1/Measurements/8829bff0-535f-4573-a5ab-775d6b20b638/${site}/${parameter}/${fromDate}/${toDate}?format=json`,
    );

    let dateData = await response.json();

    return dateData;
  } catch (error) {
    console.error("Error", error);
  }
};

// fetchDates();

// const date = new Date("year", "month", "day");
// console.log(date);

export function formatDate(date) {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
}

/* window.onload = function () { */
const btns = document.querySelectorAll("dateButton");
/*   const weeksBtn = document.querySelector("weeksBtn");
  const monthsBtn = document.querySelector("monthsBtn");
  const yearBtn = document.querySelector("yearBtn"); */
const dropDownTag = document.getElementById("locationDropdown");

dropDownTag.addEventListener("change", () => {
  let site = dropDownTag.value;
  console.log(site);
  fetchDates();
});

// btns.forEach(button, function () {
//   button.addEventListener("click", () => {});
// });

const weeksBtn = document.querySelector("#weeksBtn");
const monthsBtn = document.querySelector("#monthsBtn");
const yearBtn = document.querySelector("#yearBtn");

weeksBtn.addEventListener("click", () => {
  let today = new Date();
  let todaysDate = formatDate(today);
  let todayUnix = Math.floor(today.getTime() / 1000);
  let twoWeeksBackUnix = todayUnix - parseInt(weeksBtn.value);
  console.log(twoWeeksBackUnix);
  let twoWeeksDate = new Date(twoWeeksBackUnix * 1000);
  console.log(formatDate(twoWeeksDate));
  let date = formatDate(twoWeeksDate);
  let site = dropDownTag.value;

  // let fromDate = formatDate(date);

  // let twoWeeksbackUnix = dateUnix -;
  // console.log(twoWeeksbackUnix);
  console.log(weeksBtn.value);

  fetchDates(date, site);
});
/* }; */
