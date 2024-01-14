/*
document.write("Juhász Ádám<br>");
document.write("Team-14<br>");
document.write("HTML: 50<br>");
document.write("CSS: 40<br>");
document.write("JavaScript: 20<br>");
*/

let a = Number(prompt("Addj meg egy számot:"));
let b = Number(prompt("Add meg a szám hatványra emelésének értékét:"));

document.write(`A ${a}<sup>${b}</sup>=` + Math.pow(a, b));

