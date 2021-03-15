

const weatherApi = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'c09ea79421d4e76504e8e4d16e3e315b';

const main = document.getElementById('container');
const searchInput = document.getElementById('search-input');
const cityWeather = document.getElementById('default-city');
const weatherTemp = document.getElementById('weather-temp');
const weatherType = document.getElementById('weather-type');
const weatherMin = document.getElementById('weather-min-temp');
const weatherMax = document.getElementById('weather-max-temp');
const errors = document.getElementById('errors-list');
const toggler = document.getElementById('toggler');
