
const currentTemp = document.querySelector("#temp");
const captionDesc = document.querySelector("figcaption");
const city = "Vidor,us";
const units = "imperial";
const apiKey = "6d25f33bb1267ba71d0fa8d39306cadc";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
        0
    )}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = capitalizeWords(weatherData.weather[0].description);

    // Create the image element dynamically
    const weatherImage = document.createElement("img");
    weatherImage.setAttribute("src", iconsrc);
    weatherImage.setAttribute("alt", desc);

    // Get the parent container where the image should be appended
    const weatherIconContainer = document.querySelector("#weather-icon");
    // Append the image element to the container
    weatherIconContainer.appendChild(weatherImage);

    captionDesc.textContent = desc;


    const temperatureFahrenheit = weatherData.main.temp;
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

apiFetch();
