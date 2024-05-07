'use strict';

// CREDO DUE ARRAY CON ELEMENTI DIVERSI

const UNO = ["ariete", "toro", "gemelli", "cancro"];
console.log(UNO);

const DUE = [
    "leone", "vergine", "bilancia", "scorpione", "sagittario"];
console.log(DUE);

/*  Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

// CICLO FOR

for (let i = UNO.lenght; i < DUE.lenght; i++)

    // INSERISCO ELEMENTO RANDOM PER EQUIPARARE GLI ARRAY

    {
        
        const randomElement = DUE[Math.floor(Math.random() 
                                            * DUE.length)];

        UNO.push(randomElement);
    
        // 
    
    }

console.log("Array 1: ", UNO);
console.log("Array 2: ", DUE);


 
