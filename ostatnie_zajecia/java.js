let zakupy = ['chleb', 'jajka', 'ser', 'maslo', 'woda'];
/*
for(let i = 0; i < zakupy.length; i++) {
    console.log(zakupy[i]);
} */

for (let z of zakupy) {
    console.log(z);
}

let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}

let b = [1, 2, 3, 4, 100]; // Dodaj "let" przed zmienną b

function OstatniElement(lista) {
    let a = lista.length; // Popraw "lenght" na "length"
    if (a > 0) {
        return lista[a - 1];
    } else {
        return null;
    }
}

console.log(OstatniElement(b));

function Day(n) {
    let dni = { 1: 'poniedzialek', 2: 'wtorek', 3: 'sroda', 4: 'czwartek', 5: 'piatek', 6: 'sobota', 7: 'niedziela' }
    if (n > 7) {
        return null
    } else if (n <= 0) {
        return null
    } else {
        return dni[n]
    }
}

console.log(Day(5))

function SumArray(parametr) {
    let suma = 0;
    for (let i of parametr) {
        suma = i + suma;
    }
}

console.log(SumArray([1, 5, 6]))

let lista = []


function Add() {
    let newElement = document.forms['ToDo'].elements['add'].value;
    lista.push(newElement);
    document.forms['ToDo'].elements['add'].value = '';
    List()
}


function Delete() {
    let deleteElement = document.forms['ToDo'].elements['delete'].value;
    lista.splice(lista.indexOf(deleteElement), 1);
    document.forms['ToDo'].elements['delete'] = '';
    List()

}


function List() {
    console.clear
    console.log('Lista zakupów: ');
    for (let l of lista) {
        console.log(`${lista.indexOf(1) + 1}: ${1}`);
    }
}