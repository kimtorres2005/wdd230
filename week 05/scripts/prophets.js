const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.log('Error fetching prophet data:', error);
    }
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const details = document.createElement('div');
        const title = document.createElement('p');
        const birthdate = document.createElement('p');

        fullName.textContent = `${prophet.name.first} ${prophet.name.last}`;
        title.textContent = `Title: ${prophet.title}`;
        birthdate.textContent = `Birthdate: ${prophet.birthdate}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name.last}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '320');
        portrait.setAttribute('height', '240');

        details.appendChild(title);
        details.appendChild(birthdate);

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(details);

        cards.appendChild(card);
    });
};
