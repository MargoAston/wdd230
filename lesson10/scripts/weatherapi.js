// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


// asynchronous function that will use fetch() to request the given api url and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=fairbanks&appid=e069384a0b1b43e6c4d948c86089b178&units=imperial&units=imperial';

    
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong> ${weatherData.main.temp.toFixed(0)}</strong>`;

    let iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    if (desc == 'snow') {
      iconsrc = `images/snow.png`;
    }
    else if(desc == 'clear sky') {
      iconsrc = `images/sunny.png`;
    }
    else if(desc == 'night') {
      iconsrc = `images/night.png`;
    }
    else if(desc == 'few clouds') {
      iconsrc = `images/partly-cloudy.png`;
    }
    else if(desc == 'sleet') {
      iconsrc = `images/sleet.png`;
    }
    else if(desc == 'light snow') {
      iconsrc = `images/snow-flurries.png`;
    }
    else if(desc == 'thunderstorm with light rain') {
      iconsrc = `images/thunderstorms-2.png`;
    }
    else if(desc == 'windy') {
      iconsrc = `images/windy.png`;
    }

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
  }