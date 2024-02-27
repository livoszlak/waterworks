import { fetchToday } from "./js/modules/apiModule.js";
const data = await fetchToday();

// display today's water level by location in a bar chart
(async function () {
  var today = [];

  data.forEach((element) => {
    today.push({
      location: element.Description,
      level: element.MeasureParameters[0]["CurrentValue"],
    });
  });

  new Chart(document.getElementById("data"), {
    type: "bar",
    data: {
      labels: today.map((row) => row.location),
      datasets: [
        {
          label: "Water level today",
          data: today.map((row) => row.level),
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
})();
