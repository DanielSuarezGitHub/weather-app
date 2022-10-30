async function getweather(city) {
  await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=00d5d7663e47cc4b2303d054f78d8e8f`
  )
    .then((response) => response.json())
    .then((response) => console.log(response));
}

export { getweather };
