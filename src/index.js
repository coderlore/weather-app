import { min } from "lodash";
import "../dist/style.css";

const content = document.querySelector("#current-condition");
const currentCity = document.createElement("div");
content.appendChild(currentCity);

const currentTemp = document.createElement("div");
content.appendChild(currentTemp);

const currentWeather = document.createElement("div");
content.appendChild(currentWeather);

// Details section
const details = document.querySelector("#details");
const table = document.createElement("table");
const row1 = document.createElement("tr");
const feelsLike = document.createElement("td");
const maxTemp = document.createElement("td");
const minTemp = document.createElement("td");
const humidity = document.createElement("td");
row1.appendChild(feelsLike);
row1.appendChild(maxTemp);
row1.appendChild(minTemp);
row1.appendChild(humidity);
table.appendChild(row1);

const row2 = document.createElement("tr");
const sunrise = document.createElement("td");
const sunset = document.createElement("td");
const wind = document.createElement("td");
const pressure = document.createElement("td");
row2.appendChild(sunrise);
row2.appendChild(sunset);
row2.appendChild(wind);
row2.appendChild(pressure);
table.appendChild(row2);
details.appendChild(table);

async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=honolulu&appid=e563f19376073b9fb01a1ef1111b8442&units=imperial", { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);
  currentCity.innerHTML = weatherData.name;
  currentTemp.innerHTML = weatherData.main.temp;
  currentWeather.innerHTML = weatherData.weather[0].main;
  feelsLike.innerHTML = `Feels like: ${weatherData.main.feels_like}`;
  maxTemp.innerHTML = `Maximum temperature: ${weatherData.main.temp_max}`;
  minTemp.innerHTML = `Minimum temperature: ${weatherData.main.temp_min}`;
  humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;
  sunrise.innerHTML = `Sunrise: ${weatherData.sys.sunrise}`;
  sunset.innerHTML = `Sunset: ${weatherData.sys.sunset}`;
  wind.innerHTML = `Wind: ${weatherData.wind.speed}`;
  pressure.innerHTML = `Pressure: ${weatherData.main.pressure}`;
}

async function getAllWeather() {
  const data = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=21.3069&lon=-157.8583&exclude=minutely&appid=e563f19376073b9fb01a1ef1111b8442", { mode: "cors" });
  const dataAll = data.json();
  console.log(dataAll);
}
getAllWeather();

getWeather();
