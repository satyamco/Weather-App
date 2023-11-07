
const apiKey = '9c2d68953974b9c12f2057733898e2a1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const inputCity = document.querySelector('.head input');
const inputBtn = document.querySelector('.head img');
const weatherImage = document.querySelector('.w-image');
const weatherInfo = document.querySelector('.weather-info');
const utilBox = document.querySelector('.util');



async function getWeatherData(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    let data = await response.json();

    
    document.querySelector('.tempo').innerHTML = Math.round(data.main.temp) +'°C';
    document.querySelector('.city-name').innerHTML = data.name;
    document.querySelector('.h-value').innerHTML = data.main.humidity + '%';
    document.querySelector('.ws-value').innerHTML =  data.wind.speed.toFixed(1) + 'km/h';
  
    
    if(data.weather[0].main == 'Clouds'){
        weatherImage.src = 'images/clouds.png';
    }
    else if(data.weather[0].main == 'Clear') {
        weatherImage.src = 'images/clear.png';
    }
    else if(data.weather[0].main == 'Drizzle') {
        weatherImage.src = 'images/drizzle.png';
    }
    else if(data.weather[0].main == 'Snow') {
        weatherImage.src = 'images/snow.png';
    }
    else if(data.weather[0].main == 'Mist') {
        weatherImage.src = 'images/mist.png';
    }
    else if(data.weather[0].main == 'Rain') {
        weatherImage.src = 'images/rain.png';
    }
    
}

function getWeather() {
    const cityName = inputCity.value.trim();
    if (cityName) {
      utilBox.style.display = 'none';
      weatherInfo.style.display = 'block';
      getWeatherData(cityName);
    }
  }
  
  inputCity.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      getWeather();
    }
  });

  inputBtn.addEventListener('click', getWeather);
  



