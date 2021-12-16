import displayFullForecast from "./displayFullForecast";
import { weatherData } from "./getWeather";

export let fullForecastData = "";

async function getFullForecast() {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=e563f19376073b9fb01a1ef1111b8442&units=imperial`, { mode: "cors" });
  fullForecastData = await data.json();
  displayFullForecast();
  // console.log(fullForecastData);
}

export default getFullForecast;
