// Coincide todas las letras y números

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Cambia esta línea
let result = quoteSample.match(alphabetRegexV2).length;