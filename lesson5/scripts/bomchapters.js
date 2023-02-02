//Get elements
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//Add event listener for add button
button.addEventListener('click', () => {
    //if the input is not empty
    //create a node, give that node a value, append it to an element
    if (input.value !=='') { 
        let chapter = input.value;
        const li = document.createElement('li');
        li.textContent = chapter;
        list.appendChild(li);

        const delete_btn = document.createElement('button');
        delete_btn.textContent = '❌';
        delete_btn.addEventListener('click', () => {
            list.removeChild(li);
        })
        li.appendChild(delete_btn);
    }

    input.value = '';
    input.focus();
});