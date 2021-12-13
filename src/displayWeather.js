import { weatherData } from "./getWeather";
import convertTime, { formattedTime } from "./convertTime";

function displayWeather() {
  const content = document.querySelector("#current-condition");

  const currentWeatherIcon = document.createElement("i");
  currentWeatherIcon.classList.add("fas", "fa-cloud");
  content.appendChild(currentWeatherIcon);

  const currentCity = document.createElement("div");
  currentCity.innerHTML = weatherData.name;
  content.appendChild(currentCity);

  const currentTemp = document.createElement("div");
  currentTemp.innerHTML = parseInt(`${weatherData.main.temp}`, 10);
  content.appendChild(currentTemp);

  const currentWeather = document.createElement("div");
  currentWeather.innerHTML = weatherData.weather[0].main;
  content.appendChild(currentWeather);

  // Details section
  const details = document.querySelector("#details");
  const table = document.createElement("table");
  const row1 = document.createElement("tr");

  const feelsLike = document.createElement("td");
  feelsLike.innerHTML = `Feels like: ${weatherData.main.feels_like}\xB0`;
  const maxTemp = document.createElement("td");
  maxTemp.innerHTML = `Maximum temperature: ${weatherData.main.temp_max}\xB0`;
  const minTemp = document.createElement("td");
  minTemp.innerHTML = `Minimum temperature: ${weatherData.main.temp_min}\xB0`;
  const humidity = document.createElement("td");
  humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;
  row1.appendChild(feelsLike);
  row1.appendChild(maxTemp);
  row1.appendChild(minTemp);
  row1.appendChild(humidity);
  table.appendChild(row1);

  const row2 = document.createElement("tr");
  const sunrise = document.createElement("td");
  const sunriseTimeDec = `${weatherData.sys.sunrise}`;
  convertTime(sunriseTimeDec);
  sunrise.innerHTML = `Sunrise: ${formattedTime}`;
  const sunset = document.createElement("td");
  const sunsetTimeDec = `${weatherData.sys.sunset}`;
  convertTime(sunsetTimeDec);
  sunset.innerHTML = `Sunset: ${formattedTime}`;
  const wind = document.createElement("td");
  wind.innerHTML = `Wind: ${weatherData.wind.speed} mph`;
  const pressure = document.createElement("td");
  pressure.innerHTML = `Pressure: ${weatherData.main.pressure}`;
  row2.appendChild(sunrise);
  row2.appendChild(sunset);
  row2.appendChild(wind);
  row2.appendChild(pressure);
  table.appendChild(row2);
  details.appendChild(table);
}

export default displayWeather;
