const celcToFarnh = (unit) => Math.round(1.8 * unit + 32);
const farnhToCelc = (unit) => Math.round(unit - 32) / 1.8;

const addUnitToggler = (content) => {
  const togglerUnit = document.createElement('button');
  togglerUnit.classList.add('button-toggle');
  togglerUnit.textContent = 'C to F';
  togglerUnit.addEventListener('click', () => {
    const temp = document.querySelector('#temp');
    const number = Number(temp.textContent.slice(0, -2));
    const unit = temp.textContent.slice(-1);
    if (unit === 'C') {
      temp.textContent = `${celcToFarnh(number)}°F`;
      togglerUnit.textContent = 'F to C';
    } else {
      temp.textContent = `${farnhToCelc(number)}°C`;
      togglerUnit.textContent = 'C to F';
    }
  });
  content.append(togglerUnit);
};


const setBackground = (icon) => {
  const body = document.querySelector('body');
  if (icon.slice(-1) === 'd') {
    body.classList.add('day');
    body.classList.remove('night');
  } else {
    body.classList.add('night');
    body.classList.remove('day');
  }
};

// eslint-disable-next-line import/prefer-default-export
export const displayWeather = (data, content) => {
  content.classList = 'card small-card mx-auto';
  content.innerHTML = `
    <div class='card-header'>
      <img src='https://openweathermap.org/img/wn/${data.weather.icon}@2x.png' width='40'>
      <span class='card-text' id='weatherInfo'>${data.weather.description}</span>
    </div>
    <div class='card-body'>
      <h5 class='card-title' id='location'>${data.city}, ${data.country}</h5>
      <p class='card-text'>Temperature: <span id='temp'>${data.temp}°C</span></p>
    </div>
    `;
  setBackground(data.weather.icon);
  addUnitToggler(content);
};

export const displayError = (content) => {
  content.innerHTML = '<p>Please input a valid city.</p>';
};
