//localisation
const getLocation = () => {
    let promise = new Promise (function (resolve,reject) {
        navigator.geolocation.getCurrentPosition(position => {
            if (navigator.geolocation) {
                resolve(localPosition = position);
            } else {
                reject(console.log('pas compatible'));
            }
        });
    })
    return promise;
};


//assign local position
const assignPosition = () => {
    let promise = new Promise (function (resolve,reject) {
        latitude = localPosition.coords.latitude.toFixed(2);
        longitude = localPosition.coords.longitude.toFixed(2);
        resolve('localPosition');
    })
    return promise;
};


//create url
let generateUrl = () => {
    let promise = new Promise (function (resolve,reject) {
        url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`
        resolve(url);
    })
    return promise;
};