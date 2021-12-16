import { weatherData } from "./getWeather";
import convertTime, { formattedTime } from "./convertTime";

function displayWeather() {
  const content = document.querySelector("#current-condition");

  const currentWeatherIcon = document.createElement("img");
  currentWeatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  content.appendChild(currentWeatherIcon);

  const currentCity = document.createElement("div");
  currentCity.innerHTML = weatherData.name;
  currentCity.id = "current-city";
  content.appendChild(currentCity);

  const currentTemp = document.createElement("div");
  const tempRounded = parseInt(`${weatherData.main.temp}`, 10);
  currentTemp.innerHTML = `Current temperature: ${tempRounded}\xB0`;
  content.appendChild(currentTemp);

  const currentWeather = document.createElement("div");
  currentWeather.innerHTML = weatherData.weather[0].main;
  currentWeather.id = "current-weather";
  content.appendChild(currentWeather);

  // Details section
  const details = document.querySelector("#details");
  const table = document.createElement("table");
  const row1 = document.createElement("tr");

  const feelsLike = document.createElement("td");
  const feelsLikeRounded = parseInt(`${weatherData.main.feels_like}`, 10);
  feelsLike.innerHTML = `Feels like: ${feelsLikeRounded}\xB0`;
  const maxTemp = document.createElement("td");
  const maxTempRounded = parseInt(`${weatherData.main.temp_max}`, 10);
  maxTemp.innerHTML = `Max temperature: ${maxTempRounded}\xB0`;
  const minTemp = document.createElement("td");
  const minTempRounded = parseInt(`${weatherData.main.temp_min}`, 10);
  minTemp.innerHTML = `Min temperature: ${minTempRounded}\xB0`;
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
  const windRounded = parseInt(`${weatherData.wind.speed}`, 10);
  wind.innerHTML = `Wind: ${windRounded} mph`;
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
