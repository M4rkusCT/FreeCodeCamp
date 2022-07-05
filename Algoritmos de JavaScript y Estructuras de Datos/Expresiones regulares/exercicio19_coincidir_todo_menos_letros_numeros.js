// Haz coincidir todo menos letras y números

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Cambia esta línea
let result = quoteSample.match(nonAlphabetRegex).length;