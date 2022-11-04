const dom = (() => {
  function render(weather) {
    const city = document.querySelector('.city')  
    const country = document.querySelector('.country')
    const temp = document.querySelector('.temp')
    const conditions = document.querySelector('.conditions')
    const time = document.querySelector('.time')
    const windspeed = document.querySelector('.windspeed')
    const humidity = document.querySelector('.humidity')
    const feelslike = document.querySelector('.feelslike')  
    city.textContent = weather.name
    country.textContent = weather.country
    temp.textContent = weather.temp + "°C"
    conditions.textContent = weather.conditions
    time.textContent = `${weather.timezone.hour}:${weather.timezone.mins}${weather.timezone.AmPm}`
    windspeed.textContent = `Wind Speed: ${weather.windspeed}km/h`
    humidity.textContent = `Humidity: ${weather.humidity}%`
    feelslike.textContent = `Feels Like: ${weather.feels_like}°C`
  }
  return { render };
})();

export { dom };
