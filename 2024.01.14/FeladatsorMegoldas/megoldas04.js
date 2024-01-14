/*
document.write("Juhász Ádám<br>");
document.write("Team-14<br>");
document.write("HTML: 50<br>");
document.write("CSS: 40<br>");
document.write("JavaScript: 20<br>");
*/

let kor = Number(prompt("Add meg az életkorod:"));

if (kor >= 0 && kor < 6) {
    document.write("Kisgyermekkor");
    //  document.write(`${kor} évesen kisgyermekkorban vagy`);    
}
else if (kor >= 6 && kor < 12) {
    document.write("Gyermekkor");
}
else if (kor >= 12 && kor < 16) {
    document.write("Serdülőkor");
}
else if (kor >= 16 && kor < 20) {
    document.write("Ifjúkor");
}
else if (kor >= 20 && kor < 30) {
    document.write("Fiatal felnőttkor");
}
else if (kor >= 30 && kor < 60) {
    document.write("Felnőttkor");
}
else if (kor >= 60 && kor <= 120) {
    document.write("Aggkor");
}
else {
    document.write("HIBÁS Adat!");
    //  document.write(`${kor} NEM létezik az adatbázisban mint lehetőség!`);    
}