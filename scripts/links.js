// links.js

const baseURL = "https://kimtorres2005.github.io/wdd230/";
const linksURL = "https://kimtorres2005.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.log("Error fetching links:", error);
    }
}

function displayLinks(weeks) {
    const activitiesList = document.getElementById("activitiesList");
    activitiesList.innerHTML = ""; // Clear the existing static links

    weeks.forEach((week) => {
        const weekItem = document.createElement("li");
        weekItem.textContent = week.week + ":";

        const weekLinksList = document.createElement("ul");
        week.links.forEach((link) => {
            const activityItem = document.createElement("li");
            const activityLink = document.createElement("a");
            activityLink.href = baseURL + link.url;
            activityLink.textContent = link.title;

            activityItem.appendChild(activityLink);
            weekLinksList.appendChild(activityItem);
        });

        weekItem.appendChild(weekLinksList);
        activitiesList.appendChild(weekItem);
    });
}

getLinks();