// INIT weather object
const weather = new Weather('Bangalore');

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err))
}
