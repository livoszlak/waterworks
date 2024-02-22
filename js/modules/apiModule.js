export const fetchToday = async () => {
  try {
    const response = await fetch(
      "https://data.goteborg.se/RiverService/v1.1/MeasureSites/8829bff0-535f-4573-a5ab-775d6b20b638?format=json"
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error", error);
  }
};

//fetchToday();

const dropDownTag = document.getElementById("locationDropdown");
const btns = document.querySelectorAll(".dateButton");

let today = new Date();
let todaysDate = formatDate(today);
let todayUnix = Math.floor(today.getTime() / 1000);
let twoWeeksBackUnix = todayUnix - 1209600;
let twoWeeksDate = new Date(twoWeeksBackUnix * 1000);
document.getElementById("weeksBtn").value = formatDate(twoWeeksDate);
let threeMonthsBackUnix = todayUnix - 7776000;
let threeMonthsDate = new Date(threeMonthsBackUnix * 1000);
document.getElementById("monthsBtn").value = formatDate(threeMonthsDate);
let oneYearBackUnix = todayUnix - 31536000;
let oneYearDate = new Date(oneYearBackUnix * 1000);
document.getElementById("yearBtn").value = formatDate(oneYearDate);

// change location from dropdownmenu
dropDownTag.addEventListener("change", () => {
  sessionStorage.setItem("site", dropDownTag.value);
  //site = dropDownTag.value;
  console.log(site);
  fetchDates();
  location.reload();
});

// let fromDate = formatDate(twoWeeksDate);

btns.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("hej");
    sessionStorage.setItem("fromDate", button.value);
    location.reload();
  });
});

if (sessionStorage.getItem("site") == undefined) {
  sessionStorage.setItem("site", "Agnesberg");
  sessionStorage.setItem("fromDate", formatDate(twoWeeksDate));
}
//let site = dropDownTag.value;
let site = sessionStorage.getItem("site");
let parameter = "Level";
// let fromDate = formatDate(
//   today.getTime() - parseInt(sessionStorage.getItem("timespan"))
// );

// let fromDate = twoWeeksBack;

let toDate = todaysDate;
let fromDate = sessionStorage.getItem("fromDate");

// console.log(todaysDate);

export const fetchDates = async () => {
  try {
    const response = await fetch(
      `https://data.goteborg.se/RiverService/v1.1/Measurements/8829bff0-535f-4573-a5ab-775d6b20b638/${site}/${parameter}/${fromDate}/${toDate}?format=json`
    );

    const dateData = await response.json();

    return dateData;
  } catch (error) {
    console.error("Error", error);
  }
};

fetchDates();

function formatDate(date) {
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    date.getDate().toString().padStart(2, "0")
  );
}

// todays date
// const today = new Date();

// one day in seconds
// const oneDay = 24 * 60 * 60;
// // two weeks in seconds
// const twoWeeks = 2 * 7 * 24 * 60 * 60 * 1000;
// // three months in seconds
// const threeMonths = oneDay * 90;
// // console.log(threeMonths);

// const dateTwoWeeksAgo = new Date(today.getTime() - twoWeeks);
// // console.log(today.getTime());
// const dateThreeMonthsAgo = new Date(today.getTime() - threeMonths);

// const twoWeeksAgoDate = formatDate(dateTwoWeeksAgo);
// const threeMonthsAgoDate = formatDate(dateThreeMonthsAgo);
// console.log(twoWeeks);
// console.log(todaysDate);
// console.log(twoWeeksAgoDate);
// console.log(threeMonthsAgoDate);
