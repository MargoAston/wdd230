// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather .emoji');
const captionDesc = document.querySelector('.emoji-caption');
const wind = document.querySelector('#wind-speed');
const chillFactor =document.querySelector('#wind-chill');

// asynchronous function that will use fetch() to request the given api url and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=lakeside,ca,usa&appid=e069384a0b1b43e6c4d948c86089b178&units=imperial&units=imperial';

    
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
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
    currentTemp.innerHTML = weatherData.main.temp.toFixed();
    wind.innerHTML = weatherData.wind.speed.toFixed();

    const desc = weatherData.weather[0].description;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;

    //Calculate the windchill
    let temp = weatherData.main.temp;
    let speed = weatherData.wind.speed;


    if (temp <= 50 && speed > 3) {
        let chill = 35.74 + (0.6215 * temp) - 
        (35.76 * (speed ** 0.16)) + 
        (0.4275 * temp * (speed ** 0.16));
    
        chill = Math.trunc(chill);
        let text = chill.toString();
        let text2 = "℉";
    
        //Put the chill into the html element
        chillFactor.innerHTML = text.concat(text2);
    
    }
    else {
        chillFactor.innerHTML = `N/A`
    }
}



