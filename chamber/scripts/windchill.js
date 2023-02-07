//t(temperature) and s(speed) values are temperarily hard set.
let t = 15;
const s = 6;

//Put t and s into the html elements
document.getElementById("temperature").innerText = t;
document.getElementById("wind-speed").innerText = s;

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