// Encuentra uno o más criminales en una cacería

let criminales = "P1P5P4CCCcP2P6P3";
let reCriminals = /C+/g; // Cambia esta línea
let result = criminales.match(reCriminals);