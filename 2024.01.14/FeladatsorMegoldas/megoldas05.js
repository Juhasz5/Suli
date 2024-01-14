/*
document.write("Juhász Ádám<br>");
document.write("Team-14<br>");
document.write("HTML: 50<br>");
document.write("CSS: 40<br>");
document.write("JavaScript: 20<br>");
*/

let a = Number(prompt("Addj meg egy számot:"));
let b = Number(prompt("Add meg az osztó számot:"));
let eredmeny = a % b

if (eredmeny == 0) {
    document.write("A megadott szám osztható maradék nélkül")
}
else {
    document.write("A megadott szám NEM osztható maradék nélkül")
}

/*
if (a%b==0) {
    document.write(`A ${szam}-ot a ${oszto} maradék nélkül osztja`)
}
else {
    document.write(`A ${szam}-ot a ${oszto} nem osztja maradék nélkül`)
}
*/