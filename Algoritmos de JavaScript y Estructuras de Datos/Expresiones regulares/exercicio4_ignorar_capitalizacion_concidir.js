// Ignora la capitalización al coincidir

// Ignora si es mayuscula o minuscula la palabra que buscas.

let myString = "freeCodeCamp";
let fccRegex = /FreecODEcAMP/i; // Cambia esta línea
let result = fccRegex.test(myString);