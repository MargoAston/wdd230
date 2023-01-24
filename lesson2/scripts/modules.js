var lastUpdated = `Last updated: ${document.lastModified}`;

document.getElementById("update-date").innerText=lastUpdated;
 

const copyrightYear = document.querySelector("#copyright");
copyrightYear.textContent = `© ${new Date().getFullYear()} .:|:. Margo Aston .:|:. California`;