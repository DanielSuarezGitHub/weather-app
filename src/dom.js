const dom = (() => {
  function render(weatherObject) {
    const city = document.getElementById('city')  
    const country = document.querySelector('.country')
    const temp = document.querySelector('.temp')
    const conditions = document.querySelector('.conidtions')
    const time = document.querySelector('.time')
    const windspeed = document.querySelector('.windspeed')
    const humidity = document.querySelector('.humidity')
    const feelslike = document.querySelector('.feelslike')  
    console.log(weatherObject);
  }
  return { render };
})();

export { dom };
