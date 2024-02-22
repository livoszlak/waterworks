import { fetchDates } from "./apiModule.js";

const measureSites = [
  { key: "Agnesberg", value: 0 },
  { key: "Arketjarn", value: 54.54 },
  { key: "Eriksberg", value: 0 },
  { key: "Garda", value: 1.25 },
  { key: "Harsjo", value: 89.46 },
  { key: "Kalleredsbacken", value: 7.76 },
  { key: "Landvatter", value: 54.54 },
  { key: "Levgrensvagen", value: 1.25 },
  { key: "Larjean", value: 0 },
  { key: "MolndalCentrum", value: 1.25 },
  { key: "Nedsjon", value: 0 },
  { key: "Rada", value: 49.14 },
  { key: "Skars led", value: 1.25 },
  { key: "Slussen", value: 1.25 },
  { key: "Stensjon", value: 49.14 },
  { key: "Tingstad", value: 0 },
  { key: "Torshamnen", value: 0 },
];

var measureSite = sessionStorage.getItem("site");

function findValueByKey(measureSite) {
  for (let i = 0; i < measureSites.length; i++) {
    if (measureSites[i].key === measureSite) {
      return measureSites[i].value;
    }
  }
}

var modifier = findValueByKey(measureSite);

export async function createLineChart() {
  const lineData = await fetchDates();

  var dataArray = [];
  lineData.forEach((element) => {
    dataArray.push(element["Value"] - modifier);
  });

  var labels = [];
  for (let i = 1; i < dataArray.length + 1; i++) {
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
          data: dataArray,
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
}

createLineChart();
