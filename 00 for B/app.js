const szamok = [65, 44, 13, 5];
document.getElementById("tomb").innerHTML = "Tömb: " + szamok

// *** Tömb elemeinek vizsgálata ***

// .find(): Megkeresi az első elemet, amely megfelel a feltételnek.
const elsoKicsi = szamok.find(n => n < 40);
document.getElementById("tomb1").innerHTML = "Az első 40-nél kisebb szám: " + elsoKicsi;

// .some(): Ellenőrzi, hogy van-e legalább egy elem, amely megfelel a feltételnek.
const vanParos = szamok.some(n => n % 2 === 0);
document.getElementById("tomb2").innerHTML = 
    vanParos ? "Van páros szám" : "Nincs páros szám";

// .every(): Ellenőrzi, hogy minden elem megfelel-e a feltételnek.
const mindPozitiv = szamok.every(n => n > 0);
document.getElementById("tomb3").innerHTML = 
    mindPozitiv ? "Minden szám pozitív" : "Nem minden szám pozitív";

// .includes(): Ellenőrzi, hogy a tömb tartalmaz-e egy adott elemet.
const tartalmaz14et = szamok.includes(14);
document.getElementById("tomb4").innerHTML = 
    tartalmaz14et ? "A tömb tartalmazza a 14-et" : "A tömb nem tartalmazza a 14-et";

// .forEach(): Összead minden tömbelemet
let osszeg = 0;
szamok.forEach((elem) => {
    osszeg += elem;
});
document.getElementById("tomb5").innerHTML = "Összeg: " + osszeg;

// *** Új tömb létrehozása

// .map(): Műveletet végez minden tömbelemmel és új tömbbe teszi az eredményt
const szamok2 = szamok.map(n => 2 * n)
document.getElementById("tomb6").innerHTML = "Duplázás:" + szamok2

// .filter(): Csak a feltételnek megfelelő elemeket teszi az új tömbbe
const szamok3 = szamok.filter(n => n % 2 !== 0)
document.getElementById("tomb7").innerHTML = "Páratlanok:" + szamok3

// .toSorted(): új, rendezett tömböt készít a tömb elemeiből
document.getElementById("tomb8").innerHTML = 
    "Duplázott növekvő sorrendben:" + szamok2.toSorted((a, b) => a - b)
document.getElementById("tomb9").innerHTML = 
    "Duplázott csökkenő sorrendben:" + szamok2.toSorted((a, b) => b - a)