import displayWeather from "./displayWeather";
import getFullForecast from "./getFullForecast";
import { cityURL } from "./index";

export let weatherData = "";

async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityURL}&appid=e563f19376073b9fb01a1ef1111b8442&units=imperial`, { mode: "cors" });
  weatherData = await response.json();
  displayWeather();
  getFullForecast();
  // console.log(cityURL);
  // console.log(weatherData);
}

export default getWeather;
