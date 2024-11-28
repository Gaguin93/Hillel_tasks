const API_KEY = '33845151422760b685d79cf9b00b4ae6'; 
const LAT = 48.45; 
const LON = 34.98; 
const weatherInfoElement = document.getElementById('weather-info');
const refreshButton = document.getElementById('refresh-btn');

async function fetchWeather() {

    setWeatherInfo('Updating...')

    try {
        const data = await getWeatherData(LAT, LON, API_KEY);
        const celsius = kelvinToCelsium(data.main.temp);
        const weather = data.weather[0].description;

        setWeatherInfo(`Temperature: ${celsius.toFixed(2)}°C, ${weather}`);
    } catch (error) {
        console.error(error);
        setWeatherInfo('Error fetching weather data');
    }
}

async function getWeatherData(lat, lon, apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch weather data: ${response.statusText}`);
    }

    return response.json();

}

function kelvinToCelsium(kelvin) {
    return kelvin - 273.15;
}

function setWeatherInfo(message) {
    weatherInfoElement.textContent = message;
}

refreshButton.addEventListener('click', fetchWeather);

fetchWeather();
