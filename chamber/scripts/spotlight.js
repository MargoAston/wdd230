const url = 'json/data.json';

async function getMemeberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displaySpotlightMembers(data.members);
}

getMemeberData(url);

/*This function will be hoisted (the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code)*/

const displaySpotlightMembers = (members, service) => {
    const spotlightCards = document.querySelector('article'); // select the output container element

    let displayCount = 0; //Number of spotlight companies being displayed

    while (displayCount < 3) {
        // Get a random integer between 0 and 8 and use is for the member index
        let featuredIndex = Math.floor(Math.random() * 9)
        console.log(featuredIndex);

        // Check the membership level of the member in at that index 
        let level = `${members[featuredIndex].level}`;

        if (level <= 2) {
            displayCount += 1 //Increment the number of spotlighted companies being displayed
            displayFeaturedMember(featuredIndex);
        }

        function displayFeaturedMember(index) {
                // Create a card container
                let spotlightCard = document.createElement('div');
            
                // Create elements for the card
                let h2 = document.createElement('h2');
                let icon = document.createElement('img');
                let spacer = document.createElement('hr');
                let address = document.createElement('p');
                let phone = document.createElement('p');

                // Fill elements with data from the JSON file
                h2.innerHTML = `${members[index].name}`;
                icon.innerHTML = `${members[index].icon}`;
                address.innerHTML = `${members[index].address}`;
                phone.innerHTML = `${members[index].phone}`;

                // Set the attributes for the icon
                icon.setAttribute('src', members[index].icon);
                icon.setAttribute('height', '30px');
                icon.setAttribute('class', 'spotlight-icon')

                // Add the new elements to the card
                spotlightCard.appendChild(h2);
                spotlightCard.appendChild(icon);
                spotlightCard.appendChild(spacer);
                spotlightCard.appendChild(address);
                spotlightCard.appendChild(phone);

                //Add the card to the cards container
                spotlightCards.appendChild(spotlightCard);
        }   
    }  
} // end of function expression