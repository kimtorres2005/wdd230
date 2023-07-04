// This function is to display the copyright symbol,
// current date, name, and state.
function copyNameState() {
    const copyrightSymbol = '\u00A9';
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let year = document.querySelector('#footerName');
    year.textContent = copyrightSymbol + '  ' + currentYear + '  .:| Kimberly L. Torres |:. Vidor, Texas';
}

// This function is to update the date and time for the last
// time the site was updated.
function updateDateTime() {
    let dateUpdate = document.lastModified;
    let datetimeElement = document.querySelector('#lastModified');
    datetimeElement.textContent = 'Last Updated: ' + dateUpdate;
}

// Hamburger Menu
let menuExpanded = false;

function toggleMenu() {
    const navUl = document.getElementsByClassName("nav-ul")[0];
    const menuSymbol = document.getElementById("menu-symbol");

    if (!menuExpanded) {
        navUl.classList.add("responsive");
        menuSymbol.innerHTML = "&#x2716";
    } else {
        navUl.classList.remove("responsive");
        menuSymbol.innerHTML = "Menu"; 
    }

    menuExpanded = !menuExpanded; 
}

window.addEventListener('DOMContentLoaded', function () {
    var navUl = document.getElementById('nav-ul');
    navUl.classList.toggle('responsive');
})

// Page Visits
function incrementPageVisits() {
    let pageVisits = localStorage.getItem('pageVisits');
    if (pageVisits) {
        pageVisits = parseInt(pageVisits) + 1;
    } else {
        pageVisits = 1;
    }
    localStorage.setItem('pageVisits', pageVisits.toString());
}

function getPageVisits() {
    let pageVisits = localStorage.getItem('pageVisits');
    return pageVisits ? parseInt(pageVisits) : 0;
}

incrementPageVisits();

let pageVisitsCount = getPageVisits();
document.querySelector('#sectionTwo ul li:nth-child(3)').textContent = 'Page Visits: ' + pageVisitsCount;


copyNameState();
updateDateTime();