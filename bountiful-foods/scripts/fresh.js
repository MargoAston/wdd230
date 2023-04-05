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

/*-------FRUIT SELECTION--drop-down-boxes------*/
const displayFruits = (fruits, service) => {
    //select the output container element
    const fruitList1 = document.querySelector('#fruit-list1');

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
    const fruitList2 = document.querySelector('#fruit-list2');

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
    const fruitList3 = document.querySelector('#fruit-list3');

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

    //Get the stored value in localStorage. 
    let numBlends = Number(window.localStorage.getItem("blends-ls"));


    //Increment number of blends.
    numBlends ++;
    

    //Store the new number of juice blends.
    localStorage.setItem("blends-ls", numBlends);

    /*--------NUTRITION INFO-------*/
    //Select the output container for nutrition info.
    const custOrderCard = document.querySelector("#nutrition");

    const nutritionTable = document.querySelector("table");

    const row1 = document.querySelector(".row1");
    const row2 = document.querySelector(".row2");
    const row3 = document.querySelector(".row3");
    const row4 = document.querySelector(".row4");
    const row5 = document.querySelector(".row5");

    //Create customer info container.
    let customerCard = document.createElement('div');
    //Create recipe info container.
    let recipeCard = document.createElement('div');
    //Create nutritional info container.
    let nutritionCard = document.createElement('div');

    //Set attributes
    customerCard.setAttribute('class', 'verify-name');
    recipeCard.setAttribute('class', 'recipe');

    //Create customer info elements.
    let today = document.createElement('p');
    let line = document.createElement('hr');
    let firstName = document.createElement('p');
    let email = document.createElement('p');
    let phone = document.createElement('p');
    

    //Create recipe info elements.
    let heading2 = document.createElement('h3');
    let fruit1 = document.createElement('p');
    let fruit2 = document.createElement('p');
    let fruit3 = document.createElement('p');
    let instructions = document.createElement('p');

    //Create nutrition info elements.
    let carbs = document.createElement('td');
    let protein = document.createElement('td');
    let fat = document.createElement('td');
    let sugar = document.createElement('td');
    let calories = document.createElement('td');
    
    //Create variables to hold nutrition data for each fruit
    let carbs1 = 0;
    let protein1 = 0;
    let fat1 = 0;
    let sugar1 = 0;
    let calories1 = 0;
    
    let carbs2 = 0;
    let protein2 = 0;
    let fat2 = 0;
    let sugar2 = 0;
    let calories2 = 0;

    let carbs3 = 0;
    let protein3 = 0;
    let fat3 = 0;
    let sugar3 = 0;
    let calories3 = 0;

    //Get values and assign to the new elements.

    const now = new Date();
    today.innerHTML = 'order date: ' + now.toLocaleString('default', {month: 'long'}) + ' ' + now.getDate() + ', ' + now.getFullYear();


    firstName.innerHTML = document.querySelector("#name").value + "'s Private Label juice blend";
    email.innerHTML = document.querySelector("#email").value;
    phone.innerHTML = document.querySelector("#phone").value;

    heading2.innerHTML = 'Ingredients:';
    fruit1.innerHTML = document.querySelector("#fruit-list1").value;
    fruit2.innerHTML = document.querySelector("#fruit-list2").value;
    fruit3.innerHTML = document.querySelector("#fruit-list3").value;
    instructions.innerHTML = 'Special Instructions: ' + document.querySelector("#sp-instructions").value;

    //find fruit1 in data
    data.forEach((fruit)=> {
        if (fruit.name == fruit1.innerHTML) {
            carbs1 = parseFloat(fruit.nutritions.carbohydrates);
            protein1 = parseFloat(fruit.nutritions.protein);
            fat1 = parseFloat(fruit.nutritions.fat);
            sugar1 = parseFloat(fruit.nutritions.sugar);
            calories1 = parseFloat(fruit.nutritions.calories);
        }
    })

    
    //find fruit2 in data
    data.forEach((fruit)=> {
        if (fruit.name == fruit2.innerHTML) {
            carbs2 = parseFloat(fruit.nutritions.carbohydrates);
            protein2 = parseFloat(fruit.nutritions.protein);
            fat2 = parseFloat(fruit.nutritions.fat);
            sugar2 = parseFloat(fruit.nutritions.sugar);
            calories2 = parseFloat(fruit.nutritions.calories);
        }
    })

    //find fruit3 in data
    data.forEach((fruit)=> {
        if (fruit.name == fruit3.innerHTML) {
            carbs3 = parseFloat(fruit.nutritions.carbohydrates);
            protein3 = parseFloat(fruit.nutritions.protein);
            fat3 = parseFloat(fruit.nutritions.fat);
            sugar3 = parseFloat(fruit.nutritions.sugar);
            calories3 = parseFloat(fruit.nutritions.calories);
        }
    })

    //Add nutritional data to table
    row1.innerHTML = ((carbs1 + carbs2 + carbs3).toFixed(2));
    row2.innerHTML = ((protein1 + protein2 + protein3).toFixed(2));
    row3.innerHTML = ((fat1 + fat2 + fat3).toFixed(2));
    row4.innerHTML = ((sugar1 + sugar2 + sugar3).toFixed(2));
    row5.innerHTML = ((calories1 + calories2 + calories3).toFixed(2));
    

    //Append customer info to customerCard
    customerCard.appendChild(today);
    customerCard.appendChild(line);
    customerCard.appendChild(firstName);
    customerCard.appendChild(email);
    customerCard.appendChild(phone);

    //Append fruit info to recipeCard
    recipeCard.appendChild(heading2);
    recipeCard.appendChild(fruit1);
    recipeCard.appendChild(fruit2);
    recipeCard.appendChild(fruit3);
    recipeCard.appendChild(instructions);


    //Append customerCard to custOrderCard
    custOrderCard.appendChild(customerCard);

    //Append recipeCard to custOrderCard
    custOrderCard.appendChild(recipeCard);

    //Append nutritionCard to custOrderCard
    custOrderCard.appendChild(nutritionCard);

    nutritionTable.style.display = 'inline-block';
    nutritionTable.style.margin = '0';


    //Reset form.
    //document.querySelector("form").reset();
    //do not display submit button after it is clicked
    document.querySelector("#submit-btn").style.display = 'none';

}


