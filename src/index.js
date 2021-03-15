import debounce from './weatherHelper/debounce';
import ClearImage from './assets/img.jpeg';


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

const CLEAR_STATUSES = ['clear'];
const RAIN_STATUSES = ['rain'];

const weatherInfo = ({
  name, weather, main, activeWeatherUnit,
}) => {
  const statusWeather = weather[0].main;

  cityWeather.textContent = name;
  weatherType.textContent = statusWeather;
  weatherTemp.children[0].textContent = main.temp;

  if (CLEAR_STATUSES.includes(statusWeather.toLowerCase())) {
    mainContainer.style.background = `url(${ClearImage})`;
  } else if (RAIN_STATUSES.includes(statusWeather.toLowerCase())) {
    mainContainer.style.background = `url(${ClearImage})`;
  } else {
    mainContainer.style.background = `url(${ClearImage})`;
  }

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
  const { value } = searchInput;
  errors.textContent = '';
  if (!value.length) return;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?${value}&appid=c09ea79421d4e76504e8e4d16e3e315b&units=standard`,
      { mode: 'cors' },
    );
    const data = await response.json();
    if (data.cod === 200) {
      const { name, weather, main } = data;
      weatherInfo({
        name,
        weather,
        main,
        activeWeatherUnit,
      });
    } else {
      throw new Error('That city do not exist!');
    }
  } catch (error) {
    errors.textContent = error.message;
  }
};

const changeWeatherUnit = (event) => {
  let unitType;

  if (event.target.checked) {
    unitType = IMPERIAL;
  } else {
    unitType = METRIC;
  }

  localStorage.setItem(UNIT_KEY, JSON.stringify(unitType));
  getWeatherInfo();
};

searchInput.addEventListener('input', debounce(getWeatherInfo));
toggler.addEventListener('change', changeWeatherUnit);

window.addEventListener('DOMContentLoaded', () => {
  const unitTypeSet = JSON.parse(localStorage.getItem(UNIT_KEY));

  if (!unitTypeSet) {
    localStorage.setItem(UNIT_KEY, JSON.stringify(METRIC));
  }

  if (unitTypeSet && unitTypeSet === IMPERIAL) {
    toggler.setAttribute('checked', '');
  }
});
