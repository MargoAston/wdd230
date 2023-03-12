const url = 'json/data.json';

async function getMemeberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displaySpotlightMembers(data.members);
}

getMemeberData(url);

/*This function will be hoisted (the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code)*/

const displaySpotlightMembers = (members, service) => {
    const spotlightCards = document.querySelector('article'); // select the output container element

    let displayCount = 0; //Number of spotlight companies being displayed
    let displayed = [];   //This will hold the companies that are currently displayed

    while (displayCount < 3) {
        // Get a random integer between 0 and 8 and use it for the member index
        let featuredIndex = Math.floor(Math.random() * 9)
        console.log("the index is", featuredIndex);

        // Check the membership level of the member in that index 
        let level = `${members[featuredIndex].level}`;

        // Check to see if the business is already being displayed
        let isFound = displayed.includes(featuredIndex);
        console.log("We found the business", isFound);
        
        

        if ((level <= 2)  && (isFound == false)) { 
            displayCount += 1 //Increment the number of spotlighted companies being displayed
            displayed.push(featuredIndex);
            console.log("this is the displayed businesses:", displayed);
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
                let website = document.createElement('a');

                // Fill elements with data from the JSON file
                h2.innerHTML = `${members[index].name}`;
                icon.innerHTML = `${members[index].icon}`;
                address.innerHTML = `${members[index].address}`;
                phone.innerHTML = `${members[index].phone}`;
                website.innerHTML = `${members[index].website}`;

                // Set the attributes for the icon, spotlightCard, website
                icon.setAttribute('src', members[index].icon);
                icon.setAttribute('height', '30px');
                icon.setAttribute('class', 'spotlight-icon')

                spotlightCard.setAttribute('class', 'spotCard')

                website.setAttribute('href', members[index].website);

                // Add the new elements to the card
                spotlightCard.appendChild(h2);
                spotlightCard.appendChild(icon);
                spotlightCard.appendChild(spacer);
                spotlightCard.appendChild(address);
                spotlightCard.appendChild(phone);
                spotlightCard.appendChild(website);

                //Add the card to the cards container
                spotlightCards.appendChild(spotlightCard);
        }   
    }  
} // end of function expression