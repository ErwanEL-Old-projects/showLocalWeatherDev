button.addEventListener('click', () => {
    if (button.innerText === 'FAHRENHEIT') {
        state.innerText = `${tempFahrenheit}°F`;
        button.innerText = 'CELSIUS';
    } else if (button.innerText === 'CELSIUS') {
        button.innerText = 'FAHRENHEIT';
        state.innerText = `${temp}°C`;
    }
});