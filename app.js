// INIT Storage
const storage = new Storage();
// Get Location Data
const weatherLocation = storage.getLocationData();

// INIT Weather Object
const weather = new Weather(weatherLocation.city);
// INIT UI Object
const ui = new UI();

// Get weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  // Set Location in Local Storage
  storage.setLocationData(city);

  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
})

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err))
}
