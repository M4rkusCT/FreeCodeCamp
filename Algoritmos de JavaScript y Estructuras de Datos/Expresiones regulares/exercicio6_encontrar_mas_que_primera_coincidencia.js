// Encuentra más que la primera coincidencia

// Se utiliza para encontrar mas de la misma palabra incluso, utilizando /i para incluir palabras que no se diferencia con mayusculas y minusculas.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Cambia esta línea
let result = twinkleStar.match(starRegex); // Cambia esta línea