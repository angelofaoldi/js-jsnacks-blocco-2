'use strict';

// CREO DUE ARRAY CON ELEMENTI DIVERSI

const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30];

console.log("Array 1: ", array1);
console.log("Array 2: ", array2);

/*  Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

// CICLO WHILE + PUSH ELEMENTO RANDOM

while (array1.length !== array2.length) {
    if (array1.length < array2.length) {
        // Aggiungo un elemento casuale all'array1
        array1.push(Math.floor(Math.random() * 100));
    } else {
        // Aggiungo un elemento casuale all'array2
        array2.push(Math.floor(Math.random() * 100));
    }
}

console.log("Array 1: ", array1);
console.log("Array 2: ", array2);



