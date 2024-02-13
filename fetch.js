const fetchData = async () => {
  try {
    const response = await fetch(
      "https://data.goteborg.se/RiverService/v1.1/MeasureSites/8829bff0-535f-4573-a5ab-775d6b20b638?format=json",
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error", error);
  }
};

fetchData();
