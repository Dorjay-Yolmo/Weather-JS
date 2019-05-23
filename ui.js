class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity = document.getElementById('w-humidity');
    this.wind = document.getElementById('w-wind');
    this.dateAndTime = document.getElementById('w-date-and-time');
  }

  paint(weather) {
    this.location.textContent = `${weather.location.name}, ${weather.location.country}`;
    this.desc.textContent = weather.current.condition.text;
    this.string.textContent = `${weather.current.temp_c}°C, ${weather.current.temp_f}°F`;
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
    this.feelsLike.textContent = `Feels like: ${weather.current.feelslike_c}`;
    this.wind.textContent = `Wind: From the ${weather.current.wind_dir} at ${weather.current.wind_kph} KPH Gusting to ${weather.current.gust_kph} KPH`;
    this.dateAndTime.textContent = `Date & Time: ${weather.location.localtime}`;
  }
}