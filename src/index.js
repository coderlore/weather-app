import { min } from "lodash";
import "../dist/style.css";
import getWeather from "./getWeather";

export let cityURL = "honolulu";
// Forecast Section
const forecast = document.querySelector("#forecast");
const forecastTable = document.createElement("table");
const forecastRow = document.createElement("tr");
const day1Weather = document.createElement("td");
const day2Weather = document.createElement("td");
const day3Weather = document.createElement("td");

forecastRow.appendChild(day1Weather);
forecastRow.appendChild(day2Weather);
forecastRow.appendChild(day3Weather);
forecastTable.appendChild(forecastRow);
forecast.appendChild(forecastTable);

const forecastIcon = document.createElement("tr");
const cell1 = document.createElement("td");
const cell2 = document.createElement("td");
const cell3 = document.createElement("td");
const day1Icon = document.createElement("i");
const day2Icon = document.createElement("i");
const day3Icon = document.createElement("i");
day1Icon.classList.add("fas", "fa-cloud");
day2Icon.classList.add("fas", "fa-cloud-showers-heavy");
day3Icon.classList.add("fas", "fa-cloud-showers-heavy");

cell1.appendChild(day1Icon);
forecastIcon.appendChild(cell1);
cell2.appendChild(day2Icon);
forecastIcon.appendChild(cell2);
cell3.appendChild(day3Icon);
forecastIcon.appendChild(cell3);
forecastTable.appendChild(forecastIcon);
forecast.appendChild(forecastTable);

async function getAllWeather() {
  const data = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=21.3069&lon=-157.8583&appid=e563f19376073b9fb01a1ef1111b8442&units=imperial", { mode: "cors" });
  const dataAll = await data.json();
  day1Weather.innerHTML = dataAll.daily[1].weather[0].main;
  day2Weather.innerHTML = dataAll.daily[2].weather[0].main;
  day3Weather.innerHTML = dataAll.daily[3].weather[0].main;
  // console.log(dataAll);
}
getAllWeather();

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
    getWeather();
  }
});
