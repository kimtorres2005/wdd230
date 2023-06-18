function calculateWindChill() {
    let temperatureData = document.querySelector('#temp');
    let windSpeedData = document.querySelector('#wind-speed');
    let windChillData = document.querySelector('#windchill');

    let temperature = parseFloat(temperatureData.textContent);
    let windSpeed = parseFloat(windSpeedData.textContent);

    if (temperature > 50 || windSpeed < 3) {
        windChillData.textContent = 'N/A';
    } else {
        let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChillData.textContent = 'Wind Chill: ' + windChill.toFixed(0) + '°F';
    }
}

calculateWindChill();
