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

const dropDownTag = document.getElementById("locationDropdown");

// const dropDownTag = document.querySelectorAll("option").values;

// change location from dropdownmenu
dropDownTag.addEventListener("change", () => {
  site = dropDownTag.value;
  fetchDates();
});

let site = dropDownTag.value;
let parameter = "Level";
let fromDate = "2022-04-11";
let toDate = "2022-04-11";

export const fetchDates = async () => {
  try {
    const response = await fetch(
      `https://data.goteborg.se/RiverService/v1.1/Measurements/8829bff0-535f-4573-a5ab-775d6b20b638/${site}/${parameter}/${fromDate}/${toDate}?format=json`,
    );

    const dateData = await response.json();

    /* console.log(dateData); */
    return dateData;
  } catch (error) {
    console.error("Error", error);
  }
};

fetchDates();

// const date = new Date("year", "month", "day");
// console.log(date);

function formatDate(date) {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
}
const today = new Date();

// One day in seconds
const oneDay = 24 * 60 * 60;

// One month in seconds (approximation)
const oneMonth = Math.round(30.44 * oneDay);

const twoWeeks = 2 * 7 * 24 * 60 * 60 * 1000;
// Three months in seconds
const threeMonths = oneDay * 90;
// console.log(threeMonths);

const dateTwoWeeksAgo = new Date(today.getTime() - twoWeeks);
// console.log(today.getTime());
const dateThreeMonthsAgo = new Date(today.getTime() - threeMonths);
// console.log(today.getTime());
// const dateOneYearAgo = "";

const todaysDate = formatDate(today);
const twoWeeksAgoDate = formatDate(dateTwoWeeksAgo);
const threeMonthsAgoDate = formatDate(dateThreeMonthsAgo);

console.log(todaysDate);
console.log(twoWeeksAgoDate);
console.log(threeMonthsAgoDate);
// const threeMonthsAgo = "";
// const oneYearAgo = "";
