/*This is the date info*/
const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
}

const weekday = ["Sunday, ", "Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, "];
const d = new Date();
let today = weekday[d.getDay()];

document.getElementById("day").innerHTML = today;
document.getElementById("date").innerHTML = new Date(). toLocaleDateString("en-UK", options)

/*This is the hamberger button info*/
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}


function myFunction(x) {
  x.classList.toggle("change");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

/*This is the copyright line */
const copyrightYear = document.querySelector("#copyright");
copyrightYear.textContent = `© ${new Date().getFullYear()} .:|:. Margo Aston .:|:. California`;

/*This is the update line*/
var lastUpdated = `Last modified: ${document.lastModified}`;

document.getElementById("update-date").innerText=lastUpdated;