const url = 'json/data.json';

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.members);
    displayMembers(data.members);
}

getMemberData(url);

// Images Button
//document.querySelector("#imagesBtn").addEventListener("click", displayImages);

// List Button
document.querySelector("#listBtn").addEventListener("click", displayList);

/*This function will be hoisted (the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code)*/

const displayMembers = (members, service) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let nameline = document.createElement('div');
      
      let icon = document.createElement('img');
      let testspan = document.createElement('span');
      let h2 = document.createElement('h2');

      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('p');
      
      

      h2.textContent = `${member.name}`;
      address.textContent = `${member.address}`;
      phone.textContent = `${member.phone}`;
      website.textContent = `${member.website}`;

      //Build the image icon by setting the relevant attributes
      icon.setAttribute('src', member.icon);
      icon.setAttribute('height', '30px');
      icon.setAttribute('class', 'icon')
      nameline.setAttribute('class', 'name');
      card.setAttribute('class', 'card-container')

  
      // Append the section(card) with the created elements
        nameline.appendChild(icon);
        nameline.appendChild(h2);

        card.appendChild(nameline);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    }) // end of forEach loop

} // end of function expression

function displayList(){
  console.log("in displayList()");
  //remove icon from card
  const icons = document.querySelectorAll(".icon");
  [].forEach.call(icons, function(img) {
     img.style.display = "none";
  });

  //Set cards to display in block
  const cardContainer = document.querySelector(".cards");
  cardContainer.style.display = "block";

  //Align card text to the left
  const cards = document.querySelectorAll(".card-container");
  [].forEach.call(cards, function(section) {
     section.style.textAlign = "left";
  });
  
  //Align card contact info to the left
  const info = document.querySelectorAll(".name");
  [].forEach.call(info, function(div) {
    div.style.display = "flex";
    div.style.justifyContent = "flex-start"
    
  });
  

 

}
