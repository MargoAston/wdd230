/*This is the hamburger button info*/
function toggleMenu(x) {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("container").classList.toggle("open");

    x.classList.toggle("change");
}

/*This is the update line*/
var lastUpdated = `Last modified: ${document.lastModified}`;
document.getElementById("update-date").innerText=lastUpdated;

/*This is the juice blend count info.*/
//Get element from HTML
const count = document.querySelector("#count");

let test = Number(window.localStorage.getItem("blends-ls"));

//Get the stored value in localStorage.
let numBlends = Number(window.localStorage.getItem("blends-ls"));

//Put value in juiceCount.
count.innerHTML = numBlends;

