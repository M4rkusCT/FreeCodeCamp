// Lookahead positivo y negativo

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})(?!\d{5})/; // Cambia esta línea
let result = pwRegex.test(sampleWord);