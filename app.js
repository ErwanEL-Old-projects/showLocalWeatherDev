// let url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139";
let loc = document.getElementById("location"); //data.name
let state = document.getElementById("state"); //state.innerText = `${temp}°C`
let url = "https://fcc-weather-api.glitch.me/api/current?lat=6.25&lon=-75.60";
let data;
let temp;
let tempFahrenheit;
let lat;
let long;

let request = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText);
            console.log(data);
            temp = data.main.temp;
        } 
    };
    xhr.open('GET', url , true);
    xhr.send();
}
request();

let convertToFahrenheit = () => {tempFahrenheit = temp * (9/5) + 32 };


function getLocation () {
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude.toFixed(2);
        long = position.coords.longitude.toFixed(2);
      });
}