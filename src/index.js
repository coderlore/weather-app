import "../dist/style.css";

const content = document.querySelector("#current-condition");
const currentCity = document.createElement("div");
content.appendChild(currentCity);

const currentTemp = document.createElement("div");
content.appendChild(currentTemp);

const currentWeather = document.createElement("div");
content.appendChild(currentWeather);

async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=honolulu&appid=e563f19376073b9fb01a1ef1111b8442&units=imperial", { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);
  currentCity.innerHTML = weatherData.name;
  currentTemp.innerHTML = weatherData.main.temp;
  currentWeather.innerHTML = weatherData.weather[0].main;
}

getWeather();
