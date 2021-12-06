import "../dist/style.css";

const content = document.querySelector("#content");
const currentCity = document.createElement("div");
content.appendChild(currentCity);

async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=honolulu&appid=e563f19376073b9fb01a1ef1111b8442&units=imperial", { mode: "cors" });
  const weatherData = await response.json();
  const currentCondition = weatherData.weather.main;
  console.log(weatherData);
  console.log(currentCondition);
  currentCity.innerHTML = weatherData.name;
}

getWeather();
