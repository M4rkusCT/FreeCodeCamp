// Coincide con todos los caracteres no numéricos

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/ig; // Cambia esta línea
let result = movieName.match(noNumRegex).length;