import { min } from "lodash";
import "../dist/style.css";
import getWeather from "./getWeather";
import getFullForecast from "./getFullForecast";

export let cityURL = "honolulu";

// getFullForecast();
getWeather();

/* function cityValidator(cityName) {
  return cityName.charAt(0).toUpperCase() + cityName.slice(1);
} */

const searchBtn = document.querySelector("#search-btn");
const search = document.querySelector("#search");
searchBtn.addEventListener("click", () => {
  const city = search.value;
  if (city === "") {
    alert("Invalid input. Try again!");
  } else {
    cityURL = encodeURIComponent(city.trim());
    const details = document.querySelector("#details");
    details.removeChild(details.childNodes[0]);

    const currentCondtion = document.querySelector("#current-condition");
    const currentCity = document.querySelector("#current-city");
    const currentWeather = document.querySelector("#current-weather");
    currentCondtion.removeChild(currentCondtion.childNodes[0]);
    currentCondtion.removeChild(currentCondtion.childNodes[1]);
    currentCondtion.removeChild(currentCity);
    currentCondtion.removeChild(currentWeather);

    const forecast = document.querySelector("#forecast");
    const forecastTable = document.querySelector("forecast-table");
    forecast.removeChild(forecast.childNodes[0]);

    getWeather();
  }
});
