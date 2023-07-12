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
    if (dayOfWeek === 1 || dayOfWeek === 2) {
        let banner = document.createElement("div");
        banner.classList.add("banner");
        banner.innerText = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
        let body = document.body;
        body.insertBefore(banner, body.firstChild);
    }
}

// Function to fetch weather data from OpenWeatherMap API
function fetchWeatherData() {
    const apiKey = '6d25f33bb1267ba71d0fa8d39306cadc';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Colmesneil,us&appid=${apiKey}&units=imperial`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function (response) {
            const forecastList = response.list.slice(0, 3); // Get the first three forecasts

            // Update the forecast elements
            forecastList.forEach((forecast, index) => {
                const temperature = forecast.main.temp;
                const description = forecast.weather[0].description;

                const temperatureElement = document.querySelector(`#temp${index + 1}`);
                const descriptionElement = document.querySelector(`#desc${index + 1}`);

                temperatureElement.textContent = Math.round(temperature) + '°F';
                descriptionElement.textContent = description;
            });
        },
        error: function (error) {
            console.log('Error fetching weather data:', error);
        }
    });
}

// Call the fetchWeatherData function to retrieve and update the weather forecast
fetchWeatherData();


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
toggleMenu();
topBanner();
// setupInfoLinks();
