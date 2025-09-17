// --- KIINDULÁSI ADATOK ---
// Egy tömb, ami diákokat reprezentáló objektumokat tartalmaz.
const diakok = [
    { nev: 'Anna', jegy: 5 },
    { nev: 'Béla', jegy: 3 },
    { nev: 'Cecília', jegy: 4 },
    { nev: 'Dezső', jegy: 1 },
    { nev: 'Erika', jegy: 5 }
];

// Eredeti adatok kiírása
document.getElementById('eredeti-adatok').innerHTML = 
    '<b>Eredeti lista:</b> ' + diakok.map(diak => `${diak.nev} (${diak.jegy})`);

// --- FELADATOK ---

// Készíts egy új tömböt csak a diákok neveiből és írasd ki a tartalmát az eredmeny1 azonosítójú bekezdésbe!


// Szűrd ki  egy új tömbbe azokat a diákokat, akik átmentek (jegyük jobb, mint 1), 
// és írasd ki az új tömböt az eredmeny2 azonosítójú bekezdésbe!.


// Keresd meg az ELSŐ diákot, aki 5-ös jegyet kapott, és írasd ki a nevét (eredmeny3)!


// Ellenőrizd, hogy van-e legalább EGY diák, aki megbukott (jegye 1-es), 
// és írasd ki (igen vagy nem, eredmeny4)!


// Ellenőrizd, hogy MINDEN diák jegye legalább közepes (3-as) vagy jobb-e (igen vagy nem, eredmeny5)!


// Készíts egy ÚJ, a jegyeik alapján növekvő sorrendbe rendezett tömböt a diákokkal, és írasd ki (eredmeny6)!


// Készítsd el a csökkenő sorrenbe rendezett tömböt is (eredmeny7)!

