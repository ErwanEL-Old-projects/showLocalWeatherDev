button.addEventListener('click', () => {
    if (button.innerText === 'FAHRENHEIT') {
        convertToFahrenheit();
        state.innerText = `${tempFahrenheit}°F`;
        button.innerText = 'CELSIUS';
    } else if (button.innerText === 'CELSIUS') {
        button.innerText = 'FAHRENHEIT';
        state.innerText = `${temperature}°C`;
    }
});