// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#current .emoji');
const captionDesc = document.querySelector('.emoji-caption');

const humidity = document.querySelector('#humidity');

//select HTML elements in the document for the weather forecast
const day1temp = document.querySelector('#temp1');
const weatherIcon1 = document.querySelector('#w-icon1');
const day1 = document.querySelector('#day1');

const day2temp = document.querySelector('#temp2');
const weatherIcon2 = document.querySelector('#w-icon2');
const day2 = document.querySelector('#day2');

const day3temp =document.querySelector('#temp3');
const weatherIcon3 = document.querySelector('#w-icon3');
const day3 = document.querySelector('#day3');

// asynchronous function that will use fetch() to request the given api url and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
  const url = 'https://api.openweathermap.org/data/2.5/forecast?q=lakeside,ca,usa&appid=e069384a0b1b43e6c4d948c86089b178&units=imperial&units=imperial';

    
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); //this is for testing the call
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
    let ferh = "℉";
    currentTemp.innerHTML = (weatherData.list[0].main.temp.toFixed()).concat(ferh);

    let percent = "％";
    humidity.innerHTML = weatherData.list[0].main.humidity;

    const desc = weatherData.list[0].weather[0].description;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc;
    
    //forecast day1
    day1temp.innerHTML = (weatherData.list[1].main.temp.toFixed()).concat(ferh);

    const iconsrc1 = `https://openweathermap.org/img/w/${weatherData.list[1].weather[0].icon}.png`;

    weatherIcon1.setAttribute('src', iconsrc1);
  
    //forecast day 2
    day2temp.innerHTML = (weatherData.list[2].main.temp.toFixed()).concat(ferh);

    const iconsrc2 = `https://openweathermap.org/img/w/${weatherData.list[2].weather[0].icon}.png`;

    weatherIcon2.setAttribute('src', iconsrc2);

    //forecast day 3
    day3temp.innerHTML = (weatherData.list[3].main.temp.toFixed()).concat(ferh);

    const iconsrc3 = `https://openweathermap.org/img/w/${weatherData.list[3].weather[0].icon}.png`;

    weatherIcon3.setAttribute('src', iconsrc3);

}

function displayDays() {
  //Get day

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  day1.innerHTML=weekday[tomorrow.getDay()];
  
  tomorrow.setDate(tomorrow.getDate() + 1);
  day2.innerHTML=weekday[tomorrow.getDay()];

  tomorrow.setDate(tomorrow.getDate() + 1);
  day3.innerHTML=weekday[tomorrow.getDay()];
}

displayDays();