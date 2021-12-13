import displayWeather from "./displayWeather";

export let weatherData = "";

async function getWeather() {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=honolulu&appid=e563f19376073b9fb01a1ef1111b8442&units=imperial", { mode: "cors" });
  weatherData = await response.json();
  displayWeather();
  // console.log(weatherData);
}

export default getWeather;
