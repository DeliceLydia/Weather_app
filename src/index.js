

const weatherApi = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'c09ea79421d4e76504e8e4d16e3e315b';
const UNIT_KEY = 'weatherUnitType';
const METRIC = 'metric';
const IMPERIAL = 'imperial';


const mainContainer = document.getElementById('container');
const searchInput = document.getElementById('search-input');
const cityWeather = document.getElementById('default-city');
const weatherTemp = document.getElementById('weather-temp');
const weatherType = document.getElementById('weather-type');
const weatherMin = document.getElementById('weather-min-temp');
const weatherMax = document.getElementById('weather-max-temp');
const errors = document.getElementById('errors-list');
const toggler = document.getElementById('toggler');

const weatherInfo = ({
  name, weather, main, activeWeatherUnit,
}) => {
  const statusWeather = weather[0].main;

  cityWeather.textContent = name;
  weatherType.textContent = statusWeather;
  weatherTemp.children[0].textContent = main.temp;

  if (activeWeatherUnit === METRIC) {
    weatherMax.innerHTML = `${main.temp_max} &#176;C max`;
    weatherMin.innerHTML = `${main.temp_min} &#176;C min`;
    weatherTemp.children[2].textContent = 'C';
  } else {
    weatherMax.innerHTML = `${main.temp_max} &#176;C max`;
    weatherMin.innerHTML = `${main.temp_min} &#176;C min`;
    weatherTemp.children[2].textContent = 'F';
  }
};

const getWeatherInfo = async () => {
  const activeWeatherUnit = JSON.parse(localStorage.getItem(UNIT_KEY));
  
}
