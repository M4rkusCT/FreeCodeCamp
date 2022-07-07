// Especifica el menor y mayor número de coincidencias

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Cambia esta línea
let result = ohRegex.test(ohStr);