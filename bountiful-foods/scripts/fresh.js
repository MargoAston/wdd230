const url = 'json/fruit.json';

async function getFruitData(url) {
    const response = await fetch(url);
    const data =await response.json();
    
    console.table(data);
    displayFruits(data);
    displayFruits2(data);
    displayFruits3(data);
}

getFruitData(url);

const displayFruits = (fruits, service) => {
    //select the output container element
    const fruitList1 = document.querySelector('.fruit-list1');

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

let submit = () => {


    //Get the stored value in localStorage.
    let numBlends = Number(window.localStorage.getItem("blends-ls"));

    //Increment number of blends.
    numBlends ++;

    //Store the new number of juice blends.
    localStorage.setItem("blends-ls", numBlends);
    console.log(numBlends);

    //Reset form.
    document.querySelector("form").reset();

}