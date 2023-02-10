//t(temperature) and s(speed) values are temperarily hard set.
const t1 = document.getElementById("temperature");
const s1 = document.getElementById("wind-speed");

let t = parseInt(t1.textContent);
let s = parseInt(s1.textContent);



//Calculate the windchill
if (t <= 50 && s > 3) {
    let chill = 35.74 + (0.6215 * t) - (35.76 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16));

    chill = Math.trunc(chill);
    let text = chill.toString();
    let text2 = "℉";
    let result = text.concat(text2);

    //Put the chill into the html element
    document.getElementById("wind-chill").innerText = result;
}
else {
    document.getElementById("wind-chill").innerText = "N/A";
}