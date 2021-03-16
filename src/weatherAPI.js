const fetchWeatherData = async (value, apiKey) => {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${apiKey}`;
  const data = await fetch(api);
  const weatherData = await data.json();
  return weatherData;
};

export default async (value, apiKey) => {
  const data = await fetchWeatherData(value, apiKey);
  return {
    temp: Math.round(data.main.temp - 273.15),
    city: data.name,
    country: data.sys.country,
    weather: { icon: data.weather[0].icon, description: data.weather[0].description },
  };
};
