import { fetchDates } from "./apiModule.js";

(async function () {
  const lineData = await fetchDates();

  var threeMonths = [];
  lineData.forEach((element) => {
    threeMonths.push(element["Value"]);
  });

  var labels = [];
  for (let i = 1; i < threeMonths.length + 1; i++) {
    labels.push(i);
  }
  console.log(labels);

  new Chart(document.getElementById("data"), {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Water levels",
          backgroundColor: "rgb(255,   99,   132)",
          borderColor: "rgb(255,   99,   132)",
          data: threeMonths,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
})();
