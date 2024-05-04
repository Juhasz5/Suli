//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)
var csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];
function ObjektumFeltolto(feltoltendoElem) {
    var beolvasottAdatok = [];
    for (var i = 0; i < feltoltendoElem.length; i++) {
        var daraboltAdatok = feltoltendoElem[i].split(";");
        var ujCsapat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        };
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}
var adatok = ObjektumFeltolto(csapatAdat);
console.log(adatok);
//1.Adja meg aktuálisan hány csapat szerepel a ranglistán
function CsapatokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}
var csapatok = CsapatokSzama(adatok);
console.log("A ranglistán szereplő csapatok száma: " + csapatok + " csapat");
//2.Írja ki mennyi a résztvevő csapatok átlagpontszáma
function PontszamokAtlaga(vizsgaltTomb) {
    var osszeg = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i].pont;
    }
    return Math.round(osszeg / vizsgaltTomb.length);
}
var pontokAtlaga = PontszamokAtlaga(adatok);
console.log("A csapatok átlagos pontszáma: " + pontokAtlaga);
//3.Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!
function AtlagFelettiek(vizsgaltTomb) {
    var atlagPont = PontszamokAtlaga(adatok);
    var atlagFelettiek = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlagPont) {
            atlagFelettiek.push(vizsgaltTomb[i].nev);
        }
    }
    return atlagFelettiek;
}
var atlagFelettiek = AtlagFelettiek(adatok);
console.log("Az átlagnál több pontot elért csapatok listája: " + atlagFelettiek);
//4.Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma
function LegtobbetJavitoIndex(vizsgaltTomb) {
    var kivalasztottCsapatIndex = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[kivalasztottCsapatIndex].valtozas) {
            kivalasztottCsapatIndex = i;
        }
    }
    return kivalasztottCsapatIndex;
}
var legtobbetJavitoCsapat = LegtobbetJavitoIndex(adatok);
console.log("A legtöbbet javító csapat neve: " + adatok[legtobbetJavitoCsapat].nev);
console.log("A legtöbbet javító csapat helyezése: " + adatok[legtobbetJavitoCsapat].helyezes);
console.log("A legtöbbet javító csapat változása: " + adatok[legtobbetJavitoCsapat].valtozas);
console.log("A legtöbbet javító csapat pontszáma: " + adatok[legtobbetJavitoCsapat].pont);
//5.Határozza meg a adatok közöt megtalálható-e Magyarország csapata!
function SzerepelEMagyarorszag(vizsgaltTomb) {
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == "Magyarország") {
            return true;
        }
    }
    return false;
}
function SzerepelEMagyarorszagEredmeny(vizsgalatEredmenye) {
    if (vizsgalatEredmenye == true) {
        console.log("Az országok között szerepel Magyarország");
    }
    else {
        console.log("Az országok között NEM szerepel Magyarország");
    }
}
SzerepelEMagyarorszagEredmeny(SzerepelEMagyarorszag(adatok));
//6.Készítsen  statisztikát  a  helyezések  változása  (Valtozas)  alapján  csoportosítva  a  csapatok
function ValtozasTipusok(vizsgaltTomb) {
    var valtozasTipusai = [];
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        var szerepelE = false;
        for (var j = 0; j < valtozasTipusai.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusai[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            valtozasTipusai.push(vizsgaltTomb[i].valtozas);
        }
    }
    return valtozasTipusai;
}
function ValtozasMennyisegek(vizsgaltTomb, valtozasTipusai) {
    var valtozasMennyisegek = [];
    for (var i = 0; i < valtozasTipusai.length; i++) {
        valtozasMennyisegek.push(0);
    }
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        for (var j = 0; j < valtozasTipusai.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusai[j]) {
                valtozasMennyisegek[j]++;
            }
        }
    }
    return valtozasMennyisegek;
}
var valtozasTipusai = ValtozasTipusok(adatok);
var valtozasMennyisegek = ValtozasMennyisegek(adatok, valtozasTipusai);
console.log(valtozasTipusai);
console.log(valtozasMennyisegek);
