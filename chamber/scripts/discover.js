const msToDays = 86400000;
const theDateToday = new Date();
const lastVisit = new Date(localStorage.getItem("lastVisit-ls"));

if (!lastVisit || isNaN(lastVisit)) {
    // User's first visit or invalid stored date
    document.querySelector(".days").textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDiff = theDateToday - lastVisit;
    const daysPassed = Math.floor(timeDiff / msToDays);

    if (daysPassed < 1) {
        // Less than a day since last visit
        document.querySelector(".days").textContent = "Back so soon! Awesome!";
    } else if (daysPassed === 1) {
        // One day since last visit
        document.querySelector(".days").textContent = "You last visited 1 day ago.";
    } else {
        // More than one day since last visit
        document.querySelector(".days").textContent = "You last visited " + daysPassed + " days ago.";
    }
}

localStorage.setItem("lastVisit-ls", theDateToday.toISOString());

