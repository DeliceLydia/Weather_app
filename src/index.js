import formattedWeatherData from './weatherAPI';
import { displayError, displayWeather } from './show';

const apiKey = 'c09ea79421d4e76504e8e4d16e3e315b';
const content = document.getElementById('content');
const form = document.forms[0];

form.addEventListener('submit', async e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  try {
    const data = await formattedWeatherData(city, apiKey);
    displayWeather(data, content);
    form.reset();
  } catch (error) {
    displayError(content);
  }
});
