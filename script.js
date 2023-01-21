// fetch(
//   "https://community-open-weather-map.p.rapidapi.com/weather?q=chennai&units=imperial",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c577ab2b89msh1b126b6186a2ee1p159a82jsn0cec5230e552",
      "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
    },
  };

  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  const data = await getWeatherData(city);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  console.log(weatherData, "data");
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  document.getElementById("feels-like").innerText = weatherData.main.feels_like;
};
