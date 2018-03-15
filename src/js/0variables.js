const localLocation = document.getElementById("location"), 
      stateTemperature = document.getElementById("state"),
      button = document.getElementById('button'),
      card = document.getElementById('card'),
      cardImg = document.querySelector('.card-img-top');

let img = document.querySelector('img'),
    url,
    data,
    temperature,
    sunsetTime,
    sunriseTime,
    tempFahrenheit,
    localPosition,
    latitude,
    longitude;