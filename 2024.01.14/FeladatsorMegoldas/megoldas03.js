/*
document.write("Juhász Ádám<br>");
document.write("Team-14<br>");
document.write("HTML: 50<br>");
document.write("CSS: 40<br>");
document.write("JavaScript: 20<br>");
*/
//Ezt a feladatot nem tudtam megcsinálni meg vártam a megoldást!!!

let also = Number(prompt("Add meg a intervallum alsó határát"));
let felso = Number(prompt("Add meg a intervallum felső határát"));

let generaltSzam = Math.round(Math.random() * (felso - also)) + also;
if (generaltSzam % 2 == 0) {
    document.write(`A generált páros szám a ${also}:${felso} intervallumban:${generaltSzam}`)
}
else if (generaltSzam != felso) {
    document.write(`A generált páros szám a ${also}:${felso} intervallumban:${generaltSzam + 1}`)
}
else {
    document.write(`A generált páros szám a ${also}:${felso} intervallumban:${generaltSzam - 1}`)
}

