const datajson = "data/members.json";
let isCardView = true; // Flag to track the current view mode

async function getBusinessData() {
const response = await fetch(datajson);
const data = await response.json();
displayBusinesses(data.businesses);
}

const toggleView = () => {
const cards = document.querySelector("div.cards");
const toggleButton = document.getElementById("toggle-button");

  // Toggle the flag and update the view
isCardView = !isCardView;
toggleButton.textContent = isCardView ? "List View" : "Card View";

if (isCardView) {
    cards.classList.remove("list-view");
} else {
    cards.classList.add("list-view");
}
};

const displayBusinesses = (businesses) => {
const cards = document.querySelector("div.cards");

businesses.forEach((business) => {
    let card = document.createElement("section");
    card.setAttribute("class", "business-card");

    let h2 = document.createElement("h2");
    h2.setAttribute("id", "business-name");
    h2.textContent = `${business.name}`;

    let div1 = document.createElement("div");
    div1.setAttribute("class", "contact-container");
    let p = document.createElement("p");
    p.setAttribute("class", "business-contact");
    p.textContent = `Contact: ${business.contact}`;
    let p2 = document.createElement("p");
    p2.setAttribute("class", "business-established");
    p2.textContent = `Established: ${business.established}`;
    div1.appendChild(p);
    div1.appendChild(p2);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "address-container");
    let p3 = document.createElement("p");
    p3.setAttribute("class", "business-address");
    p3.textContent = `Address: ${business.address}`;
    let p4 = document.createElement("p");
    p4.setAttribute("class", "business-phone");
    p4.textContent = `Phone: ${business.phone}`;
    let p5 = document.createElement("p");
    p5.setAttribute("class", "business-website");
    p5.textContent = `${business.url}`;
    div2.appendChild(p3);
    div2.appendChild(p4);
    div2.appendChild(p5);

    let portrait = document.createElement("img");
    portrait.setAttribute("id", "business-image");
    portrait.setAttribute("src", business.image);
    portrait.setAttribute("alt", `Portrait of ${business.name}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(h2);
    card.appendChild(div1);
    card.appendChild(div2);
    card.appendChild(portrait);

    cards.appendChild(card);
});
};

getBusinessData();

const toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click", toggleView);
