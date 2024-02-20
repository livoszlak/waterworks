export const fetchToday = async () => {
  try {
    const response = await fetch(
      "https://data.goteborg.se/RiverService/v1.1/MeasureSites/8829bff0-535f-4573-a5ab-775d6b20b638?format=json"
    );
    const data = await response.json();

    /*     console.log(data);

    data.forEach((element) => {
      console.log(element.MeasureParameters[0]["CurrentValue"]);
    }); */

    return data;
  } catch (error) {
    console.error("Error", error);
  }
};

fetchToday();

export const fetchDates = async () => {
  try {
    let site = "Garda";
    let parameter = "Level";
    let fromDate = "2022-04-11";
    let toDate = "2022-07-11";

    const response = await fetch(
      `https://data.goteborg.se/RiverService/v1.1/Measurements/8829bff0-535f-4573-a5ab-775d6b20b638/${site}/${parameter}/${fromDate}/${toDate}?format=json`
    );

    const dateData = await response.json();

    /* console.log(dateData); */
    return dateData;
  } catch (error) {
    console.error("Error", error);
  }
};

fetchDates();
