const url = 'json/data.json';

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

getMemberData(url);

/*This function will be hoisted (the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code)*/

const displayMembers = (members, service) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    members.forEach((member) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let nameline = document.createElement('div');
      let contact = document.createElement('div');
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
      nameline.setAttribute('class', 'name');
      contact.setAttribute('class', 'contact-info')

  
      // Append the section(card) with the created elements
        
      
        nameline.appendChild(icon);
        nameline.appendChild(h2);

        contact.appendChild(address);
        contact.appendChild(phone);
        contact.appendChild(website);

       
        card.appendChild(nameline);
        card.appendChild(contact);
        //card.appendChild(address);
        //card.appendChild(phone);
        //card.appendChild(website);
      
      
        cards.appendChild(card);
    }) // end of forEach loop

  } // end of function expression