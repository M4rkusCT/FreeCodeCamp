// Haz coincidir patrones de cadena de inicio

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Cambia esta línea
let result = calRegex.test(rickyAndCal);