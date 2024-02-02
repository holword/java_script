
//funkcje + instrukcje warunkowe if
function ObliczPodatek(przychod, koszt, stawka) {
    let dochod = przychod - koszt;
    let podatek;
    if (dochod <= 0) {
        podatek = 0
    } else {
        podatek = dochod * stawka / 100
    }
    return podatek
}

function ObliczPodatekProgresywny(przychod, koszt) {
    let dochod = przychod - koszt;
    let stawka;
    if (dochod >= 120000) {
        stawka = 32
    } else if (dochod > 0) {
        stawka = 19
    } else {
        stawka = 0
    }
    podatek = dochod * stawka / 100
    return `Podatek wynosi ${podatek}`
}

document.write(ObliczPodatekProgresywny(120000, 1000))
document.write("Witaj dzisiaj mamy " + Date())

//zmienne
let cena_netto = 1200
let vat = 23
let cena_brutto = cena_netto + cena_netto * vat / 100
document.write("Netto " + cena_netto + br)
document.write("Brutto " + cena_brutto + br)


//Tablice
let tablica1 = [];
let tablica2 = new Array();
let tablica3 = ["technologie", "informacyjne", 456];
let tablica4 = new Array(5);

//Petle
let x = 1
while (x < 5) {
    document.write(`parametr x wynosi: ${x} ${br}`);
    x += 1; //x++
}


let y = 1
for (let i = 0; i < 5; i++) {
    document.write(`parametr y wynosi ${y} ${br}`)
    y = y * 5
}

for (let i = 10; i > 0; i--) {
    document.write(`i wynosi ${i} ${br}`);
}

//Petla zagniezdzona
let sala = [
    ["Zbigniew", "Bożydar", "Polikarp"],
    ["Adam", "Apolonia", "Romuald"],
    ["Zdzisław", "Aleksander", "Dobromir"]
];
for (let i = 0; i < sala.length; i++) {
    document.write(`${br} rzad: ${i + 1} ${br}`);
    for (j = 0; j < sala[0].length; j++) {
        document.write(`${sala[i][j]},`)
    }
}

//Pobieranie danych do zmiennych (częśc htmlowa)
/*
<form name="myform">
    imie:
    <input type="text" name="name"><br/>
    wiek
    <input type="text" name="age"><br />
    <input type="button" value="Submit" onclick="MyAction()">
</form>
*/

function Onclick() {
    let 
}