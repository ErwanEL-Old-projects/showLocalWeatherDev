//conversion to fahrenheit
const convertToFahrenheit = () => {tempFahrenheit = (temperature * (9/5) + 32).toString().slice(0,4)};

//infoUI
const infoUi = () => {
    let promise = new Promise (function (resolve,reject) {
        temperature = data.main.temp.toString().slice(0,4)
        localLocation.innerText = `${data.name}, ${data.sys.country}`;
        stateTemperature.innerText = `${temperature}°C`;
        sunsetTime = data.sys.sunset;
        sunriseTime = data.sys.sunrise;
        resolve(sunsetTime);
    })
    return promise;
};

// compare time before sunset
const compareSunsetTime = () => {
    let promise = new Promise (function (resolve,reject) {
        let date = new Date();
        let time = date.getTime().toString().slice(0,10);
        time = parseInt(time);
        if (time > sunsetTime || time < sunriseTime) {
            nightUi();
        } else {
            dayUi();
        }
        resolve(time);
    })
    return promise;
};

// UI

//day
const dayUi = () => {
    // let promise = new Promise (function (resolve,reject) {
    //     if(dayTime) {
            switch (data.weather[0].description) {
                case "broken clouds":
                case "scattered clouds":
                img.src = "http://svgshare.com/i/4E6.svg";
                    break;
                case "clouds":
                img.src = "http://svgshare.com/i/4GW.svg";
                    break;
                case "few clouds":
                img.src = "http://svgshare.com/i/4L1.svg";
                    break;
                case "shower rain":
                img.src = "http://svgshare.com/i/4G0.svg";
                    break;
                case "thunderstorm with rain": //thunder
                img.src = "https://svgshare.com/i/5oa.svg";
                    break;
                case "mist":
                img.src = "http://svgshare.com/i/4GW.svg";
                    break;
                case "clear sky"://day
                img.src = "https://svgshare.com/i/5ob.svg";
                    break;
                default:
                img.src = "https://svgshare.com/i/5ob.svg";
                    break;
            }
    //     }
    //     resolve(dayTime);
    // });
    // return promise;
};

//night

const nightUi = () => {
    // let promise = new Promise (function (resolve,reject) {
    //     if(nightTime) {
            img.src = "http://svgshare.com/i/4FW.svg";
            card.style.backgroundColor = "#02475e";
            cardImg.style.backgroundColor = "#02475e";  
    //     }
    //     resolve(nightTime);
    // })
    // return promise;
};