class Weather {
  constructor(city) {
    this.apiKey = '7088a6162a2a4cc1a7c151456192305';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather Location
  changeLocation(city) {
    this.city = city;
  }
}