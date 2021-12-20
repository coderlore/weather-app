import { fullForecastData } from "./getFullForecast";
import convertTime, { day } from "./convertTime";

function displayFullForecast() {
  const forecast = document.querySelector("#forecast");
  const forecastTable = document.createElement("table");

  const forecastDate = document.createElement("tr");
  forecastDate.classList.add("forecast-output");
  const date1 = document.createElement("td");
  date1.classList.add("forecast-details");
  const date2 = document.createElement("td");
  date2.classList.add("forecast-details");
  const date3 = document.createElement("td");
  date3.classList.add("forecast-details");
  const date1Dec = `${fullForecastData.daily[1].dt}`;
  convertTime(date1Dec);
  date1.innerHTML = `${day}`;
  const date2Dec = `${fullForecastData.daily[2].dt}`;
  convertTime(date2Dec);
  date2.innerHTML = `${day}`;
  const date3Dec = `${fullForecastData.daily[3].dt}`;
  convertTime(date3Dec);
  date3.innerHTML = `${day}`;

  forecastDate.appendChild(date1);
  forecastDate.appendChild(date2);
  forecastDate.appendChild(date3);
  forecastTable.appendChild(forecastDate);
  forecast.appendChild(forecastTable);

  const forecastRow = document.createElement("tr");
  forecastRow.classList.add("forecast-output");
  const day1Weather = document.createElement("td");
  day1Weather.classList.add("forecast-details");
  const day2Weather = document.createElement("td");
  day2Weather.classList.add("forecast-details");
  const day3Weather = document.createElement("td");
  day3Weather.classList.add("forecast-details");

  forecastTable.id = "forecast-table";
  day1Weather.innerHTML = fullForecastData.daily[1].weather[0].main;
  day2Weather.innerHTML = fullForecastData.daily[2].weather[0].main;
  day3Weather.innerHTML = fullForecastData.daily[3].weather[0].main;

  forecastRow.appendChild(day1Weather);
  forecastRow.appendChild(day2Weather);
  forecastRow.appendChild(day3Weather);
  forecastTable.appendChild(forecastRow);
  forecast.appendChild(forecastTable);

  const forecastIcon = document.createElement("tr");
  forecastIcon.classList.add("forecast-output");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  const cell3 = document.createElement("td");
  const day1Icon = document.createElement("img");
  const day2Icon = document.createElement("img");
  const day3Icon = document.createElement("img");
  day1Icon.src = `http://openweathermap.org/img/wn/${fullForecastData.daily[1].weather[0].icon}@2x.png`;
  day2Icon.src = `http://openweathermap.org/img/wn/${fullForecastData.daily[2].weather[0].icon}@2x.png`;
  day3Icon.src = `http://openweathermap.org/img/wn/${fullForecastData.daily[3].weather[0].icon}@2x.png`;

  cell1.appendChild(day1Icon);
  forecastIcon.appendChild(cell1);
  cell2.appendChild(day2Icon);
  forecastIcon.appendChild(cell2);
  cell3.appendChild(day3Icon);
  forecastIcon.appendChild(cell3);
  forecastTable.appendChild(forecastIcon);
  forecast.appendChild(forecastTable);
}

export default displayFullForecast;
