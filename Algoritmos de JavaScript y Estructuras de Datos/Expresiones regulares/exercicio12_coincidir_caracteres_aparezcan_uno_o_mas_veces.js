// Haz coincidir caracteres que aparecen una o más veces

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Cambia esta línea
let result = difficultSpelling.match(myRegex);