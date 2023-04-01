const url = 'json/fruit.json';

var data = [];

async function getFruitData(url) {
    const response = await fetch(url);
    data =await response.json();
    
    const fruitIndex = data.find(element => element.name == "Grape");

    displayFruits(data);
    displayFruits2(data);
    displayFruits3(data);

}

getFruitData(url);


const displayFruits = (fruits, service) => {
    //select the output container element
    const fruitList1 = document.querySelector('.fruit-list1');

    fruitCount = 0;
    fruits.forEach((fruit) => {
        //Create element to add to the juice bar fruit list
        let fruita = document.createElement('option');

        //Give element a value
        fruita.innerHTML = `${fruit.name}`;

        //Append the 'select input' with the created option element
        fruitList1.appendChild(fruita);
    

    }) //end of forEach loop (fruit loop - LOL)
} //end of fuction expression

const displayFruits2 = (fruits, service) => {
    //select the output container element
    const fruitList2 = document.querySelector('.fruit-list2');

    fruits.forEach((fruit) => {
        //Create element to add to the juice bar fruit list
        let fruita = document.createElement('option');


        //Give element a value
        fruita.innerHTML = `${fruit.name}`;

        //Append the 'select input' with the created option element
        fruitList2.appendChild(fruita);

    }) //end of forEach loop (fruit loop - LOL)
} //end of fuction expression

const displayFruits3 = (fruits, service) => {
    //select the output container element
    const fruitList3 = document.querySelector('.fruit-list3');

    fruits.forEach((fruit) => {
        //Create element to add to the juice bar fruit list
        let fruita = document.createElement('option');

        //Give element a value
        fruita.innerHTML = `${fruit.name}`;

        //Append the 'select input' with the created option element
        fruitList3.appendChild(fruita);

    }) //end of forEach loop (fruit loop - LOL)
} //end of fuction expression



/*----------This is the submit button--------------*/


function submit() {
    console.log("we are in the submit function");
    
    
    //Get the stored value in localStorage.
    let numBlends = Number(window.localStorage.getItem("blends-ls"));

    //Increment number of blends.
    numBlends ++;

    //Store the new number of juice blends.
    localStorage.setItem("blends-ls", numBlends);
    //console.log(numBlends);

    /*--------NUTRITION INFO-------*/
    //Select the output container for nutrition info.
    const custOrderCard = document.querySelector("#nutrition");

    //Create customer info container.
    let customerCard = document.createElement('div');
    //Create nutritional info container.
    let nutritionCard = document.createElement('div');

    //Create customer info elements.
    let today = document.createElement('p');
    let heading1 = document.createElement('h3');
    let firstName = document.createElement('p');
    let email = document.createElement('p');
    let phone = document.createElement('p');
    

    //Create nutrition info elements.
    let heading2 = document.createElement('h3');
    let fruit1 = document.createElement('p');
    let fruit2 = document.createElement('p');
    let fruit3 = document.createElement('p');
    let instructions = document.createElement('p');

    let carbs = document.createElement('p');
    let protein = document.createElement('p');
    let fats = document.createElement('p');
    let sugar = document.createElement('p');
    let calories = document.createElement('p');

    //Get values and assign to the new elements.

    const now = new Date();
    today.innerHTML = 'order date: ' + now.toLocaleString('default', {month: 'long'}) + ' ' + now.getDay() + ', ' + now.getFullYear();


    heading1.innerHTML = 'Please verify your contact information:'
    firstName.innerHTML = 'name: ' + (document.querySelector("#name").value);
    email.innerHTML = 'email: ' + document.querySelector("#email").value;
    phone.innerHTML = 'phone: ' + document.querySelector("#phone").value;

    heading2.innerHTML = 'You have selected:';
    fruit1.innerHTML = document.querySelector(".fruit-list1").value;
    fruit2.innerHTML = document.querySelector(".fruit-list2").value;
    fruit3.innerHTML = document.querySelector(".fruit-list3").value;
    instructions.innerHTML = 'Special Instructions: ' + document.querySelector("#sp-instructions").value;

    //find fruit1 in data
    //const foundIndex = data.findIndex("name":"Apple")
    const index = 4
    const foundFruit = data[index];
    console.log(foundFruit);

    console.log(foundFruit.name);
    //carbs.innerHTML = `${data.name}`;
    

    //Append customer info to customerCard
    customerCard.appendChild(today);
    customerCard.appendChild(heading1);
    customerCard.appendChild(firstName);
    customerCard.appendChild(email);
    customerCard.appendChild(phone);

    //Append fruit info to nutritionCard
    nutritionCard.appendChild(heading2);
    nutritionCard.appendChild(fruit1);
    nutritionCard.appendChild(fruit2);
    nutritionCard.appendChild(fruit3);
    nutritionCard.appendChild(instructions);

    nutritionCard.appendChild(carbs);

    //Append customerCard to custOrderCard
    custOrderCard.appendChild(customerCard);

    //Append nutritionCard to custOrderCard
    custOrderCard.appendChild(nutritionCard);

    console.log(data);


    //Reset form.
    //document.querySelector("form").reset();

}


