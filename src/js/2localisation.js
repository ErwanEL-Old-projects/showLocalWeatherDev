const getLocation = () => {
  navigator.geolocation.getCurrentPosition(position => {
      if (!navigator.geolocation) {
          alert('error');
      } else {
          lat = position.coords.latitude.toFixed(2);
          long = position.coords.longitude.toFixed(2);
          url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
          request();
          convertToFahrenheit();
          compareSunsetTime();
      }
  })
};