// Coincide con todos los números

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/gi; // Cambia esta línea
let result = movieName.match(numRegex).length;