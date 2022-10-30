class dom {
    city = document.querySelector('.city')
    country = document.querySelector('.country')
    temp = document.querySelector('.temp')
    currentConditions = document.querySelector('.conditions')
    time = document.querySelector('.time')
    windspeed = document.querySelector('.windspeed')
    humidity = document.querySelector('.humidity')
    feelslike = document.querySelector('.feelslike')
    static render(weatherObject) {
        console.log(weatherObject);
    }
}
export { dom };
