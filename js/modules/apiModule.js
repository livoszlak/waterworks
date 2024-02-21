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

// change location from dropdownmenu
dropDownTag.addEventListener("change", () => {
  site = dropDownTag.value;
  console.log(site);
  fetchDates();
});

let today = new Date();
let todaysDate = formatDate(today);

let site = dropDownTag.value;
let parameter = "Level";

let fromDate = "2023-12-01";

let toDate = todaysDate;

console.log(todaysDate);

export const fetchDates = async () => {
  try {
    const response = await fetch(
      `https://data.goteborg.se/RiverService/v1.1/Measurements/8829bff0-535f-4573-a5ab-775d6b20b638/${site}/${parameter}/${fromDate}/${toDate}?format=json`,
    );

    const dateData = await response.json();

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
