var lastUpdated = `Last updated: ${document.lastModified}`;

document.getElementById("updateDate").innerText=lastUpdated;
 

const copyrightyear = document.querySelector("#copyright");
copyrightyear.textContent = `© ${new Date().getFullYear()} .:|:. Margo Aston .:|:. California`;