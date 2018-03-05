const convertToFahrenheit = () => {tempFahrenheit = (temp * (9/5) + 32).toString().slice(0,4)};

const nightUi = () => {
    img.src = "http://svgshare.com/i/4FW.svg";
    card.style.backgroundColor = "#02475e";
    cardImg.style.backgroundColor = "#02475e";    
}

const dayUi = () => {
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
}

const compareSunsetTime = () => {
    let date = new Date();
    let time = date.getTime().toString().slice(0,10);
    time = parseInt(time);
    if (sunset <= time) {
        nightUi();
    } else {
        dayUi();
    }
};

const request = () => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText);
            temp = data.main.temp.toString().slice(0,4)
            loc.innerText = `${data.name}, ${data.sys.country}`;
            state.innerText = `${temp}°C`;
            sunset = data.sys.sunset;
        }
    }
    xhr.open('GET', url , false);
    xhr.send();
};