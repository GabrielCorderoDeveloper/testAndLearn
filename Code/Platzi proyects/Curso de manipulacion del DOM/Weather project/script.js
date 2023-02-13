//todo API
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//todo Key
//8dece88b8026af761e17781dfd47f718
//? https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={8dece88b8026af761e17781dfd47f718}
/*
<div class="card">
<span class="location">Bogota</span> <span class="bubble">FH</span>
<img class="close" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png">
<p class="temperature">26C</p>
<img class="weather_state" src="https://cdn-icons-png.flaticon.com/512/252/252035.png" alt="">
<p class="weather_description">Muy nubloso</p>
</div>
*/

/*
const API_key = "8dece88b8026af761e17781dfd47f718"

const getServerData = (city) => {
    //API Call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    return fetch(url).then((data) => data.json());
}

const createWeatherCard = () => {
    const container = document.getElementById("application");
    const input = document.getElementById('search_input');

    getServerData(input.value)
    .then((data) => {
        container.innerHTML = BuildCard(data)
    })
    .catch(() => {
        container.innerHTML = "city not found"
    })
}

const addButton = document.querySelector('.search_button');
addButton.addEventListener('click', createWeatherCard);

document.addEventListener("keyup", (event) => {
    if (event.code === 'Enter') {
        createWeatherCard();
    }
})

    function BuildCard(data) {

    //Creating the elements
    const container = document.createElement('div');
    container.classList.add('card');

    const location = document.createElement('span');
    location.classList.add('location');

    const bubble = document.createElement('span');
    bubble.classList.add('bubble');

    const close = document.createElement('img');
    close.src = `https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png`;
    close.classList.add('close');

    const temperature = document.createElement('p');
    temperature.classList.add('temperature');

    const image = document.createElement('img');
    image.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    image.classList.add("weather_state");

    const description = document.createElement('p');
    description.classList.add('weather_description');

    //Appending the elements to the container
    container.appendChild(location);
    container.appendChild(bubble);
    container.appendChild(close);
    container.appendChild(temperature);
    container.appendChild(image);
    container.appendChild(description);

    //Putting the inner elements of the card
    location.innerText = `${data.name}`;
    bubble.innerText = 'FH';
    temperature.innerText = `${kelvinToCelsius(data.main.temp)}°/${kelvinToCelsius(data.main.temp_min)}°`;
    description.innerText = 'Muy nubloso';

    return container;
}

let kelvinToCelsius = (kelvinValue) => Math.floor(kelvinValue - 273);
kelvinToCelsius(297); */

//! ----------------------------------------------------------------------------------------------------------------->>>>>
//! ----------------------------------------------------------------------------------------------------------------->>>>>
//! ----------------------------------------------------------------------------------------------------------------->>>>>

const API_KEY = "2c1e4fd3931115a22ba808fcbd3608db";

const getData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  return fetch(url).then((data) => data.json());
}

const button = document.getElementById("search_button");
button.addEventListener("click", getWeatherInfo)

document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    getWeatherInfo();
  }
})

function getWeatherInfo() {
  const container = document.getElementById("application");
  const input = document.getElementById("search_input");
  getData(input.value)
    .then((data) => {
      container.innerHTML = template(data);
    })
    .catch(() => {
      container.innerHTML = 'City not found'
    })
}

function template(data) {
  return `
      <div class="card">
        <span class="location">${data.name}</span> <span class="bubble">FH</span>
        <img class="close" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png">
        <span class ="temperature">${kelvinToCelsius(data.main.temp)}°/${kelvinToCelsius(data.main.temp_min)}°</span>
        <img class="weather_state" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="partly_cloudy">
        <p class="weather_description">${data.weather[0].description}</p>
     </div>
  `;
}


let kelvinToCelsius = (kelvinValue) => Math.floor(kelvinValue - 273);
kelvinToCelsius(297);