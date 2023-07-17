// Define the displayRandomCard function
const displayRandomCard = (businesses, membershipStatus, containerId) => {
    const filteredCards = businesses.filter(
        (business) => business.memberlevel === membershipStatus
    );
    
    if (filteredCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredCards.length);
        const randomCard = filteredCards[randomIndex];
    
        let card = document.createElement("section");
        card.setAttribute("class", "business-card1");
    
        let h2 = document.createElement("h2");
        h2.setAttribute("id", "business-name1");
        h2.textContent = `${randomCard.name}`;
        let div1 = document.createElement("div");
        div1.setAttribute("class", "contact-container1");
        let p = document.createElement("p");
        p.setAttribute("class", "business-contact1");
        p.textContent = `Contact: ${randomCard.contact}`;
        let p2 = document.createElement("p");
        p2.setAttribute("class", "business-established1");
        p2.textContent = `Established: ${randomCard.established}`;
        div1.appendChild(p);
        div1.appendChild(p2);
    
        let div2 = document.createElement("div");
        div2.setAttribute("class", "address-container1");
        let p3 = document.createElement("p");
        p3.setAttribute("class", "business-address1");
        p3.textContent = `Address: ${randomCard.address}`;
        let p4 = document.createElement("p");
        p4.setAttribute("class", "business-phone1");
        p4.textContent = `Phone: ${randomCard.phone}`;
        let p5 = document.createElement("p");
        p5.setAttribute("class", "business-website1");
        p5.textContent = `${randomCard.url}`;
        div2.appendChild(p3);
        div2.appendChild(p4);
        div2.appendChild(p5);
    
        let portrait = document.createElement("img");
        portrait.setAttribute("id", "business-image1");
        portrait.setAttribute("src", randomCard.image);
        portrait.setAttribute("alt", `Portrait of ${randomCard.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");
    
        card.appendChild(h2);
        card.appendChild(div1);
        card.appendChild(div2);
        card.appendChild(portrait);
    
        // Insert the card into the specified container
        const container = document.getElementById(containerId);
        container.appendChild(card);
    }
    };
    
    // Fetch the data and display random cards
    fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => {
        const businesses = data.businesses;
    
        // Display a random Gold card
        displayRandomCard(businesses, "Gold", "gold-card-container");
    
        // Display a random Silver card
        displayRandomCard(businesses, "Silver", "silver-card-container");
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
    