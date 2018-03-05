const loc = document.getElementById("location"), //data.name
      state = document.getElementById("state"), //state.innerText = `${temp}°C`
      button = document.getElementById('button'),
      card = document.getElementById('card'),
      cardImg = document.querySelector('.card-img-top');

let img = document.querySelector('img'),
    url,
    data,
    temp,
    sunset,
    tempFahrenheit,
    lat,
    long;