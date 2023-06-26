const msToDays = 86400000;
const theDateToday = new Date();
let lastVisit = new Date(localStorage.getItem("lastVisit-ls"));

if (!lastVisit || isNaN(lastVisit)) {
    // User's first visit or invalid stored date
    document.querySelector(".days").textContent = "Welcome! Let us know if you have any questions.";
    lastVisit = null; // Reset last visit to null
} else {
    const timeDiff = theDateToday - lastVisit;
    const daysPassed = Math.floor(timeDiff / msToDays);

    if (daysPassed < 1) {
        // Less than a day since last visit
        document.querySelector(".days").textContent = "Back so soon! Awesome!";
    } else {
        const dayText = daysPassed === 1 ? "day" : "days";
        const daysMessage = `You last visited ${daysPassed} ${dayText} ago.`;
        document.querySelector(".days").textContent = daysMessage;
    }
}

localStorage.setItem("lastVisit-ls", theDateToday.toISOString());
