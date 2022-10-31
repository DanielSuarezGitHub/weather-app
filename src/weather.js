import { fromUnixTime } from "date-fns";

async function getweather(city) {
  let response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=00d5d7663e47cc4b2303d054f78d8e8f`
  );
  let weather = await response.json();
  weather = handleWeather(weather);
  let weatherSimplified = weather;
  weatherSimplified.timezone = convert.time(weatherSimplified.timezone);
  weatherSimplified.country = convert.country(weatherSimplified.country);
  weatherSimplified.temp = convert.kelvinToCelsius(weatherSimplified.temp);
  weatherSimplified.feels_like = convert.kelvinToCelsius(
    weatherSimplified.feels_like
  );
  return weatherSimplified;
}

function handleWeather(weatherObject) {
  return {
    name: weatherObject.name,
    country: weatherObject.sys.country,
    temp: weatherObject.main.temp,
    conditions: weatherObject.weather[0].description,
    timezone: weatherObject.timezone,
    windspeed: weatherObject.wind.speed,
    humidity: weatherObject.main.humidity,
    feels_like: weatherObject.main.feels_like,
  };
}

const convert = (() => {
  const country = (countryCode) => {
    const Countryconverter = new Intl.DisplayNames([], { type: "region" });
    return Countryconverter.of(countryCode);
  };

  const kelvinToCelsius = (temperatureKelvin) => {
    return Math.round(temperatureKelvin - 273.15);
  };

  const time = (timeoffset) => {
    let unix = Date.now() / 1000;
    let date = fromUnixTime(unix + timeoffset).toUTCString();
    let hours = date.slice(17, 19);
    let mins = date.slice(20, 22);
    if (hours > 12) {
      return { hour: hours - 12, mins: mins, AmPm: "PM" };
    } else {
      return { hour: hours, mins: mins, AmPm: "AM" };
    }
  };

  return { country, kelvinToCelsius, time };
})();

export { getweather };
