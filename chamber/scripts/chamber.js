// This function does several things. It displays copyright, year, name,
// my name, class and when the page was last updated, all in one line at the bottom of the footer.
function displayFooter() {
    const copyrightSymbol = "\u00A9";
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let footerElement = document.querySelector("#footer");
    footerElement.textContent =
        copyrightSymbol +
        currentYear +
        " Colmesneil Chamber | Kimberly L. Torres | WDD 230 Project | Last Updated: " +
        document.lastModified;
}

// Get the current date
function getCurrentDate() {
    let curDate = new Date();
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    let formattedDate = curDate.toLocaleDateString(undefined, options);
    let dateElement = document.querySelector("#date");
    dateElement.textContent = formattedDate;
}

// Hamburger Menu
function toggleMenu() {
    const menuButton = document.getElementById("menuButton");
    const navUl = document.getElementsByClassName("nav-ul")[0];

    if (navUl.classList.contains("responsive")) {
        navUl.classList.remove("responsive");
        menuButton.innerHTML = "&#9776; Menu";
    } else {
        navUl.classList.add("responsive");
        menuButton.innerHTML = "&#10006; Close";
    }
}

// Info Link Expand/Collapse
function setupInfoLinks() {
    const infoLinks = document.querySelectorAll('.info-link');

    infoLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const infoContainer = this.closest('.info-container');
            const infoContent = infoContainer.querySelector('.info-content');
            infoContent.classList.toggle('expanded');
        });
    });
}
setupInfoLinks();

// Memo Banner
function topBanner() {
    let curDate = new Date();
    let dayOfWeek = curDate.getDay();
    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        let banner = document.createElement("div");
        banner.classList.add("banner");
        banner.innerText = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
        let header = document.querySelector('header');
        header.insertBefore(banner, header.firstChild);
    }
}

const currentTemp = document.querySelector("#temp");
const captionDesc = document.querySelector("figcaption");
const humidityValue = document.querySelector("#humidity-value");
const forecastList = document.querySelector("#forecast-list");
const city = "Colmesneil,us";
const units = "imperial";
const apiKey = "6d25f33bb1267ba71d0fa8d39306cadc";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&cnt=24&APPID=${apiKey}`;

async function apiFetch() {
    try {
        const [weatherResponse, forecastResponse] = await Promise.all([
            fetch(url),
            fetch(forecastUrl),
        ]);

        if (weatherResponse.ok && forecastResponse.ok) {
            const weatherData = await weatherResponse.json();
            const forecastData = await forecastResponse.json();

            console.log(weatherData); // for testing purposes
            console.log(forecastData); // for testing purposes

            displayWeather(weatherData);
            displayForecast(forecastData);
        } else {
            throw Error("Weather data could not be retrieved.");
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = capitalizeWords(weatherData.weather[0].description);

    const weatherImage = document.createElement("img");
    weatherImage.setAttribute("src", iconsrc);
    weatherImage.setAttribute("alt", desc);

    const weatherIconContainer = document.querySelector("#weather-icon");
    weatherIconContainer.appendChild(weatherImage);

    captionDesc.textContent = desc;
    humidityValue.textContent = `${weatherData.main.humidity}% humidity`;
}

function displayForecast(forecastData) {
    const forecastItems = forecastData.list.filter((item, index) => index % 8 === 0); // Get one forecast item per day (every 8th item)

    forecastItems.forEach((item) => {
        const forecastDate = new Date(item.dt_txt);
        const forecastDay = forecastDate.toLocaleDateString("en-US", { weekday: "short" });
        const forecastTemp = item.main.temp.toFixed(0);
        const forecastIcon = item.weather[0].icon;

        const iconsrc = `https://openweathermap.org/img/w/${forecastIcon}.png`;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
      <img src="${iconsrc}" alt="Weather Icon">
      <span>${forecastDay}</span>
      <strong>${forecastTemp} &deg;F</strong>
    `;

        forecastList.appendChild(listItem);
    });
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

apiFetch();


// // Form Validation
// function setFormLoadTime() {
//     var currentDate = new Date();
//     document.querySelector("#formLoadTime").value = currentDate.toISOString();
// }
// window.onload = setFormLoadTime;

// //Info Link Expand/Collapse
// function setupInfoLinks() {
//     const infoLinks = document.querySelectorAll('.info-link');

//     infoLinks.forEach((link) => {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();
//             const infoContent = this.nextElementSibling;
//             infoContent.classList.toggle('expanded');
//         });
//     });
// }

getCurrentDate();
displayFooter();
topBanner();
toggleMenu();
// setupInfoLinks();
