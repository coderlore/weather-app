import { fullForecastData } from "./getFullForecast";

function displayFullForecast() {
  const forecast = document.querySelector("#forecast");
  const forecastTable = document.createElement("table");
  const forecastRow = document.createElement("tr");
  const day1Weather = document.createElement("td");
  const day2Weather = document.createElement("td");
  const day3Weather = document.createElement("td");

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
