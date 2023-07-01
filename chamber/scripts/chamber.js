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
    document.getElementsByClassName("nav-ul")[0].classList.toggle("responsive");
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

// // Memo Banner
// function topBanner() {
//     let curDate = new Date();
//     let dayOfWeek = curDate.getDay();
//     if (dayOfWeek === 1 || dayOfWeek === 2) {
//         let banner = document.createElement("div");
//         banner.classList.add("banner");
//         banner.innerText = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.';
//         let body = document.body;
//         body.insertBefore(banner, body.firstChild);
//     }
// }

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
// topBanner();
// setupInfoLinks();
